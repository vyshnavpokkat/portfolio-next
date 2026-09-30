from copy import deepcopy
from pathlib import Path
import shutil

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Mm, Pt, RGBColor


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "Vyshnav_P_Full_Stack_Developer_CV.docx"
WEB_COPY = ROOT / "public" / "Vyshnav-P-Resume.docx"

INK = RGBColor(28, 30, 33)
MUTED = RGBColor(75, 79, 84)
ACCENT = RGBColor(48, 59, 113)
FONT = "Aptos"


def set_font(run, name=FONT, size=10, bold=False, color=INK, italic=False):
    run.font.name = name
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), name)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), name)
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic
    run.font.color.rgb = color


def remove_paragraph_border(paragraph):
    """Remove a border inherited by a paragraph while preserving its style."""
    p_pr = paragraph._p.get_or_add_pPr()
    p_bdr = p_pr.find(qn("w:pBdr"))
    if p_bdr is not None:
        p_pr.remove(p_bdr)


def set_cell_margins(cell, top=40, start=55, bottom=40, end=55):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcMar = tcPr.first_child_found_in("w:tcMar")
    if tcMar is None:
        tcMar = OxmlElement("w:tcMar")
        tcPr.append(tcMar)
    for margin, value in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tcMar.find(qn(f"w:{margin}"))
        if node is None:
            node = OxmlElement(f"w:{margin}")
            tcMar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def add_hyperlink(paragraph, text, url, color=ACCENT, underline=False):
    part = paragraph.part
    rel_id = part.relate_to(
        url,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        is_external=True,
    )
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), rel_id)
    run = OxmlElement("w:r")
    rPr = OxmlElement("w:rPr")
    rFonts = OxmlElement("w:rFonts")
    rFonts.set(qn("w:ascii"), FONT)
    rFonts.set(qn("w:hAnsi"), FONT)
    rPr.append(rFonts)
    size = OxmlElement("w:sz")
    size.set(qn("w:val"), "18")
    rPr.append(size)
    color_node = OxmlElement("w:color")
    color_node.set(qn("w:val"), str(color))
    rPr.append(color_node)
    if underline:
        u = OxmlElement("w:u")
        u.set(qn("w:val"), "single")
        rPr.append(u)
    run.append(rPr)
    text_node = OxmlElement("w:t")
    text_node.text = text
    run.append(text_node)
    hyperlink.append(run)
    paragraph._p.append(hyperlink)


def add_section_heading(doc, text):
    p = doc.add_paragraph(style="Heading 1")
    p.paragraph_format.space_before = Pt(12)
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.keep_with_next = True
    run = p.add_run(text.upper())
    set_font(run, size=10.5, bold=True, color=INK)
    run.font.letter_spacing = Pt(0.5)
    return p


def add_bullet(doc, text, size=9.4, after=3.2):
    p = doc.add_paragraph(style="List Bullet")
    p.paragraph_format.left_indent = Inches(0.18)
    p.paragraph_format.first_line_indent = Inches(-0.12)
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = 1.08
    r = p.add_run(text)
    set_font(r, size=size, color=MUTED)
    return p


def add_role(doc, role, company, dates, location, bullets):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(5)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(role)
    set_font(r, size=10.5, bold=True)
    r = p.add_run(f"  |  {company}")
    set_font(r, size=10.5, bold=True, color=ACCENT)

    meta = doc.add_paragraph()
    meta.paragraph_format.space_after = Pt(5)
    meta.paragraph_format.keep_with_next = True
    r = meta.add_run(f"{dates}  |  {location}")
    set_font(r, size=8.6, color=MUTED, italic=True)

    for bullet in bullets:
        add_bullet(doc, bullet)


