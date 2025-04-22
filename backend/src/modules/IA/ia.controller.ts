import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { IaService } from "./ia.service";

@Controller('ia')
export class IaController {
    constructor(private readonly iaService: IaService){}

    @Post()
    async createIa(@Body() dataIa){
        try{

            return {transformText: await this.iaService.transformContent(dataIa.text)}
        } catch(e){
            throw new BadRequestException('error al crear el contenido por IA '+ e);
        }
    }

}