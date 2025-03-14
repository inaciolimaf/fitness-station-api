import { Injectable, NotFoundException } from '@nestjs/common';
import { Workout } from '@prisma/client';
import { CreateWorkoutDto, UpdateWorkoutDto } from '../dtos/workoutDTO';
import { IWorkoutsRepository } from '../repositories/IWorkouts-repository';

@Injectable()
export class WorkoutsService {
  constructor(private readonly workoutsRepository: IWorkoutsRepository) {}

  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return await this.workoutsRepository.create(createWorkoutDto);
  }

  async findAll(): Promise<Workout[]> {
    return await this.workoutsRepository.findAll();
  }

  async findOne(id: string): Promise<Workout> {
    const workout = await this.workoutsRepository.findById(id);
    if (!workout) throw new NotFoundException('Workout not found');
    return workout;
  }

  async update(id: string, updateWorkoutDto: UpdateWorkoutDto): Promise<Workout> {
    const workout = await this.workoutsRepository.findById(id);
    if (!workout) throw new NotFoundException('Workout not found');

    if(updateWorkoutDto.name) workout.name = updateWorkoutDto.name;

    return await this.workoutsRepository.update(id, workout);
  }

  async remove(id: string): Promise<void> {
    const workout = await this.workoutsRepository.findById(id);
    if (!workout) throw new NotFoundException('Workout not found');
    await this.workoutsRepository.deleteById(id);
  }
}