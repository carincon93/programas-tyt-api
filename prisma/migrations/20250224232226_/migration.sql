-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "numeroDocumento" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profesores" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profesores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudiantes" (
    "id" SERIAL NOT NULL,
    "institucionId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estudiantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notas" (
    "id" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,
    "estudianteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupos" (
    "id" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,
    "programaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grupos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencias" (
    "id" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,
    "estudianteId" INTEGER NOT NULL,
    "asignaturaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asistencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asignaturas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "profesorId" INTEGER NOT NULL,
    "programaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asignaturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Universidades" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Universidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "universidadId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Programas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instituciones" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Instituciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horarios" (
    "id" SERIAL NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "Fecha" TEXT NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Horarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Informes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Informes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dashboard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dashboard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profesores" ADD CONSTRAINT "Profesores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiantes" ADD CONSTRAINT "Estudiantes_institucionId_fkey" FOREIGN KEY ("institucionId") REFERENCES "Instituciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiantes" ADD CONSTRAINT "Estudiantes_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notas" ADD CONSTRAINT "Notas_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grupos" ADD CONSTRAINT "Grupos_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "Programas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencias" ADD CONSTRAINT "Asistencias_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencias" ADD CONSTRAINT "Asistencias_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asignaturas" ADD CONSTRAINT "Asignaturas_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "Profesores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asignaturas" ADD CONSTRAINT "Asignaturas_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "Programas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Programas" ADD CONSTRAINT "Programas_universidadId_fkey" FOREIGN KEY ("universidadId") REFERENCES "Universidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
