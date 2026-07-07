import { ReconciliationPriority, ReconciliationStatus } from "@prisma/client";
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class CreateReconciliationDto {
  @IsString()
  @IsNotEmpty()
  reference!: string;

  @IsString()
  @IsNotEmpty()
  sourceSystem!: string;

  @IsString()
  @IsNotEmpty()
  targetSystem!: string;

  @IsInt()
  @Min(1)
  amountCents!: number;

  @IsString()
  @IsNotEmpty()
  currency!: string;

  @IsEnum(ReconciliationStatus)
  status!: ReconciliationStatus;

  @IsEnum(ReconciliationPriority)
  priority!: ReconciliationPriority;

  @IsString()
  @IsNotEmpty()
  ownerTeam!: string;

  @IsDateString()
  openedAt!: string;

  @IsOptional()
  @IsDateString()
  resolvedAt?: string;
}
