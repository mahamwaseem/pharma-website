# Supabase Setup Guide for Contact Page

## ✅ Done
- Installed @supabase/supabase-js package
- Created Supabase client configuration (src/lib/supabase.js)
- Updated ContactPage.js to save messages to Supabase
- Created .env.local template

## 📋 Now You Need To Do This:

### Step 1: Create Supabase Account & Project
1. Go to https://supabase.com and sign up
2. Create a new project
3. Wait for project initialization

### Step 2: Create Database Table
In Supabase dashboard, go to SQL Editor and run:

```sql
CREATE TABLE contact_messages (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert
CREATE POLICY "Anyone can insert" ON contact_messages
FOR INSERT WITH CHECK (true);
```

### Step 3: Get Your Credentials
1. Go to Project Settings → API
2. Copy the "Project URL" and paste into .env.local as REACT_APP_SUPABASE_URL
3. Copy the "anon public" key and paste into .env.local as REACT_APP_SUPABASE_ANON_KEY

### Step 4: Update .env.local
Edit the .env.local file with your actual credentials:
```
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 5: Restart Dev Server
```bash
npm start
```

## ✨ Done!
Your contact form will now save all messages to Supabase database!
