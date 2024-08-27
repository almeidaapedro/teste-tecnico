import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { LeituraController } from "./controller/leitura.controller";
import { LeituraService } from "./services/leitura.service";


@Module({
    imports: [HttpModule],
    controllers: [LeituraController],
    providers: [LeituraService],
})
export class LeituraModule{}