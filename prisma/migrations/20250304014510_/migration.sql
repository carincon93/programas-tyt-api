/*
  Warnings:

  - You are about to drop the `UserRol` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rolId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserRol" DROP CONSTRAINT "UserRol_rolId_fkey";

-- DropForeignKey
ALTER TABLE "UserRol" DROP CONSTRAINT "UserRol_userId_fkey";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "rolId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UserRol";

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
