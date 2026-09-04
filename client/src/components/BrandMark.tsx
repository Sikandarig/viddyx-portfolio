interface BrandMarkProps {
  className?: string;
}

export default function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="ZELWICK">
      <svg
        viewBox="0 0 40 40"
        width="40"
        height="40"
        role="img"
        aria-label="ZELWICK brand mark"
        className="h-10 w-10 shrink-0"
      >
        <title>ZELWICK</title>
        <rect width="40" height="40" rx="10" fill="#0A0A0A" />
        <path
          d="M10 11h20L12 29h18"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 29h7"
          fill="none"
          stroke="#EC4899"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-wide text-white">ZELWICK</span>
    </div>
  );
}
