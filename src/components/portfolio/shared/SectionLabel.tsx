interface SectionLabelProps {
  index: string;
  label: string;
  align?: "left" | "center";
}

export function SectionLabel({ index, label, align = "left" }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
    >
      <span className="kicker tab-num">{index}</span>
      <span className="h-px w-10 bg-ink/30" />
      <span className="kicker">{label}</span>
    </div>
  );
}
