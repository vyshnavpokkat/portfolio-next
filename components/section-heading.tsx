export function SectionHeading({
  number,
  label,
  title,
  note,
}: {
  number: string;
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {note && <span className="handwritten section-note">{note}</span>}
    </div>
  );
}
