import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UPLOAD_PATH } from "../infra.constants";
import { UploaderService } from "../services/uploader.service";

@Controller("upload")
@ApiTags("Upload")
@ApiBearerAuth()
export class UploadController {
  constructor(private readonly service: UploaderService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return await this.service.upload(file, UPLOAD_PATH);
  }
}
