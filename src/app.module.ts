import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GruposModule } from './grupos/grupos.module';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { InformesModule } from './informes/informes.module';
import { InstitucionesModule } from './instituciones/instituciones.module';
import { NotasModule } from './notas/notas.module';
import { UniversidadesModule } from './universidades/universidades.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProgramasModule } from './programas/programas.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { AsignaturaGrupoModule } from './asignatura-grupo/asignatura-grupo.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    AuthModule,
    UniversidadesModule,
    ProgramasModule,
    GruposModule,
    AsignaturasModule,
    AsignaturaGrupoModule,
    ProfesoresModule,
    InstitucionesModule,
    EstudiantesModule,
    AsistenciasModule,
    NotasModule,
    UsersModule,
    InformesModule,
    DashboardModule,
    PrismaModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // Hacer que RolesGuard se aplique a todas las rutas
    },
  ],
})
export class AppModule {}
