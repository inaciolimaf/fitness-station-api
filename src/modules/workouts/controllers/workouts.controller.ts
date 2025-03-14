import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutsService } from '../services/workouts.service';
import { CreateWorkoutDto, UpdateWorkoutDto } from '../dtos/workoutDTO';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return await this.workoutsService.create(createWorkoutDto);
  }

  @Get()
  async findAll() {
    return await this.workoutsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workoutsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return await this.workoutsService.update(id, updateWorkoutDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workoutsService.remove(id);
  }
}