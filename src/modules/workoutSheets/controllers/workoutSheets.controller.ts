import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { WorkoutSheetsService } from '../services/workoutSheets.service';
import { CreateWorkoutSheetDto, UpdateWorkoutSheetDto } from '../dtos/workoutSheetDto';
import { AuthGuard } from '@modules/auth/providers/auth.guard';
import { RoleUser } from '@modules/auth/role.decorator';



@Controller('workoutSheets')
export class WorkoutSheetsController {
  constructor(private readonly workoutSheetsService: WorkoutSheetsService) {}

  
  @UseGuards(AuthGuard)
  @RoleUser('client')
  @Post()
  async create(@Body() createWorkoutSheetDto: CreateWorkoutSheetDto) {
    return await this.workoutSheetsService.create(createWorkoutSheetDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateWorkoutSheetDto: UpdateWorkoutSheetDto) {
    return await this.workoutSheetsService.update(id, updateWorkoutSheetDto);
  }

  @Get()
  async findAll() {
    return await this.workoutSheetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workoutSheetsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workoutSheetsService.remove(id);
  }
}