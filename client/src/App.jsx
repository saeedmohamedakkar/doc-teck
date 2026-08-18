// DocTeck visual reminder: Obsidian Clinic Ledger—role-aware clinical operations in warm graphite, pearl, and selective Ledger Gold.
import { useEffect, useMemo, useState } from "react";
import { LockKeyhole, Mail, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import { Brand } from "./components/Brand";
import { AppointmentDetail, AppointmentForm, AppointmentsView, BookingRequestsView, CalendarView, ChatView, DashboardView, NotificationsView, PatientDetail, PatientForm, PatientsView, ReviewRequest, ScheduleView } from "./components/Views";
import { ConfirmDialog, LoadingState, Toast } from "./components/Primitives";
import { Header, Sidebar } from "./components/Layout";
import { initialAppointments, initialBookingRequests, initialMessages, initialNotifications, initialPatients, initialSchedule, mockUsers } from "./lib/mockData";

const titleByView = {
  dashboard: ["Dashboard", "Clinic operations"],
  appointments: ["Appointments", "Appointment ledger"],
  calendar: ["Calendar", "Schedule view"],
  schedule: ["Schedule", "Availability ledger"],
  patients: ["Patients", "Care directory"],
  bookings: ["Booking requests", "Decision queue"],
  doctorSchedule: ["Doctor schedule", "Availability view"],
  chat: ["Chat", "Direct communication"],
  notifications: ["Notifications", "System ledger"],
};

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    if (!email || !password) return setError("Enter your clinic email and password to continue.");
    if (password.length < 6) return setError("Your password must contain at least six characters.");
    const normalized = email.trim().toLowerCase();
    if (normalized !== "doctor@example.com" && normalized !== "admin@example.com") return setError("We couldn’t find a DocTeck account for that email.");
    setError(""); setLoading(true);
    setTimeout(() => onLogin(normalized === "doctor@example.com" ? "doctor" : "admin"), 650);
  };
  return <main className="login-shell"><section className="login-panel"><div className="login-panel__inner"><Brand /><div className="login-copy"><span className="eyebrow">Private clinic operations</span><h1>Care, kept in<br /><i>perfect order.</i></h1><p>Sign in to your considered workspace for appointments, availability, and patient care.</p></div><form className="login-form" onSubmit={submit} noValidate><label>Email address<div className="input-wrap"><Mail size={17} /><input autoComplete="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@clinic.com" /></div></label><label>Password<div className="input-wrap"><LockKeyhole size={17} /><input autoComplete="current-password" type={visible ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" /><button type="button" onClick={() => setVisible(!visible)} aria-label={visible ? "Hide password" : "Show password"}>{visible ? <EyeOff size={17} /> : <Eye size={17} />}</button></div></label>{error && <p className="login-error">{error}</p>}<button className="button button--gold login-submit" disabled={loading} type="submit">{loading ? <><span className="button-loader" /> Checking access</> : <>Enter DocTeck <ArrowRight size={17} /></>}</button></form><div className="login-ledger" aria-label="Today’s clinic ledger preview"><div className="login-ledger__head"></div></div><div className="login-hint"><ShieldCheck size={15} /><span>Use <strong>doctor@example.com</strong> or <strong>admin@example.com</strong> with any 6+ character password.</span></div></div></section><aside className="login-visual"><div className="login-visual__grain" /><div className="login-visual__ledger"><span className="eyebrow">Care operations / 18 Aug</span><div><time>08:30</time><span>Clinical hours begin</span><i /></div><div><time>09:00</time><span>Confirmed patient review</span><i /></div><div><time>11:30</time><span>Booking request awaiting review</span><i /></div></div><div className="login-visual__note"><span className="eyebrow">Private clinic command desk</span><strong>Every confirmed visit, held in view.</strong><p>Appointments, patient context, and practitioner availability—kept in one assured clinical rhythm.</p></div><div className="login-visual__folio"><i /></div></aside></main>;
}

