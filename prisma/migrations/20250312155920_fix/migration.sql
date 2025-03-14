/*
  Warnings:

  - You are about to drop the `_CompanyToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `companyId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CompanyToUser" DROP CONSTRAINT "_CompanyToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToUser" DROP CONSTRAINT "_CompanyToUser_B_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "companyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CompanyToUser";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
