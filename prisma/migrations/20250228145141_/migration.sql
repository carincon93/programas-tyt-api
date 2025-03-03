/*
  Warnings:

  - You are about to drop the column `correo` on the `Users` table. All the data in the column will be lost.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asistencias" ALTER COLUMN "observacion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Instituciones" ALTER COLUMN "direccion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Notas" ALTER COLUMN "observacion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "correo",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "direccion" DROP NOT NULL;
