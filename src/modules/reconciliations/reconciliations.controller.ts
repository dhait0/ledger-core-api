import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ReconciliationStatus } from "@prisma/client";
import { CreateReconciliationDto } from "./dto/create-reconciliation.dto";
import { ReconciliationsService } from "./reconciliations.service";

@Controller("reconciliations")
export class ReconciliationsController {
  constructor(private readonly reconciliationsService: ReconciliationsService) {}

  @Get()
  list(@Query("status") status?: ReconciliationStatus) {
    return this.reconciliationsService.list(status);
  }

  @Get("summary")
  summary() {
    return this.reconciliationsService.summary();
  }

  @Post()
  create(@Body() dto: CreateReconciliationDto) {
    return this.reconciliationsService.create(dto);
  }
}