function App() {
  const [role, setRole] = useState(null);
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [patients, setPatients] = useState(initialPatients);
  const [requests, setRequests] = useState(initialBookingRequests);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [messages, setMessages] = useState(initialMessages);
  const [schedule, setSchedule] = useState(initialSchedule);
  const [modal, setModal] = useState(null);
  const [cancelTarget, setCancelTarget] = useState(null);
  const [toast, setToast] = useState(null);

  const user = role ? mockUsers[role] : null;
  const unread = notifications.filter((item) => !item.read).length;

  useEffect(() => {
    if (!role) return undefined;
    const validateHash = () => {
      const [, routeRole, view] = window.location.hash.split("/");
      const allowed = role === "doctor" ? ["dashboard", "appointments", "calendar", "schedule", "patients", "chat", "notifications"] : ["dashboard", "appointments", "calendar", "patients", "bookings", "doctorSchedule", "chat", "notifications"];
      if (routeRole && routeRole !== role) { window.location.hash = `/${role}/dashboard`; setActiveView("dashboard"); }
      else if (view && allowed.includes(view)) setActiveView(view);
    };
    validateHash(); window.addEventListener("hashchange", validateHash); return () => window.removeEventListener("hashchange", validateHash);
  }, [role]);

  const navigate = (view) => {
    const allowed = role === "doctor" ? ["dashboard", "appointments", "calendar", "schedule", "patients", "chat", "notifications"] : ["dashboard", "appointments", "calendar", "patients", "bookings", "doctorSchedule", "chat", "notifications"];
    if (!allowed.includes(view)) return setToast({ type: "error", message: "That workspace is not available for your current role." });
    if (view === activeView) return;
    setViewLoading(true); setActiveView(view); window.location.hash = `/${role}/${view}`;
    setTimeout(() => setViewLoading(false), 180);
  };

  const login = (nextRole) => { setRole(nextRole); setActiveView("dashboard"); window.location.hash = `/${nextRole}/dashboard`; };
  const logout = () => { setRole(null); setModal(null); setSidebarOpen(false); window.history.replaceState(null, "", window.location.pathname); };
  const updateStatus = (id, status) => { setAppointments((items) => items.map((item) => item.id === id ? { ...item, status } : item)); setModal((current) => current?.type === "appointment" ? { ...current, appointment: { ...current.appointment, status } } : current); setToast({ message: `Appointment marked ${status.replace(/-/g, " ")}.` }); };
  const cancelAppointment = () => { if (!cancelTarget) return; updateStatus(cancelTarget.id, "cancelled"); setCancelTarget(null); setModal(null); setToast({ message: "Appointment cancelled. The ledger is updated." }); };
  const saveAppointment = (form) => {
    const person = patients.find((item) => item.id === form.patientId);
    if (form.id) setAppointments((items) => items.map((item) => item.id === form.id ? { ...item, ...form, patient: person.name, age: person.age, phone: person.phone, accent: person.accent } : item));
    else setAppointments((items) => [{ ...form, id: `APT-${Date.now().toString().slice(-4)}`, patient: person.name, age: person.age, phone: person.phone, accent: person.accent }, ...items]);
    setModal(null); setToast({ message: form.id ? "Appointment updated." : "Appointment created and added to the ledger." });
  };
  const savePatient = (form) => {
    const initials = form.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    if (form.id) setPatients((items) => items.map((item) => item.id === form.id ? { ...item, ...form } : item));
    else setPatients((items) => [{ ...form, id: `P-${Date.now().toString().slice(-4)}`, accent: initials, lastVisit: "—", nextVisit: "—" }, ...items]);
    setModal(null); setToast({ message: form.id ? "Patient record updated." : "Patient record created." });
  };
  const handleRequestDecision = (request, decision, options = {}) => {
    setRequests((items) => items.map((item) => item.id === request.id ? { ...item, status: decision } : item));
    if (decision === "accepted") {
      const patientId = `P-${Date.now().toString().slice(-4)}`;
      const freshPatient = { id: patientId, name: request.patient, age: "—", gender: "Not recorded", phone: request.phone, email: "Not recorded", status: "New", accent: request.accent, lastVisit: "—", nextVisit: "Today" };
      setPatients((items) => [freshPatient, ...items]);
      setAppointments((items) => [{ id: `APT-${Date.now().toString().slice(-4)}`, patientId, patient: request.patient, age: "—", phone: request.phone, type: request.type, date: options.date, time: options.time, duration: 30, status: "confirmed", note: "Created from accepted booking request.", accent: request.accent }, ...items]);
    }
    setModal(null); setToast({ message: decision === "accepted" ? "Booking accepted and appointment created." : "Booking request rejected." });
  };
  const sendMessage = (text) => { setMessages((items) => [...items, { id: `M-${Date.now()}`, sender: "You", from: role, text, time: "Now", read: true }]); setToast({ message: "Message sent." }); };
  const markRead = (id) => setNotifications((items) => items.map((item) => item.id === id ? { ...item, read: true } : item));
  const content = useMemo(() => {
    if (viewLoading) return <LoadingState label="Opening workspace" />;
    if (activeView === "dashboard") return <DashboardView role={role} appointments={appointments} bookingRequests={requests} onOpenAppointment={(appointment) => setModal({ type: "appointment", appointment })} onNavigate={navigate} />;
    if (activeView === "appointments") return <AppointmentsView appointments={appointments} role={role} onOpenAppointment={(appointment) => setModal({ type: "appointment", appointment })} onCreate={() => setModal({ type: "appointment-form" })} />;
    if (activeView === "calendar") return <CalendarView appointments={appointments} role={role} onOpenAppointment={(appointment) => setModal({ type: "appointment", appointment })} onCreate={() => setModal({ type: "appointment-form" })} />;
    if (activeView === "patients") return <PatientsView patients={patients} appointments={appointments} role={role} onOpenPatient={(patient) => setModal({ type: "patient", patient })} onCreate={() => setModal({ type: "patient-form" })} />;
    if (activeView === "bookings") return <BookingRequestsView requests={requests} onReview={(request) => setModal({ type: "request", request })} />;
    if (activeView === "schedule") return <ScheduleView schedule={schedule} editable onChange={(next) => { setSchedule(next); setToast({ message: "Schedule updated." }); }} />;
    if (activeView === "doctorSchedule") return <ScheduleView schedule={schedule} editable={false} onChange={() => { }} />;
    if (activeView === "chat") return <ChatView messages={messages} role={role} onSend={sendMessage} />;
    return <NotificationsView notifications={notifications} onReadAll={() => { setNotifications((items) => items.map((item) => ({ ...item, read: true }))); setToast({ message: "All notifications marked as read." }); }} onRead={markRead} />;
  }, [activeView, appointments, messages, notifications, patients, requests, role, schedule, viewLoading]);

  if (!role) return <Login onLogin={login} />;
  const [title, subtitle] = titleByView[activeView];
  return <div className="app-shell"><Sidebar role={role} user={user} activeView={activeView} onNavigate={navigate} open={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={logout} unread={unread} /><main className="app-main"><Header title={title} subtitle={subtitle} user={user} notificationCount={unread} onMenu={() => setSidebarOpen(true)} onNotifications={() => navigate("notifications")} onQuickCreate={role === "admin" ? () => setModal({ type: "appointment-form" }) : null} /><div className="app-content">{content}</div></main>{modal?.type === "appointment" && <AppointmentDetail appointment={modal.appointment} role={role} onClose={() => setModal(null)} onEdit={(appointment) => setModal({ type: "appointment-form", appointment })} onStatus={updateStatus} onCancel={setCancelTarget} />}{modal?.type === "appointment-form" && <AppointmentForm appointment={modal.appointment} patients={patients} onClose={() => setModal(null)} onSave={saveAppointment} />}{modal?.type === "patient" && <PatientDetail patient={modal.patient} appointments={appointments} role={role} onClose={() => setModal(null)} onEdit={(patient) => setModal({ type: "patient-form", patient })} />}{modal?.type === "patient-form" && <PatientForm patient={modal.patient} onClose={() => setModal(null)} onSave={savePatient} />}{modal?.type === "request" && <ReviewRequest request={modal.request} onClose={() => setModal(null)} onDecision={handleRequestDecision} />}{cancelTarget && <ConfirmDialog title="Cancel this appointment?" detail={`This will mark ${cancelTarget.patient}’s ${cancelTarget.type.toLowerCase()} as cancelled. You can keep the appointment instead.`} confirmText="Cancel appointment" onClose={() => setCancelTarget(null)} onConfirm={cancelAppointment} />}{toast && <Toast {...toast} onDismiss={() => setToast(null)} />}</div>;
}

export default App;
