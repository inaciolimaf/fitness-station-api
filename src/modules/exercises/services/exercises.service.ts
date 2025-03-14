import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto, UpdateExerciseDto } from '../dtos/exerciseDTO';
import { IExercisesRepository } from '../repositories/IExercises-repository';
import { Exercise, MuscleGroup } from '@prisma/client';

@Injectable()
export class ExercisesService {
  constructor(private readonly exercisesRepository: IExercisesRepository) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    return await this.exercisesRepository.create(createExerciseDto, createExerciseDto.workoutId);
  }

  async findAll(): Promise<Exercise[]> {
    return await this.exercisesRepository.findAll();
  }

  async findOne(id: string): Promise<Exercise> {
    const exercise = await this.exercisesRepository.findById(id);
    if (!exercise) throw new NotFoundException('Exercise not found');
    return exercise;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto): Promise<Exercise> {
    const exercise = await this.exercisesRepository.findById(id);
    if (!exercise) throw new NotFoundException('Exercise not found');
    if (updateExerciseDto.name) exercise.name = updateExerciseDto.name;
    if (updateExerciseDto.reps) exercise.reps = updateExerciseDto.reps;
    if (updateExerciseDto.sets) exercise.sets = updateExerciseDto.sets;
    if (updateExerciseDto.muscleGroup) exercise.muscleGroup = updateExerciseDto.muscleGroup as MuscleGroup;
    if (updateExerciseDto.restPeriod) exercise.restPeriod = updateExerciseDto.restPeriod;
    if (updateExerciseDto.videoLink) exercise.videoLink = updateExerciseDto.videoLink;

    return await this.exercisesRepository.update(id, exercise);
  }

  async remove(id: string): Promise<void> {
    const exercise = await this.exercisesRepository.findById(id);
    if (!exercise) throw new NotFoundException('Exercise not found');
    await this.exercisesRepository.deleteById(id);
  }
}