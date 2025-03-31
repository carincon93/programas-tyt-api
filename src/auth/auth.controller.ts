import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body, @Res() response) {
    const user = await this.authService.validateUser(body.email, body.password);
    const tokens = await this.authService.login(user);

    // 🔥 TODO: Usar cuando el dominio sea el mismo

    // response.cookie('auth_token', tokens.accessToken, {
    //   httpOnly: true,
    //   secure: false, // TODO En producción debe ser true por el HTTPS
    //   sameSite: 'lax', // TODO Debe ser Strict
    //   path: '/',
    // });

    // response.cookie('refresh_token', tokens.refreshToken, {
    //   httpOnly: true,
    //   secure: false, // TODO En producción debe ser true por el HTTPS
    //   sameSite: 'lax', // TODO Debe ser Strict
    //   path: '/',
    // });

    return response.json({
      statusCode: 200,
      data: { user: user, tokens: tokens },
    });
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req);
    
    return req.user;
  }

  @Public()
  @Get('refresh')
  async refresh(@Req() request, @Res() response) {
    let refreshToken = request.cookies['refresh_token']; // 🔥 Obtener el token de la cookie

    if (!refreshToken) {
      const authHeader = request.headers['authorization'];
      if (authHeader && authHeader.startsWith('Bearer ')) {
      refreshToken = authHeader.split(' ')[1]; // Obtener el token del header Authorization
      }
    }

    if (!refreshToken) throw new UnauthorizedException('No refresh token');

    const tokens = await this.authService.refreshToken(refreshToken);

    // 🔥 TODO: Usar cuando el dominio sea el mismo

    // response.cookie('auth_token', tokens.accessToken, {
    //   httpOnly: true,
    //   secure: false, // TODO En producción debe ser true por el HTTPS
    //   sameSite: 'lax', // TODO Debe ser Strict
    //   path: '/',
    // });

    // response.cookie('refresh_token', tokens.refreshToken, {
    //   httpOnly: true,
    //   secure: false, // TODO En producción debe ser true por el HTTPS
    //   sameSite: 'lax', // TODO Debe ser Strict
    //   path: '/',
    // });

    try {
      return response.json({
        ok: true,
        status: HttpStatus.OK,
        data: { message: 'Token refreshed', tokens: tokens },
        error: null,
      });
    } catch (error) {
      return response.json({
        ok: false,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        error: error.message,
      });
    }
  }

  @Public()
  @Get('verify-token')
  async verifyToken(@Req() request, @Res() response) {
    const auth_token = request.cookies['auth_token'];
    if (!auth_token) throw new UnauthorizedException('No auth token');

    const isValid = await this.authService.verifyToken(auth_token);
    if (!isValid) throw new UnauthorizedException('Invalid token');

    return response.json({ message: 'Token is valid' });
  }

  @Public()
  @Get('token')
  getToken(@Req() req, @Res() res: Response) {
    let token = req.cookies['auth_token']; // 🔥 Obtener el token de la cookie

    if (!token) {
      const authHeader = req.headers['authorization'];
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1]; // Obtener el token del header Authorization
      }
    }

    if (!token) {
      return res.status(401).json({ message: 'No autorizado' });
    }

    return res.json({ token });
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Res() response) {
    response.clearCookie('auth_token');
    response.clearCookie('refresh_token');
    return response.json({ message: 'Logout exitoso' });
  }
}
