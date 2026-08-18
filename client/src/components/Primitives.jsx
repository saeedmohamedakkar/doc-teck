// DocTeck visual reminder: interface primitives remain measured, warm, and legible against the near-black ledger canvas.
import { AlertTriangle, Check, X } from "lucide-react";

export function StatusBadge({ status }) {
  const label = status.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return <span className={`status status--${status}`}>{label}</span>;
}

export function Avatar({ initials, size = "md" }) {
  return <span className={`avatar avatar--${size}`}>{initials}</span>;
}

export function EmptyState({ title, detail, actionLabel, onAction }) {
  return <div className="empty-state"><div className="empty-state__line" /><h3>{title}</h3><p>{detail}</p>{actionLabel && <button className="button button--gold button--small" onClick={onAction}>{actionLabel}</button>}</div>;
}

export function LoadingState({ label = "Loading clinic records" }) {
  return <div className="loading-state"><span className="loader" /><span>{label}</span></div>;
}

export function Modal({ title, eyebrow, children, onClose, wide = false }) {
  return <div className="modal-layer" role="presentation" onMouseDown={onClose}>
    <section className={`modal ${wide ? "modal--wide" : ""}`} role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}>
      <div className="modal__topline" />
      <header className="modal__header">
        <div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2></div>
        <button className="icon-button" aria-label="Close dialog" onClick={onClose}><X size={18} /></button>
      </header>
      {children}
    </section>
  </div>;
}

export function ConfirmDialog({ title, detail, confirmText = "Confirm", onConfirm, onClose }) {
  return <Modal title={title} eyebrow="Please confirm" onClose={onClose}>
    <div className="confirm-dialog"><span className="confirm-dialog__icon"><AlertTriangle size={20} /></span><p>{detail}</p><div className="modal__actions"><button className="button button--ghost" onClick={onClose}>Keep appointment</button><button className="button button--danger" onClick={onConfirm}>{confirmText}</button></div></div>
  </Modal>;
}

export function Toast({ message, type = "success", onDismiss }) {
  return <div className={`toast toast--${type}`}><span>{type === "success" ? <Check size={15} /> : <AlertTriangle size={15} />}</span><p>{message}</p><button onClick={onDismiss} aria-label="Dismiss message"><X size={15} /></button></div>;
}
