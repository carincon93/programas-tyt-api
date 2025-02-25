/*
  Warnings:

  - You are about to drop the column `programaId` on the `Asignaturas` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Grupos` table. All the data in the column will be lost.
  - You are about to drop the column `nota` on the `Grupos` table. All the data in the column will be lost.
  - You are about to drop the column `observacion` on the `Grupos` table. All the data in the column will be lost.
  - You are about to drop the column `Fecha` on the `Horarios` table. All the data in the column will be lost.
  - Added the required column `horarioId` to the `Asignaturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `Horarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Asignaturas" DROP CONSTRAINT "Asignaturas_programaId_fkey";

-- AlterTable
ALTER TABLE "Asignaturas" DROP COLUMN "programaId",
ADD COLUMN     "horarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Grupos" DROP COLUMN "fecha",
DROP COLUMN "nota",
DROP COLUMN "observacion";

-- AlterTable
ALTER TABLE "Horarios" DROP COLUMN "Fecha",
ADD COLUMN     "fecha" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Asignaturas" ADD CONSTRAINT "Asignaturas_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "Horarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
