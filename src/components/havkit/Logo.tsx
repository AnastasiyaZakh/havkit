export function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5"
      aria-label="HAVKIT — home"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        className="shrink-0"
      >
        <circle cx="16" cy="16" r="16" fill="#1F4D4D" />
        <g fill="#F2C25B">
          <ellipse cx="16" cy="19.5" rx="6" ry="5" />
          <ellipse cx="8.5" cy="12" rx="3" ry="4" />
          <ellipse cx="16" cy="9" rx="3.2" ry="4.2" />
          <ellipse cx="23.5" cy="12" rx="3" ry="4" />
        </g>
      </svg>
      <span className="text-lg tracking-[0.18em] font-medium text-foreground">
        HAVKIT
      </span>
    </a>
  );
}
