/*
  Warnings:

  - Added the required column `asignaturaId` to the `Notas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notas" ADD COLUMN     "asignaturaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notas" ADD CONSTRAINT "Notas_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
