import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  @IsNotEmpty()
  workoutSheetId: string;
}

export class UpdateWorkoutDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsUUID()
  @IsOptional()
  workoutSheetId?: string;
}