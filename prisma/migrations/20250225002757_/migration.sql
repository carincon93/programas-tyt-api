/*
  Warnings:

  - You are about to drop the column `horarioId` on the `Asignaturas` table. All the data in the column will be lost.
  - You are about to drop the column `profesorId` on the `Asignaturas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asignaturas" DROP CONSTRAINT "Asignaturas_horarioId_fkey";

-- DropForeignKey
ALTER TABLE "Asignaturas" DROP CONSTRAINT "Asignaturas_profesorId_fkey";

-- AlterTable
ALTER TABLE "Asignaturas" DROP COLUMN "horarioId",
DROP COLUMN "profesorId";

-- CreateTable
CREATE TABLE "AsignaturaHorario" (
    "id" SERIAL NOT NULL,
    "horarioId" INTEGER NOT NULL,

    CONSTRAINT "AsignaturaHorario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AsignaturaProfesor" (
    "id" SERIAL NOT NULL,
    "profesorId" INTEGER NOT NULL,

    CONSTRAINT "AsignaturaProfesor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AsignaturaHorario" ADD CONSTRAINT "AsignaturaHorario_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "Horarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignaturaProfesor" ADD CONSTRAINT "AsignaturaProfesor_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "Profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
