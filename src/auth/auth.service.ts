import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './auth.constants';

@Injectable()
export class AuthService {
  private readonly refreshSecret =
    process.env.REFRESH_SECRET || 'refresh_super_seguro';

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new HttpException('Credenciales inválidas', HttpStatus.BAD_REQUEST);
    }

    return { id: user.id, email: user.email, role: user.rol.nombre };
  }

  async login(user: Record<string, any>) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '7d',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async refreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      return this.login(payload);
    } catch {
      throw new UnauthorizedException('Refresh token inválido o expirado');
    }
  }

  async verifyToken(token: string) {
    try {
      return this.jwtService.verify(token, { secret: this.refreshSecret });
    } catch {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }
}
