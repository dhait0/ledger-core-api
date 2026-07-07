# Project

Ledger Core API / API central de conciliacion Ledger

## Overview

English: Ledger Core API is a bilingual NestJS backend demo for mock enterprise reconciliation workflows using Prisma ORM, PostgreSQL, and Docker Compose.

Español: Ledger Core API es un demo backend bilingue con NestJS para conciliaciones enterprise simuladas usando Prisma ORM, PostgreSQL y Docker Compose.

## Features

- English: NestJS modular architecture / Español: Arquitectura modular con NestJS
- English: Prisma ORM schema and seed data / Español: Schema Prisma y datos seed
- English: PostgreSQL through Docker Compose / Español: PostgreSQL con Docker Compose
- English: REST endpoints for reconciliation workloads / Español: Endpoints REST para conciliaciones
- English: Validation pipes and DTOs / Español: Validation pipes y DTOs
- English: Bilingual response metadata / Español: Metadata bilingue en respuestas

## Architecture

English: The API is split into `health`, `prisma`, and `reconciliations` modules. Prisma owns persistence, DTOs validate input, and Docker Compose provides a local PostgreSQL database.

Español: La API se divide en modulos `health`, `prisma` y `reconciliations`. Prisma maneja persistencia, los DTOs validan entrada y Docker Compose provee PostgreSQL local.

## Tech Stack

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker Compose
- Jest
- ESLint
- Prettier
- Husky

## Installation

```bash
npm install
```

## Running locally

```bash
docker compose up -d
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run start:dev
```

English: API runs at `http://localhost:4010/api`.

Español: La API corre en `http://localhost:4010/api`.

## Folder structure

```text
src/
src/modules/
prisma/
docs/
scripts/
public/
test/
README.md
AGENTS.md
docker-compose.yml
Dockerfile
package.json
```

## Screenshots

- [Architecture preview](public/screenshots/ledger-core-api-architecture.png)

## Why this project exists

English: This project demonstrates backend architecture, persistence modeling, and local infrastructure for enterprise-style workflows without exposing private systems.

Español: Este proyecto demuestra arquitectura backend, modelado de persistencia e infraestructura local para flujos enterprise sin exponer sistemas privados.

## License

MIT
