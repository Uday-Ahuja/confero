# Confero
A platform for college students to upload, discover, and exchange academic resources — notes, assignments, lab files, project reports — organized by branch, semester, and subject.

## Problem
Students share notes over WhatsApp, random Drive links, Telegram groups. No organization, no quality filter, no searchability. Confero fixes that.

## Tech Stack
- **MongoDB Atlas** — database
- **Express + Node.js** — REST API
- **React** — frontend (in progress)
- **JWT** — authentication

## Project Structure
confero/
backend/
frontend/

## Setup

### Prerequisites
- Node.js
- MongoDB Atlas account

### Backend
```bash
cd backend
npm install
```

Create a `.env` file:
PORT=8000
MONGO_URI=your_atlas_connection_string
JWT_SECRET=your_jwt_secret

```bash
npm run dev
```

## Features (Planned)
- JWT authentication
- Upload resources with metadata (branch, semester, subject)
- Browse and search by branch/semester/subject
- 1-5 star rating system, one per user per resource
- User profiles with upload and download history
- Request board — post what you need, others fulfill it
- Google Drive links for files (S3 in later phase)

## Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas
- Files → S3 (later phase)

## Status
- [x] Phase 0 — Project setup, Atlas connected
- [x] Phase 1 — Auth (User model, register, login, JWT middleware)
- [ ] Phase 2 — Resource CRUD
- [ ] Phase 3 — Ratings
- [ ] Phase 4 — User profile, Request board
- [ ] Phase 5 — Frontend