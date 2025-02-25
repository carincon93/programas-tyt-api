/*
  Warnings:

  - Added the required column `asignaturaId` to the `AsignaturaHorario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `asignaturaId` to the `AsignaturaProfesor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AsignaturaHorario" ADD COLUMN     "asignaturaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "AsignaturaProfesor" ADD COLUMN     "asignaturaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "AsignaturaHorario" ADD CONSTRAINT "AsignaturaHorario_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignaturaProfesor" ADD CONSTRAINT "AsignaturaProfesor_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
