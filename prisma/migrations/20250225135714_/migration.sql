/*
  Warnings:

  - You are about to drop the column `grupoId` on the `Estudiantes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Estudiantes" DROP CONSTRAINT "Estudiantes_grupoId_fkey";

-- AlterTable
ALTER TABLE "Estudiantes" DROP COLUMN "grupoId";

-- CreateTable
CREATE TABLE "EstudianteGrupo" (
    "id" SERIAL NOT NULL,
    "estudianteId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EstudianteGrupo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EstudianteGrupo" ADD CONSTRAINT "EstudianteGrupo_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstudianteGrupo" ADD CONSTRAINT "EstudianteGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
