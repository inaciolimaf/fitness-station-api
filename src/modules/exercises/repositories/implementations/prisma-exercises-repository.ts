import { Injectable } from '@nestjs/common';
import { PrismaService } from '@modules/prisma/prisma.service';
import { IExercisesRepository } from '../IExercises-repository';
import { CreateExerciseDto, UpdateExerciseDto } from '../../dtos/exerciseDTO';
import { Exercise, MuscleGroup } from '@prisma/client';

@Injectable()
export class ExercisesRepository implements IExercisesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateExerciseDto, workoutId: string): Promise<Exercise> {
    return this.prisma.exercise.create({
      data: {
        name: data.name,
        reps: data.reps,
        sets: data.sets,
        muscleGroup: data.muscleGroup as MuscleGroup,
        restPeriod: data.restPeriod,
        videoLink: data.videoLink,
        workout: {
          connect: { id: workoutId },
        },
      },
    });
  }

  async update(id: string, data: Partial<UpdateExerciseDto>): Promise<Exercise> {
    return this.prisma.exercise.update({
      where: { id },
      data: {
        name: data.name,
        reps: data.reps,
        sets: data.sets,
        muscleGroup: data.muscleGroup as MuscleGroup,
        restPeriod: data.restPeriod,
        videoLink: data.videoLink,
      },
    });
  }

  async findAll(): Promise<Exercise[]> {
    return this.prisma.exercise.findMany();
  }

  async findById(id: string): Promise<Exercise | null> {
    return this.prisma.exercise.findUnique({ where: { id } });
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.exercise.delete({ where: { id } });
  }
}