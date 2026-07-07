import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  getHealth() {
    return {
      service: "ledger-core-api",
      mode: "demo",
      status: "ok",
      checkedAt: "2026-07-07T16:00:00.000Z",
      bilingual: {
        en: "Mock reconciliation API is ready.",
        es: "API demo de conciliacion lista.",
      },
    };
  }
}
