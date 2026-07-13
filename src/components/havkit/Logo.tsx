import havkitIcon from "@/assets/brand/havkit-icon.png";

export function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5"
      aria-label="HAVKIT home"
    >
      <img
        src={havkitIcon}
        alt=""
        width={34}
        height={34}
        className="h-[34px] w-[34px] shrink-0 rounded-full"
      />
      <span className="text-lg tracking-[0.18em] font-medium text-foreground">
        HAVKIT
      </span>
    </a>
  );
}
