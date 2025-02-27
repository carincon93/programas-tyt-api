/*
  Warnings:

  - You are about to drop the column `asignaturaId` on the `AsignaturaGrupo` table. All the data in the column will be lost.
  - Added the required column `asignaturaProfesorId` to the `AsignaturaGrupo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AsignaturaGrupo" DROP CONSTRAINT "AsignaturaGrupo_asignaturaId_fkey";

-- AlterTable
ALTER TABLE "AsignaturaGrupo" DROP COLUMN "asignaturaId",
ADD COLUMN     "asignaturaProfesorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "AsignaturaGrupo" ADD CONSTRAINT "AsignaturaGrupo_asignaturaProfesorId_fkey" FOREIGN KEY ("asignaturaProfesorId") REFERENCES "AsignaturaProfesor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
