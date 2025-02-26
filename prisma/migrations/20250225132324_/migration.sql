/*
  Warnings:

  - You are about to drop the column `nota` on the `Asistencias` table. All the data in the column will be lost.
  - You are about to drop the `AsignaturaHorario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Horarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[codigoAsignatura]` on the table `Asignaturas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[codigoEstudiante]` on the table `Estudiantes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[codigoGrupo]` on the table `Grupos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[codigoPrograma]` on the table `Programas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigoAsignatura` to the `Asignaturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `asiste` to the `Asistencias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigoEstudiante` to the `Estudiantes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Estudiantes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigoGrupo` to the `Grupos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigoPrograma` to the `Programas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AsignaturaHorario" DROP CONSTRAINT "AsignaturaHorario_asignaturaId_fkey";

-- DropForeignKey
ALTER TABLE "AsignaturaHorario" DROP CONSTRAINT "AsignaturaHorario_horarioId_fkey";

-- DropForeignKey
ALTER TABLE "Horarios" DROP CONSTRAINT "Horarios_grupoId_fkey";

-- AlterTable
ALTER TABLE "Asignaturas" ADD COLUMN     "codigoAsignatura" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Asistencias" DROP COLUMN "nota",
ADD COLUMN     "asiste" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Estudiantes" ADD COLUMN     "codigoEstudiante" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Grupos" ADD COLUMN     "codigoGrupo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notas" ALTER COLUMN "nota" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Programas" ADD COLUMN     "codigoPrograma" TEXT NOT NULL;

-- DropTable
DROP TABLE "AsignaturaHorario";

-- DropTable
DROP TABLE "Horarios";

-- DropTable
DROP TABLE "Roles";

-- CreateTable
CREATE TABLE "AsignaturaGrupo" (
    "id" SERIAL NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "asignaturaId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AsignaturaGrupo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Asignaturas_codigoAsignatura_key" ON "Asignaturas"("codigoAsignatura");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiantes_codigoEstudiante_key" ON "Estudiantes"("codigoEstudiante");

-- CreateIndex
CREATE UNIQUE INDEX "Grupos_codigoGrupo_key" ON "Grupos"("codigoGrupo");

-- CreateIndex
CREATE UNIQUE INDEX "Programas_codigoPrograma_key" ON "Programas"("codigoPrograma");

-- AddForeignKey
ALTER TABLE "AsignaturaGrupo" ADD CONSTRAINT "AsignaturaGrupo_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignaturaGrupo" ADD CONSTRAINT "AsignaturaGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiantes" ADD CONSTRAINT "Estudiantes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
