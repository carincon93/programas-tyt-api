-- DropForeignKey
ALTER TABLE "AsignaturaGrupo" DROP CONSTRAINT "AsignaturaGrupo_asignaturaId_fkey";

-- DropForeignKey
ALTER TABLE "AsignaturaGrupo" DROP CONSTRAINT "AsignaturaGrupo_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "AsignaturaProfesor" DROP CONSTRAINT "AsignaturaProfesor_asignaturaId_fkey";

-- DropForeignKey
ALTER TABLE "AsignaturaProfesor" DROP CONSTRAINT "AsignaturaProfesor_profesorId_fkey";

-- DropForeignKey
ALTER TABLE "Asistencias" DROP CONSTRAINT "Asistencias_asignaturaId_fkey";

-- DropForeignKey
ALTER TABLE "Asistencias" DROP CONSTRAINT "Asistencias_estudianteId_fkey";

-- DropForeignKey
ALTER TABLE "EstudianteGrupo" DROP CONSTRAINT "EstudianteGrupo_estudianteId_fkey";

-- DropForeignKey
ALTER TABLE "EstudianteGrupo" DROP CONSTRAINT "EstudianteGrupo_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "Estudiantes" DROP CONSTRAINT "Estudiantes_institucionId_fkey";

-- DropForeignKey
ALTER TABLE "Estudiantes" DROP CONSTRAINT "Estudiantes_userId_fkey";

-- DropForeignKey
ALTER TABLE "Grupos" DROP CONSTRAINT "Grupos_programaId_fkey";

-- DropForeignKey
ALTER TABLE "Notas" DROP CONSTRAINT "Notas_asignaturaId_fkey";

-- DropForeignKey
ALTER TABLE "Notas" DROP CONSTRAINT "Notas_estudianteId_fkey";

-- DropForeignKey
ALTER TABLE "Profesores" DROP CONSTRAINT "Profesores_universidadId_fkey";

-- DropForeignKey
ALTER TABLE "Profesores" DROP CONSTRAINT "Profesores_userId_fkey";

-- DropForeignKey
ALTER TABLE "Programas" DROP CONSTRAINT "Programas_universidadId_fkey";

-- AddForeignKey
ALTER TABLE "Programas" ADD CONSTRAINT "Programas_universidadId_fkey" FOREIGN KEY ("universidadId") REFERENCES "Universidades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grupos" ADD CONSTRAINT "Grupos_programaId_fkey" FOREIGN KEY ("programaId") REFERENCES "Programas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignaturaGrupo" ADD CONSTRAINT "AsignaturaGrupo_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignaturaGrupo" ADD CONSTRAINT "AsignaturaGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profesores" ADD CONSTRAINT "Profesores_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profesores" ADD CONSTRAINT "Profesores_universidadId_fkey" FOREIGN KEY ("universidadId") REFERENCES "Universidades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignaturaProfesor" ADD CONSTRAINT "AsignaturaProfesor_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AsignaturaProfesor" ADD CONSTRAINT "AsignaturaProfesor_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "Profesores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiantes" ADD CONSTRAINT "Estudiantes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiantes" ADD CONSTRAINT "Estudiantes_institucionId_fkey" FOREIGN KEY ("institucionId") REFERENCES "Instituciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstudianteGrupo" ADD CONSTRAINT "EstudianteGrupo_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstudianteGrupo" ADD CONSTRAINT "EstudianteGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notas" ADD CONSTRAINT "Notas_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notas" ADD CONSTRAINT "Notas_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencias" ADD CONSTRAINT "Asistencias_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignaturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencias" ADD CONSTRAINT "Asistencias_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
