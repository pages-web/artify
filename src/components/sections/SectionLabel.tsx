interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {text}
      </span>
      <span className="h-px w-12 bg-primary" />
    </div>
  );
}
