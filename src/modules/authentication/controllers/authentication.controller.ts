import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { LoginRequestDto } from '../models/login-request-dto';
import { RegisterRequestDto } from '../models/register-requests-dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly userService: UserService) {}
  @Post('login')
  login(@Body() loginData: LoginRequestDto) {
    return this.userService.login(loginData);
  }

  @Post('register')
  register(@Body() registerData: RegisterRequestDto) {
    return this.userService.register(registerData);
  }
}
