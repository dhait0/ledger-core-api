# Architecture

Ledger Core API is a NestJS service for synthetic reconciliation workloads.

## Modules

- `HealthModule`: service status endpoint.
- `PrismaModule`: database access through Prisma Client.
- `ReconciliationsModule`: reconciliation queries, summaries, and creation.

## Persistence

PostgreSQL runs through Docker Compose. Prisma models reconciliation records and event history.

## API surface

- `GET /api/health`
- `GET /api/reconciliations`
- `GET /api/reconciliations/summary`
- `POST /api/reconciliations`
