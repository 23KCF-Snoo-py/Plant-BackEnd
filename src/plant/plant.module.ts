import { Module } from '@nestjs/common'
import { PlantController } from './plant.controller'
import { PlantService } from './plant.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Plant } from './entities/plant.entity'
import { UserService } from '../user/user.service'
import { User } from '../user/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Plant, User])],
  controllers: [PlantController],
  providers: [PlantService, UserService],
})
export class PlantModule {}
