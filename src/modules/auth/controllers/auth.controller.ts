import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthBody } from '../dtos/authDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() body: AuthBody) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);
    const token = await this.authService.login({
      username: user.username,
      id: user.id,
      role: user.role,
    });
    return token;
  }
}
