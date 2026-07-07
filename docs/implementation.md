# Implementation

The service uses strict TypeScript, NestJS modules, DTO validation, Prisma ORM, and Docker Compose.

## Local database

`docker-compose.yml` starts PostgreSQL on port `5438`. The default credentials are demo-only and match `.env.example`.

## Seeding

`prisma/seed.ts` creates synthetic reconciliation records and event history. No production data is included.

## Validation

`ValidationPipe` is enabled globally with whitelist mode and non-whitelisted fields rejected.
