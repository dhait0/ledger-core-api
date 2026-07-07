import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { ReconciliationsController } from "./reconciliations.controller";
import { ReconciliationsService } from "./reconciliations.service";

@Module({
  imports: [PrismaModule],
  controllers: [ReconciliationsController],
  providers: [ReconciliationsService],
})
export class ReconciliationsModule {}
