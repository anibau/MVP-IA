import { Body, Controller, Post } from "@nestjs/common";
import { IaService } from "./ia.service";

@Controller('ia')
export class IaController {
    constructor(private readonly iaService: IaService){}

    @Post()
    async createIa(@Body() dataIa: string){
        return {transformText: await this.iaService.transformContent(dataIa)}
    }

}