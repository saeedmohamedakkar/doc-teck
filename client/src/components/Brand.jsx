// DocTeck visual reminder: Obsidian Clinic Ledger uses a bold gold monogram, editorial serif accents, and no gratuitous ornament.
export function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`} aria-label="DocTeck">
      {!compact && <span className="brand__wordmark"><i>Doc</i>Teck</span>}
    </div>
  );
}