def add_project(doc, name, subtitle, tech, bullets, url=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(7)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    if url:
        add_hyperlink(p, name, url)
    else:
        r = p.add_run(name)
        set_font(r, size=10.2, bold=True, color=ACCENT)
    r = p.add_run(f"  |  {subtitle}")
    set_font(r, size=9.2, bold=True)

    stack = doc.add_paragraph()
    stack.paragraph_format.space_after = Pt(4)
    stack.paragraph_format.keep_with_next = True
    r = stack.add_run(tech)
    set_font(r, size=8.4, color=MUTED, italic=True)
    for bullet in bullets:
        add_bullet(doc, bullet, size=9.1, after=2.5)


doc = Document()
section = doc.sections[0]
section.page_width = Mm(210)
section.page_height = Mm(297)
section.top_margin = Inches(0.5)
section.bottom_margin = Inches(0.5)
section.left_margin = Inches(0.64)
section.right_margin = Inches(0.64)

styles = doc.styles
styles["Normal"].font.name = FONT
styles["Normal"]._element.rPr.rFonts.set(qn("w:ascii"), FONT)
styles["Normal"]._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
styles["Normal"].font.size = Pt(9.5)
styles["Normal"].font.color.rgb = MUTED
styles["Title"].font.name = FONT
styles["Title"].font.color.rgb = RGBColor(0, 0, 0)
styles["Heading 1"].font.name = FONT
styles["Heading 1"].font.color.rgb = RGBColor(0, 0, 0)

title = doc.add_paragraph(style="Title")
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
title.paragraph_format.space_after = Pt(1)
r = title.add_run("VYSHNAV P")
set_font(r, size=21, bold=True, color=RGBColor(0, 0, 0))
title_style_p_pr = styles["Title"]._element.get_or_add_pPr()
title_style_border = title_style_p_pr.find(qn("w:pBdr"))
if title_style_border is not None:
    title_style_p_pr.remove(title_style_border)
remove_paragraph_border(title)

subtitle = doc.add_paragraph()
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
subtitle.paragraph_format.space_after = Pt(4)
r = subtitle.add_run("FULL-STACK DEVELOPER  |  FRONTEND-FOCUSED")
set_font(r, size=9.5, bold=True, color=ACCENT)

contact = doc.add_paragraph()
contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
contact.paragraph_format.space_after = Pt(8)
r = contact.add_run("Kerala, India  |  ")
set_font(r, size=8.8, color=MUTED)
add_hyperlink(contact, "vyshnavpkt22@gmail.com", "mailto:vyshnavpkt22@gmail.com")
r = contact.add_run("  |  ")
set_font(r, size=8.8, color=MUTED)
add_hyperlink(contact, "LinkedIn", "https://www.linkedin.com/in/vyshnav-pokkat-0a9525246/")
r = contact.add_run("  |  ")
set_font(r, size=8.8, color=MUTED)
add_hyperlink(contact, "GitHub", "https://github.com/vyshnavpokkat")

add_section_heading(doc, "Professional Summary")
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(3)
p.paragraph_format.line_spacing = 1.05
summary = (
    "Full-stack developer with 3+ years of experience and a frontend-first approach, building responsive web applications, "
    "real-time operational dashboards and customer platforms with JavaScript, TypeScript, React.js and Next.js. "
    "Hands-on backend experience includes Java, Spring Boot, REST API creation and integration, SQL, Redis and Next.js server-side development. "
    "Professional domain experience spans crypto and blockchain-based mining systems, PSP integrations, payment workflows, reporting and production support."
)
r = p.add_run(summary)
set_font(r, size=9.5, color=MUTED)

add_section_heading(doc, "Technical Skills")
skills = [
    ("Frontend", "JavaScript ES6+, TypeScript, React.js, Next.js, HTML5, CSS3, responsive UI, reusable components"),
    ("State and UI", "Redux, Recoil, Context API, React Router, Tailwind CSS, Ant Design, Material UI, Bootstrap, SCSS"),
    ("Backend and APIs", "Java, Spring Boot, REST APIs, Axios, Fetch API, JSON, Next.js server-side development"),
    ("Data and Infrastructure", "SQL, Redis, Firebase, Firestore, Docker, Nginx, Linux/server environments"),
    ("Real-time and Mining", "MQTT, EMQX, WebSockets, ASIC miners, mining pools, workers, hashrate, power and revenue monitoring"),
    ("Tools", "Git, GitHub, GitLab, npm, Yarn, Gradle, Recharts, Chart.js, ExcelJS, XLSX, IntelliJ IDEA, Visual Studio Code"),
]
for label, value in skills:
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(1.2)
    r = p.add_run(f"{label}: ")
    set_font(r, size=9, bold=True)
    r = p.add_run(value)
    set_font(r, size=9, color=MUTED)

add_section_heading(doc, "Selected Projects")
add_project(
    doc,
    "Segments",
    "Company Website and Customer Mining Platform",
    "React.js | Next.js | TypeScript | REST APIs | Docker | PSP and Crypto Payments",
    [
        "Built and maintained company pages and a secure customer dashboard for daily mining operations, operational and financial reports, payments, wallets, top-ups and hosting information.",
        "Owned frontend delivery from requirements and interface implementation through API integration, responsive behavior, validation and production support.",
        "Supported backend API creation and payment business logic for customer accounts, transaction flows and mining-related operational data.",
        "Connected operational and payment data to clear customer-facing views so users can follow mining activity, reports and account actions from one platform.",
    ],
    "https://www.segments.ae/",
)
add_project(
    doc,
    "SegPool",
    "Mining Pool and Live Mining Data",
    "React.js | TypeScript | Tailwind CSS | Ant Design | REST APIs | Docker",
    [
        "Built real-time dashboards, data-rich tables and filters for live hashrate, miners, workers and pool performance across supported networks.",
        "Designed clear loading, empty and error states so users can understand changing pool and worker conditions quickly.",
        "Created and integrated REST APIs and supported backend data handling, debugging and production mining features.",
        "Organized complex live metrics into responsive views that remain usable across desktop and mobile screens.",
    ],
    "https://www.segpool.com/",
)
add_project(
    doc,
    "CMiner",
    "Internal Mining Operations Platform",
    "React.js | Next.js | TypeScript | MQTT | EMQX | WebSockets | Recharts | Docker",
    [
        "Built operations dashboards for active machines, daily reports, hardware health, hashrate, power, revenue and online/offline monitoring.",
        "Developed frontend workflows for customer records, inventory, pool configuration, hosting costs, hash billing and machine settings.",
        "Integrated live device telemetry and status updates through MQTT, EMQX and WebSockets while supporting the APIs used by operations teams.",
        "Helped centralize daily operational reporting so teams can identify unhealthy or offline machines and review customer and hardware information efficiently.",
    ],
)
add_project(
    doc,
    "WindsApp and Winds Travel",
    "Rewards and Travel Products",
    "React.js | JavaScript | Redux | REST APIs | Axios | HTML5 | CSS3",
    [
        "Developed voucher, wallet-history and transaction experiences with clear filtering, pagination, infinite scrolling and API-driven states.",
        "Implemented responsive flight and hotel search and booking flows and reusable UI components for consistent behavior across products.",
        "Worked closely with backend and product teammates to resolve integration issues, refine user flows and support releases.",
    ],
)

add_section_heading(doc, "Professional Experience")
add_role(
    doc,
    "Software Engineer / Frontend Developer",
    "AdPumb / Segments Cloud Computing LLC",
    "Sep 2024 - Present",
    "Kerala, India | Full-time",
    [
        "Own frontend implementation across the Segments customer platform, SegPool live mining-pool product and CMiner internal operations system using React.js, Next.js and TypeScript.",
        "Translate operational requirements into responsive dashboards, reusable components, data-rich tables and reporting workflows for customers and internal teams.",
        "Build interfaces for daily mining activity, live hashrate and worker data, payments, active-machine status, hardware health, revenue, inventory and customer records.",
        "Create and integrate REST APIs and contribute to Java and Spring Boot service, repository and DTO layers when features require backend changes.",
        "Support PSP and crypto-payment workflows including wallets, top-ups, debits, transaction states, validation and payment-related business rules.",
        "Integrate MQTT, EMQX and WebSocket data streams, investigate production issues and coordinate fixes across frontend, backend and infrastructure concerns.",
    ],
)
add_role(
    doc,
    "Junior Frontend Developer",
    "Winds e Pvt Ltd",
    "Apr 2023 - Feb 2024",
    "Bengaluru, India",
    [
        "Worked in a two-member frontend team, taking hands-on responsibility for feature delivery across WindsApp rewards and Winds Travel products.",
        "Developed voucher, wallet-history and transaction interfaces with filtering, pagination, infinite scrolling, validation and REST API integration.",
        "Built reusable responsive components and dynamic flight and hotel search and booking flows across desktop and mobile layouts.",
        "Contributed to SEO improvements, application maintenance, bug fixing and production issue resolution while collaborating with backend and product teams.",
    ],
)

add_section_heading(doc, "Additional Engineering Experience")
add_bullet(doc, "Worked with Java and Spring Boot service/repository architecture, DTO and service-layer logic, Gradle workflows, uptime aggregation queries and mining service integrations including NICEHASH and ANTPOOL.")
add_bullet(doc, "Work with SQL, Redis, Docker, Nginx and Linux-based environments to support data access, caching, deployments and production troubleshooting.")
add_bullet(doc, "Use AI-assisted development tools for coding, debugging, refactoring, understanding unfamiliar code, research and development, and improving day-to-day engineering productivity in IntelliJ IDEA and Visual Studio Code.")

add_section_heading(doc, "Education")
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(0)
r = p.add_run("Bachelor of Technology in Electrical and Electronics Engineering")
set_font(r, size=10, bold=True)
r = p.add_run("  |  2022")
set_font(r, size=9.2, color=MUTED)

# Remove empty trailing paragraphs and apply page-number-free clean footer.
for paragraph in doc.paragraphs:
    paragraph.paragraph_format.widow_control = True

doc.core_properties.title = "Vyshnav P Full Stack Developer Resume"
doc.core_properties.subject = "Professional resume"
doc.core_properties.author = "Vyshnav P"
doc.core_properties.keywords = "Full Stack Developer, Frontend Developer, React, Next.js, TypeScript, Java, Spring Boot"

doc.save(OUTPUT)
shutil.copyfile(OUTPUT, WEB_COPY)
print(OUTPUT)
print(WEB_COPY)
