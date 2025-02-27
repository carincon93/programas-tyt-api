/*
  Warnings:

  - You are about to drop the column `asignaturaId` on the `Asistencias` table. All the data in the column will be lost.
  - You are about to drop the column `asignaturaId` on the `Notas` table. All the data in the column will be lost.
  - Added the required column `asignaturaProfesorId` to the `Asistencias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `asignaturaProfesorId` to the `Notas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Asistencias" DROP CONSTRAINT "Asistencias_asignaturaId_fkey";

-- DropForeignKey
ALTER TABLE "Notas" DROP CONSTRAINT "Notas_asignaturaId_fkey";

-- AlterTable
ALTER TABLE "Asistencias" DROP COLUMN "asignaturaId",
ADD COLUMN     "asignaturaProfesorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Notas" DROP COLUMN "asignaturaId",
ADD COLUMN     "asignaturaProfesorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notas" ADD CONSTRAINT "Notas_asignaturaProfesorId_fkey" FOREIGN KEY ("asignaturaProfesorId") REFERENCES "AsignaturaProfesor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencias" ADD CONSTRAINT "Asistencias_asignaturaProfesorId_fkey" FOREIGN KEY ("asignaturaProfesorId") REFERENCES "AsignaturaProfesor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
