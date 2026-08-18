// DocTeck visual reminder: use the ledger-and-rail composition, gold only for operational focus, and restrained editorial typography.
import { Bell, CalendarDays, ClipboardList, Clock3, FileText, LayoutDashboard, LogOut, Menu, MessageSquareText, Plus, Stethoscope, Users, X } from "lucide-react";
import { Brand } from "./Brand";
import { Avatar } from "./Primitives";

const iconMap = { dashboard: LayoutDashboard, appointments: ClipboardList, calendar: CalendarDays, schedule: Clock3, patients: Users, bookings: FileText, doctorSchedule: Stethoscope, chat: MessageSquareText, notifications: Bell };

const navByRole = {
  doctor: [
    ["dashboard", "Dashboard"], ["appointments", "Appointments"], ["calendar", "Calendar"], ["schedule", "Schedule"], ["patients", "Patients"], ["chat", "Chat"], ["notifications", "Notifications"],
  ],
  admin: [
    ["dashboard", "Dashboard"], ["appointments", "Appointments"], ["calendar", "Calendar"], ["patients", "Patients"], ["bookings", "Booking requests"], ["doctorSchedule", "Doctor schedule"], ["chat", "Chat"], ["notifications", "Notifications"],
  ],
};

export function Sidebar({ role, user, activeView, onNavigate, open, onClose, onLogout, unread }) {
  return <>
    {open && <button className="mobile-scrim" aria-label="Close menu" onClick={onClose} />}
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <div className="sidebar__header"><Brand /><button className="icon-button sidebar__close" onClick={onClose} aria-label="Close navigation"><X size={19} /></button></div>
      <div className="sidebar__role"><span className="sidebar__role-dot" />{role === "doctor" ? "Doctor workspace" : "Secretary workspace"}</div>
      <nav className="sidebar__nav" aria-label="Main navigation">
        {navByRole[role].map(([id, label]) => {
          const Icon = iconMap[id];
          return <button key={id} className={`nav-item ${activeView === id ? "nav-item--active" : ""}`} onClick={() => { onNavigate(id); onClose(); }}><Icon size={18} strokeWidth={1.65} /><span>{label}</span>{id === "notifications" && unread > 0 && <em>{unread}</em>}</button>;
        })}
      </nav>
      <div className="sidebar__footer"><div className="sidebar__profile"><Avatar initials={user.initials} /><div><strong>{user.name}</strong><span>{user.title}</span></div></div><button className="logout-button" onClick={onLogout}><LogOut size={16} /> Sign out</button></div>
    </aside>
  </>;
}

export function Header({ title, subtitle, onMenu, onQuickCreate, onNotifications, notificationCount, user }) {
  return <header className="topbar"><div className="topbar__heading"><button className="icon-button topbar__menu" onClick={onMenu} aria-label="Open navigation"><Menu size={20} /></button><div><span className="eyebrow">{subtitle}</span><h1>{title}</h1></div></div><div className="topbar__actions">{onQuickCreate && <button className="button button--gold topbar__create" onClick={onQuickCreate}><Plus size={16} /> <span>New appointment</span></button>}<button className="icon-button notification-button" onClick={onNotifications} aria-label="Open notifications"><Bell size={19} />{notificationCount > 0 && <i>{notificationCount}</i>}</button><Avatar initials={user.initials} size="sm" /></div></header>;
}
