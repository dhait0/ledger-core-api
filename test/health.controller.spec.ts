import { HealthController } from "../src/modules/health/health.controller";

describe("HealthController", () => {
  it("returns demo health metadata", () => {
    const controller = new HealthController();

    expect(controller.getHealth()).toMatchObject({
      service: "ledger-core-api",
      mode: "demo",
      status: "ok",
    });
  });
});
