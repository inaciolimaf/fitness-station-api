import { WorkoutSheet, Workout, Exercise } from '@prisma/client';
import { CreateWorkoutSheetDto, ExerciseDto } from '../dtos/workoutSheetDto';


export abstract class IWorkoutSheetsRepository {
  abstract createWorkoutSheet(data: CreateWorkoutSheetDto): Promise<WorkoutSheet>;
  abstract createWorkout(data: { name: string; workoutSheetId: string }): Promise<Workout>;
  abstract createExercise(data: ExerciseDto, workoutId: string): Promise<Exercise>;
  abstract linkUserToWorkoutSheet(userId: string, workoutSheetId: string): Promise<void>;
  abstract updateWorkoutSheet(id: string, data: Partial<WorkoutSheet>): Promise<WorkoutSheet>;
  abstract findAllWorkoutSheets(): Promise<WorkoutSheet[]>;
  abstract findWorkoutSheetById(id: string): Promise<WorkoutSheet | null>;
  abstract deleteWorkoutSheet(id: string): Promise<void>;
  abstract findAllWorkoutSheetsByUserId(userId: string): Promise<WorkoutSheet[]>;
  abstract unLinkUserToWorkoutSheet(userId: string, workoutSheetId: string): Promise<void>
}