import { PrismaClient, ReconciliationPriority, ReconciliationStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.reconciliationEvent.deleteMany();
  await prisma.reconciliation.deleteMany();

  const records = [
    {
      reference: "REC-2026-0001",
      sourceSystem: "ERP sandbox",
      targetSystem: "Bank feed mock",
      amountCents: 1842500,
      currency: "USD",
      status: ReconciliationStatus.MATCHED,
      priority: ReconciliationPriority.LOW,
      ownerTeam: "Finance Operations",
      openedAt: new Date("2026-07-07T12:20:00.000Z"),
      resolvedAt: new Date("2026-07-07T12:32:00.000Z"),
      events: [
        {
          type: "MATCH_CONFIRMED",
          message: "Payment reference matched within tolerance.",
          messageEs: "Referencia de pago conciliada dentro de tolerancia.",
          actor: "system",
        },
      ],
    },
    {
      reference: "REC-2026-0002",
      sourceSystem: "Billing mock",
      targetSystem: "Data warehouse demo",
      amountCents: 905000,
      currency: "USD",
      status: ReconciliationStatus.EXCEPTION,
      priority: ReconciliationPriority.HIGH,
      ownerTeam: "Revenue Systems",
      openedAt: new Date("2026-07-07T13:04:00.000Z"),
      resolvedAt: null,
      events: [
        {
          type: "AMOUNT_VARIANCE",
          message: "Invoice and settlement differ by 2.4%.",
          messageEs: "Factura y liquidacion difieren en 2.4%.",
          actor: "system",
        },
      ],
    },
    {
      reference: "REC-2026-0003",
      sourceSystem: "Vendor portal mock",
      targetSystem: "ERP sandbox",
      amountCents: 321800,
      currency: "USD",
      status: ReconciliationStatus.ESCALATED,
      priority: ReconciliationPriority.MEDIUM,
      ownerTeam: "Procurement Operations",
      openedAt: new Date("2026-07-07T14:11:00.000Z"),
      resolvedAt: null,
      events: [
        {
          type: "POLICY_ESCALATION",
          message: "Vendor evidence expired before payment confirmation.",
          messageEs: "Evidencia del proveedor expiro antes de confirmar pago.",
          actor: "ops-reviewer",
        },
      ],
    },
  ];

  for (const record of records) {
    await prisma.reconciliation.create({
      data: {
        ...record,
        events: {
          create: record.events,
        },
      },
    });
  }
}

void main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
