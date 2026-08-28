CREATE TABLE IF NOT EXISTS contact_inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  company TEXT,
  contact_name TEXT,
  email TEXT,
  phone TEXT,
  participants INTEGER,
  activity_type TEXT,
  preferred_date TEXT,
  message TEXT,
  created_at TEXT DEFAULT (datetime('now','localtime')),
  ip TEXT,
  status TEXT DEFAULT 'new'
);
