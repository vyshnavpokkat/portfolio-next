export function InkArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="74"
      height="44"
      viewBox="0 0 74 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7c16 1 17 24 39 22 9 0 16-4 25-11M54 18l15-2-3 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectSketch({ type }: { type: string }) {
  return (
    <svg
      className="project-sketch"
      viewBox="0 0 460 260"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`hatch-${type}`}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(24)"
        >
          <path
            d="M0 0v7"
            stroke="currentColor"
            strokeWidth=".5"
            opacity=".2"
          />
        </pattern>
      </defs>
      <g
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {type === "ecosystem" && (
          <>
            <path d="M166 85l128-3 3 96-129 3zM171 89l120-2 2 87-122 2" />
            <path d="M168 106l127-2" />
            <circle cx="178" cy="96" r="2" />
            <circle cx="187" cy="96" r="2" />
            <path d="M207 128l-15 13 16 11m45-24 15 12-15 13m-17-28-11 34" />
            <path d="M44 45l63 1-1 46-64-2zM349 43l62-1 2 48-64 2zM45 187l64-2-1 38-64 1zM350 186l64 2-2 39-61-2z" />
            <path
              d="M111 69c39 0 33 55 54 55m132-3c30-3 16-53 51-54M109 203c34 0 28-53 57-52m130 1c37 0 20 52 52 53"
              strokeDasharray="4 4"
            />
            <path d="M56 58h37m-36 8h37m-37 9h23M360 56h41m-41 9h41m-41 10h27M56 197h40m-40 9h28M362 199h37m-37 9h25" />
          </>
        )}
        {type === "pool" && (
          <>
            {[50, 112, 174].map((x) => (
              <g key={x}>
                <path d={`M${x} 62l44-2 2 66-45 2z`} />
                <path d={`M${x + 8} 74h28m-28 9h28m-28 9h28`} />
                <circle cx={x + 23} cy="113" r="4" />
                <path d={`M${x + 23} 134v40h105`} strokeDasharray="3 4" />
              </g>
            ))}
            <path d="M268 74l135-2 2 120-137 2zM273 80l124-2 2 107-126 2M283 162l18-17 18 6 18-36 17 9 18-25 18 5" />
            <path d="M285 99v70h105" opacity=".5" />
            <path d="M224 174h35m-9-6 9 6-9 6" />
          </>
        )}
        {type === "monitor" && (
          <>
            <path d="M41 90l66-2 2 83-67 2zM49 101h49m-49 10h49m-49 10h49" />
            <circle cx="75" cy="151" r="9" />
            <circle cx="75" cy="151" r="4" />
            <path d="M115 129h48l7-12 10 25 10-23 9 10h40m-10-6 10 6-10 6" />
            <path d="M251 58l161 2-2 129-160-1zM258 66l146 1-1 113-145 1M311 190l-4 18m39-18 4 18m-56 1h68" />
            <path d="M273 113l15-1 9-19 12 44 13-23h16l12-16 11 28 12-13h18M271 155h36m-36 7h25m41-7h49m-49 7h37" />
          </>
        )}
        {type === "journey" && (
          <>
            <path
              d="M50 179c29-76 68-12 112-51s45-75 98-47 60 102 136 30"
              strokeDasharray="5 6"
            />
            <circle cx="51" cy="179" r="8" />
            <circle cx="396" cy="111" r="8" />
            <path d="M98 58l68 10-11 46-66-13zM104 72l48 7m-49 3 37 6m-40 3 26 4" />
            <path d="M213 130l30-12-4 14 28 21-7 6-32-13-12 22-6-2 7-27-17-12 4-5z" />
            <path d="M313 165l51-2 2 48-54 1zM325 211v-19h14v19m-17-35h6m12 0h7m-24 9h6m12 0h7" />
          </>
        )}
      </g>
      <path
        d="M45 238c104-3 230 3 370-2"
        stroke="currentColor"
        strokeWidth=".6"
        opacity=".3"
      />
    </svg>
  );
}
