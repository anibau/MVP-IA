import { Module } from "@nestjs/common";
import { IaController } from "./ia.controller";
import { IaService } from "./ia.service";

@Module({
    providers: [IaService],
    controllers: [IaController],
})
export class IaModule {}