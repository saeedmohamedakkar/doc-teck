// DocTeck visual reminder: all mock data supports the Obsidian Clinic Ledger prototype; keep domain records separate from presentation.
export const mockUsers = {
  doctor: {
    name: "Dr. Amara Bennett",
    initials: "AB",
    role: "doctor",
    title: "Consultant Cardiologist",
  },
  admin: {
    name: "Elena Morris",
    initials: "EM",
    role: "admin",
    title: "Clinic Coordinator",
  },
};

export const initialAppointments = [
  { id: "APT-301", patientId: "P-104", patient: "Sofia Ramirez", age: 41, phone: "+1 212 555 0184", type: "Cardiology review", date: "2026-08-18", time: "09:00", duration: 30, status: "confirmed", note: "Review recent stress test and medication tolerance.", accent: "SR" },
  { id: "APT-302", patientId: "P-106", patient: "Caleb Foster", age: 58, phone: "+1 212 555 0118", type: "Follow-up consultation", date: "2026-08-18", time: "10:15", duration: 45, status: "pending", note: "New referral. Bring current medication list.", accent: "CF" },
  { id: "APT-303", patientId: "P-109", patient: "Mina Patel", age: 36, phone: "+1 212 555 0191", type: "ECG assessment", date: "2026-08-18", time: "13:30", duration: 30, status: "confirmed", note: "Routine annual assessment.", accent: "MP" },
  { id: "APT-304", patientId: "P-110", patient: "Thomas Reeve", age: 67, phone: "+1 212 555 0149", type: "Care plan review", date: "2026-08-18", time: "15:15", duration: 45, status: "no-show", note: "Call to reschedule if patient does not arrive by 15:30.", accent: "TR" },
  { id: "APT-305", patientId: "P-103", patient: "Nora Williams", age: 49, phone: "+1 212 555 0172", type: "Cardiology review", date: "2026-08-19", time: "09:30", duration: 30, status: "confirmed", note: "Post-procedure review.", accent: "NW" },
  { id: "APT-306", patientId: "P-101", patient: "Jon Bell", age: 52, phone: "+1 212 555 0128", type: "Diagnostic consultation", date: "2026-08-20", time: "11:00", duration: 45, status: "completed", note: "Discussed imaging results.", accent: "JB" },
  { id: "APT-307", patientId: "P-102", patient: "Evelyn Stone", age: 29, phone: "+1 212 555 0135", type: "Preventive screening", date: "2026-08-21", time: "14:00", duration: 30, status: "cancelled", note: "Cancelled by patient.", accent: "ES" },
];

export const initialPatients = [
  { id: "P-101", name: "Jon Bell", age: 52, gender: "Male", phone: "+1 212 555 0128", email: "jon.bell@example.com", lastVisit: "12 Aug 2026", nextVisit: "20 Aug 2026", status: "Active", accent: "JB" },
  { id: "P-102", name: "Evelyn Stone", age: 29, gender: "Female", phone: "+1 212 555 0135", email: "evelyn.stone@example.com", lastVisit: "05 Aug 2026", nextVisit: "—", status: "Inactive", accent: "ES" },
  { id: "P-103", name: "Nora Williams", age: 49, gender: "Female", phone: "+1 212 555 0172", email: "nora.w@example.com", lastVisit: "30 Jul 2026", nextVisit: "19 Aug 2026", status: "Active", accent: "NW" },
  { id: "P-104", name: "Sofia Ramirez", age: 41, gender: "Female", phone: "+1 212 555 0184", email: "sofia.r@example.com", lastVisit: "18 Jul 2026", nextVisit: "Today", status: "Active", accent: "SR" },
  { id: "P-106", name: "Caleb Foster", age: 58, gender: "Male", phone: "+1 212 555 0118", email: "caleb.f@example.com", lastVisit: "—", nextVisit: "Today", status: "New", accent: "CF" },
  { id: "P-109", name: "Mina Patel", age: 36, gender: "Female", phone: "+1 212 555 0191", email: "mina.patel@example.com", lastVisit: "20 Jun 2026", nextVisit: "Today", status: "Active", accent: "MP" },
  { id: "P-110", name: "Thomas Reeve", age: 67, gender: "Male", phone: "+1 212 555 0149", email: "thomas.reeve@example.com", lastVisit: "28 Jul 2026", nextVisit: "Today", status: "Active", accent: "TR" },
];

export const initialBookingRequests = [
  { id: "REQ-118", patient: "Layla Chen", phone: "+1 212 555 0109", date: "2026-08-19", time: "11:30", type: "First consultation", created: "12 min ago", status: "pending", accent: "LC" },
  { id: "REQ-117", patient: "Robert King", phone: "+1 212 555 0187", date: "2026-08-20", time: "09:00", type: "Follow-up", created: "38 min ago", status: "pending", accent: "RK" },
  { id: "REQ-116", patient: "Anika Shah", phone: "+1 212 555 0158", date: "2026-08-21", time: "16:00", type: "Diagnostic consultation", created: "1 hr ago", status: "pending", accent: "AS" },
  { id: "REQ-115", patient: "Michael Park", phone: "+1 212 555 0160", date: "2026-08-22", time: "10:30", type: "Cardiology review", created: "Yesterday", status: "accepted", accent: "MP" },
];

export const initialNotifications = [
  { id: "N-1", title: "New booking request", detail: "Layla Chen has requested an 11:30 consultation tomorrow.", time: "12 min ago", type: "booking", read: false },
  { id: "N-2", title: "Appointment confirmed", detail: "Sofia Ramirez confirmed her 09:00 review today.", time: "37 min ago", type: "confirmed", read: false },
  { id: "N-3", title: "Message from Elena", detail: "The referral notes for Caleb Foster are now attached.", time: "1 hr ago", type: "message", read: false },
  { id: "N-4", title: "Schedule updated", detail: "Your Friday afternoon break was saved.", time: "Yesterday", type: "schedule", read: true },
];

export const initialMessages = [
  { id: "M-1", sender: "Elena Morris", from: "admin", text: "Good morning, Dr. Bennett. Caleb Foster has completed his pre-visit form.", time: "08:42", read: true },
  { id: "M-2", sender: "You", from: "doctor", text: "Thank you. Please leave a note for him to bring his latest blood pressure readings.", time: "08:45", read: true },
  { id: "M-3", sender: "Elena Morris", from: "admin", text: "Done. I also have a new booking request for tomorrow at 11:30.", time: "09:03", read: false },
];

export const initialSchedule = {
  workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  start: "08:30",
  end: "17:30",
  breaks: [
    { id: "BR-1", label: "Midday break", start: "12:30", end: "13:15" },
    { id: "BR-2", label: "Clinical review", start: "15:00", end: "15:15" },
  ],
  unavailable: [
    { id: "UN-1", label: "Specialist conference", date: "2026-08-26", start: "13:00", end: "17:30" },
  ],
};

export const statusOptions = ["confirmed", "pending", "completed", "cancelled", "no-show"];

export const formatStatus = (status) => status.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

export const formatDate = (date) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00`));

export const timeLabel = (time) => {
  const [hourText, minutes] = time.split(":");
  const hour = Number(hourText);
  const suffix = hour >= 12 ? "PM" : "AM";
  return `${hour % 12 || 12}:${minutes} ${suffix}`;
};
