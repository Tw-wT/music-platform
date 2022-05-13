
import { FileModule } from './file/file.module'
import { TrackModule } from './track/track.module'
import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { resolve } from "path"
import {ServeStaticModule} from "@nestjs/serve-static"

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: resolve(__dirname, 'static'),
		}),
		MongooseModule.forRoot('mongodb+srv://twwt:63245idv@cluster0.lztjj.mongodb.net/ClusterO?retryWrites=true&w=majority'),
		TrackModule,
		FileModule
	]
})

export class AppModule {}