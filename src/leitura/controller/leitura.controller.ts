import { Controller, Post, UploadedFile, UseInterceptors, HttpCode, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LeituraService } from '../services/leitura.service';


@Controller('leituras')
export class LeituraController {
  constructor(private readonly leituraService: LeituraService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(HttpStatus.OK)
  async uploadImage(@UploadedFile() file: Express.Multer.File): Promise<any> {
    try {
      // Processa a imagem usando o serviço e retorna o resultado
      const resultado = await this.leituraService.processarImagem(file);
      return {
        statusCode: HttpStatus.OK,
        data: resultado,
      };
    } catch (error) {
      console.error('Erro ao processar a imagem:', error);
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Erro ao processar a imagem',
      };
    }
  }
}
