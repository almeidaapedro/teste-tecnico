import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import FormData from "form-data";
import { firstValueFrom } from "rxjs";

@Injectable()
export class LeituraService{
    constructor(private readonly httpService: HttpService){}

    async processarImagem(file: Express.Multer.File): Promise<any>{
        const formData = new FormData();
        formData.append('file' ,file.buffer, {
            filename: file.originalname,
            contentType: file.mimetype,
        });

        try {
            const response = await firstValueFrom(
              this.httpService.post('AIzaSyD6uvSuU06Oc9l2K7B0cYouMDQCtklGXOc', formData, {}),
            );
            return response.data.leitura;
          } catch (error) {
            console.error('Erro ao processar imagem:', error);
            throw new Error('Não foi possível processar a imagem.');
          }
        }
}