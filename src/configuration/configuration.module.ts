import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import config from './configuration'
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
  ],
})
export class ConfigurationModule {}
