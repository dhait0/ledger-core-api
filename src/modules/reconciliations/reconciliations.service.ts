import { Injectable } from "@nestjs/common";
import { Prisma, ReconciliationStatus } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateReconciliationDto } from "./dto/create-reconciliation.dto";

@Injectable()
export class ReconciliationsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(status?: ReconciliationStatus) {
    const where: Prisma.ReconciliationWhereInput = status ? { status } : {};

    return this.prisma.reconciliation.findMany({
      where,
      orderBy: [{ priority: "desc" }, { openedAt: "desc" }],
      include: {
        events: {
          orderBy: { createdAt: "desc" },
        },
      },
    });
  }

  async summary() {
    const [total, exceptions, escalated, matched] = await Promise.all([
      this.prisma.reconciliation.count(),
      this.prisma.reconciliation.count({ where: { status: ReconciliationStatus.EXCEPTION } }),
      this.prisma.reconciliation.count({ where: { status: ReconciliationStatus.ESCALATED } }),
      this.prisma.reconciliation.count({ where: { status: ReconciliationStatus.MATCHED } }),
    ]);

    return {
      total,
      exceptions,
      escalated,
      matched,
      bilingual: {
        en: "Synthetic reconciliation workload summary.",
        es: "Resumen sintetico de conciliaciones.",
      },
    };
  }

  async create(dto: CreateReconciliationDto) {
    return this.prisma.reconciliation.create({
      data: {
        reference: dto.reference,
        sourceSystem: dto.sourceSystem,
        targetSystem: dto.targetSystem,
        amountCents: dto.amountCents,
        currency: dto.currency,
        status: dto.status,
        priority: dto.priority,
        ownerTeam: dto.ownerTeam,
        openedAt: new Date(dto.openedAt),
        resolvedAt: dto.resolvedAt ? new Date(dto.resolvedAt) : null,
      },
    });
  }
}
