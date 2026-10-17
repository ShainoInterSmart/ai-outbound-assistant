# AI Outbound Assistant - Agent Instructions

## Project Overview

This project is an internal AI-powered outbound assistant.

The purpose is to improve business development outreach by helping with:

- Prospect research
- Opportunity scoring
- Personalized outreach preparation
- Follow-up management
- Outreach performance tracking

The system is not intended to be a CRM.

---

# MVP Scope Rules

Focus only on the MVP.

Build:

- Prospect management
- Company research workflow
- Prospect scoring
- Outreach draft generation
- Email status tracking
- Reply tracking
- Follow-up suggestions
- Automation controls

Do not build initially:

- CRM features
- WhatsApp automation
- LinkedIn automation
- Voice calling
- Complex multi-agent AI systems
- Billing/subscription systems
- Unnecessary integrations

Any major scope expansion should be discussed before implementation.

---

# Technology Guidelines

## Frontend

Use:

- Next.js
- TypeScript
- Tailwind CSS

Follow:

- App Router structure
- Reusable components
- Clean folder organisation

---

## Database

Use:

- Supabase PostgreSQL

Prefer:

- Simple relational design
- Clear table structures
- Avoid unnecessary complexity

---

## Automation

Initial automation approach:

- GitHub Actions
- Scheduled workflows

Do not introduce:

- Docker
- Redis
- Queue systems
- Additional infrastructure

unless there is a clear requirement.

---

# Development Principles

Always prefer:

- Simple solutions
- Low-cost/free options
- Maintainable code
- Minimal dependencies

Avoid:

- Over-engineering
- Enterprise architecture for MVP
- Adding libraries without a clear reason

---

# AI Development Rules

AI features should be introduced gradually.

Do not assume:

- Every task needs AI
- Every workflow needs an agent

Prefer:

Rules and logic first.

AI should be used where it adds real value:

- Research analysis
- Personalization
- Reply understanding
- Recommendations

---

# Outbound Safety Rules

The system must prioritize outreach quality and reputation.

Avoid:

- Excessive follow-ups
- Spam-like behaviour
- High-volume sending
- Poor personalization

Always consider:

- Email reputation
- Domain safety
- Prospect relevance

---

# System Control Requirements

The system must support:

- Global pause
- Campaign pause
- Resume functionality

Automation actions should always check system status before execution.

---

# Coding Standards

- Use TypeScript where possible.
- Keep functions small and understandable.
- Write clean and readable code.
- Explain major architectural changes.
- Avoid unnecessary dependencies.

Before implementing large changes:

1. Explain the approach.
2. Confirm the impact.
3. Then proceed.

---

# Project Philosophy

Build a practical outbound assistant that creates better conversations, not a high-volume spam tool.

Quality of prospects and messaging is more important than quantity.