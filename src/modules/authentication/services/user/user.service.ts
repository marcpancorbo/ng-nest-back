import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities/user';
import { LoginRequestDto } from '../../models/login-request-dto';
import { RegisterRequestDto } from '../../models/register-requests-dto';
import { UserRepositoryService } from '../../repository/user.repository.service';
import { BcryptService } from 'src/core/services/bcrypt/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepositoryService: UserRepositoryService,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
  ) {}
  async login(data: LoginRequestDto): Promise<object> {
    const user: User = await this.userRepositoryService.login(data.username);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isPasswordValid = await this.bcryptService.comparePassword(
      data.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
    const token = await this.jwtService.signAsync(payload);
    return {
      access_token: token,
    };
  }

  async register(data: RegisterRequestDto): Promise<void> {
    type CreateUserInput = Omit<User, 'id'>;
    const hashPasword = await this.bcryptService.hashPassword(data.password);
    const user: CreateUserInput = {
      username: data.username,
      email: data.email,
      password: hashPasword,
      role: data.role,
    };
    await this.userRepositoryService.register(user);
  }
}
