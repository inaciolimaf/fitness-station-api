import { Exercise } from '@prisma/client';
import { CreateExerciseDto, UpdateExerciseDto } from '../dtos/exerciseDTO';

export abstract class IExercisesRepository {
  abstract create(data: CreateExerciseDto, workoutId: string): Promise<Exercise>;
  abstract update(id: string, data: Partial<UpdateExerciseDto>): Promise<Exercise>;
  abstract findAll(): Promise<Exercise[]>;
  abstract findById(id: string): Promise<Exercise | null>;
  abstract deleteById(id: string): Promise<void>;
}