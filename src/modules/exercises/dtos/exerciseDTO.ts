import { IsString, IsNotEmpty, IsUUID, IsOptional, IsInt } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  reps: number;

  @IsInt()
  @IsNotEmpty()
  sets: number;

  @IsString()
  @IsNotEmpty()
  muscleGroup: string;

  @IsInt()
  @IsNotEmpty()
  restPeriod: number;

  @IsString()
  @IsOptional()
  videoLink?: string;

  @IsUUID()
  @IsNotEmpty()
  workoutId: string;
}

export class UpdateExerciseDto extends CreateExerciseDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}