import { Injectable } from '@nestjs/common';
import { PrismaService } from '@modules/prisma/prisma.service';
import { IWorkoutsRepository } from '../IWorkouts-repository';
import { CreateWorkoutDto, UpdateWorkoutDto } from '../../dtos/workoutDTO';
import { Workout } from '@prisma/client';

@Injectable()
export class WorkoutsRepository implements IWorkoutsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateWorkoutDto): Promise<Workout> {
    return this.prisma.workout.create({ data });
  }

  async update(id: string, data: Partial<UpdateWorkoutDto>): Promise<Workout> {
    return this.prisma.workout.update({
      where: { id },
      data,
    });
  }

  async findAll(): Promise<Workout[]> {
    return this.prisma.workout.findMany();
  }

  async findById(id: string): Promise<Workout | null> {
    return this.prisma.workout.findUnique({ where: { id } });
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.workout.delete({ where: { id } });
  }
}