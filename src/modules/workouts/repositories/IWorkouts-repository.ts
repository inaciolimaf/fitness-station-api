import { Workout } from '@prisma/client';
import { CreateWorkoutDto, UpdateWorkoutDto } from '../dtos/workoutDTO';

export abstract class IWorkoutsRepository {
  abstract create(data: CreateWorkoutDto): Promise<Workout>;
  abstract update(id: string, data: Partial<UpdateWorkoutDto>): Promise<Workout>;
  abstract findAll(): Promise<Workout[]>;
  abstract findById(id: string): Promise<Workout | null>;
  abstract deleteById(id: string): Promise<void>;
}