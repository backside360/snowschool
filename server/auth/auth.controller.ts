import { Controller, Request, Post, UseGuards, Body,Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService,
      ) {}
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body('username') login: string, @Body('password') password: string ) {
      try {
       return await this.authService.validateUser(login,password)} catch(err) {
        console.log(err);
        return err;
        }
  }
} 