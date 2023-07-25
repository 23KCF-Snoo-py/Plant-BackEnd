import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common'
import { PlantService } from './plant.service'
import { PlantDto } from './dto/plant.dto'
import { Plant } from './entities/plant.entity'
import { UserService } from 'src/user/user.service'

@Controller('plant')
export class PlantController {
  constructor(
    private plantService: PlantService,
    private userService: UserService
  ) {}

  @Get()
  getAll(): Promise<Plant[]> {
    return this.plantService.findAll()
  }

  @Get(':name')
  getByName(@Param() params: { name: string }) {
    return this.plantService.findOne(params.name)
  }

  @Post()
  async createPlant(@Body() plant: PlantDto) {
    console.log(`create plant request | owner: ${plant.owner}`)
    await this.plantService.create(plant)
    await this.userService.add(plant.owner)
  }
}
