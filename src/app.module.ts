import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HorariosModule } from './horarios/horarios.module';
import { GruposModule } from './grupos/grupos.module';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { InformesModule } from './informes/informes.module';
import { InstitucionesModule } from './instituciones/instituciones.module';
import { NotasModule } from './notas/notas.module';
import { RolesModule } from './roles/roles.module';
import { UniversidadesModule } from './universidades/universidades.module';
import { PrismaModule } from './prisma/prisma.module'
import { ProgramasModule } from './programas/programas.module';
import { ProfesoresModule } from './profesores/profesores.module';

@Module({
  imports: [UsersModule, HorariosModule, GruposModule, AsignaturasModule, AsistenciasModule, DashboardModule, EstudiantesModule, InformesModule, InstitucionesModule, NotasModule, RolesModule, UniversidadesModule, PrismaModule, ProgramasModule, ProfesoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
