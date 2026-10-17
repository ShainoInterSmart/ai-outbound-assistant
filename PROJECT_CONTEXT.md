# AI Outbound Assistant - Project Context

## Project Name

AI Outbound Assistant

---

# Purpose

Build an internal outbound automation assistant to improve business development and lead generation.

The system should help identify relevant prospects, understand their business context, create better outreach messages, manage follow-ups, and track outcomes.

The focus is quality outbound communication, not mass emailing.

---

# Business Objective

The objective is to generate better business conversations by:

- Finding suitable prospects
- Understanding prospect needs
- Creating personalized outreach
- Improving follow-up decisions
- Learning from responses

The system should support high-value B2B sales activities.

---

# Current Use Case

Primary user:

Internal business development team.

Initial focus:

- Website and digital transformation opportunities
- B2B prospecting
- High-value service sales

Target prospects:

Companies where digital services, technology improvements, automation, websites, applications, or digital transformation may provide value.

---

# MVP Vision

The first version should answer:

"Who should we contact today, why should we contact them, and what should we say?"

The MVP should provide:

1. Prospect database
2. Company research
3. Prospect scoring
4. Outreach draft generation
5. Email activity tracking
6. Reply tracking
7. Follow-up recommendations
8. Automation controls

---

# Important Product Decisions

## Not a CRM

This system is not intended to replace CRM platforms.

It focuses only on outbound intelligence and execution.

---

## Quality Over Quantity

The system should prioritize:

- Relevant prospects
- Correct messaging
- Appropriate timing
- Personalization

Avoid:

- Spam behaviour
- Excessive outreach
- Generic messaging

---

# MVP Technology Architecture

## Frontend

Next.js

Purpose:

- Dashboard
- Prospect views
- Campaign monitoring
- System controls

Hosting:

Vercel

---

## Database

Supabase PostgreSQL

Stores:

- Companies
- Prospects
- Campaigns
- Messages
- Replies
- System status

---

## Automation

Initial approach:

GitHub Actions

Purpose:

- Scheduled workflows
- Background processing
- Automation triggers

---

# Planned System Flow

## Prospect Discovery

Input:

Company information

↓

Research

↓

Analysis

↓

Score

↓

Ready for outreach

---

## Outreach Flow

Prospect selected

↓

Message draft created

↓

Human review

↓

Email sent

↓

Track status

↓

Analyse reply

↓

Recommend next action

---

# System Controls

Required:

Global system pause/resume.

Example:

ACTIVE:

Automation runs normally.

PAUSED:

All automated activities stop.

Resume:

Continue from pending tasks safely.

---

# Future Enhancements

Possible future additions:

- AI research agents
- Advanced scoring models
- LinkedIn assistance
- Additional communication channels
- Sales intelligence
- Performance analytics
- Learning from successful campaigns

These are not part of MVP.

---

# Development Approach

Build incrementally.

Priority:

1. Working foundation
2. Dashboard visibility
3. Database structure
4. Automation workflow
5. Outreach capabilities
6. Intelligence improvements

Avoid building complex systems before validating the workflow.

---

# Current Status

Phase:

Foundation setup

Completed:

- Project planning
- Architecture decisions
- Repository preparation

Next steps:

- Create Next.js frontend
- Connect Supabase
- Build initial dashboard
- Implement system status control