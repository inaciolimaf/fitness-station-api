-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_workoutId_fkey";

-- DropForeignKey
ALTER TABLE "workout_sheet_users" DROP CONSTRAINT "workout_sheet_users_user_id_fkey";

-- DropForeignKey
ALTER TABLE "workout_sheet_users" DROP CONSTRAINT "workout_sheet_users_workout_sheet_id_fkey";

-- DropForeignKey
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_workoutSheetId_fkey";

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_workoutSheetId_fkey" FOREIGN KEY ("workoutSheetId") REFERENCES "workout_sheets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_sheet_users" ADD CONSTRAINT "workout_sheet_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_sheet_users" ADD CONSTRAINT "workout_sheet_users_workout_sheet_id_fkey" FOREIGN KEY ("workout_sheet_id") REFERENCES "workout_sheets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
