import { FileService } from './file.services'
import { Module } from "@nestjs/common"

@Module({
	providers: [FileService]
})

export class FileModule {}