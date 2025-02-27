/*
  Warnings:

  - You are about to drop the `EstudianteGrupo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `grupoId` to the `Estudiantes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EstudianteGrupo" DROP CONSTRAINT "EstudianteGrupo_estudianteId_fkey";

-- DropForeignKey
ALTER TABLE "EstudianteGrupo" DROP CONSTRAINT "EstudianteGrupo_grupoId_fkey";

-- AlterTable
ALTER TABLE "Estudiantes" ADD COLUMN     "grupoId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "EstudianteGrupo";

-- AddForeignKey
ALTER TABLE "Estudiantes" ADD CONSTRAINT "Estudiantes_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
