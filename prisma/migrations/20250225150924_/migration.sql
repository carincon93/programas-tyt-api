/*
  Warnings:

  - Added the required column `universidadId` to the `Profesores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profesores" ADD COLUMN     "universidadId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Profesores" ADD CONSTRAINT "Profesores_universidadId_fkey" FOREIGN KEY ("universidadId") REFERENCES "Universidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
