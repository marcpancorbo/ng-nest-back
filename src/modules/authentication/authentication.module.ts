import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationController } from './controllers/authentication.controller';
import { User } from './entities/user';
import { UserService } from './services/user/user.service';
import { UserRepositoryService } from './repository/user.repository.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { BcryptService } from 'src/core/services/bcrypt/bcrypt.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/core/services/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AuthenticationController],
  providers: [UserService, UserRepositoryService, BcryptService, JwtStrategy],
})
export class AuthenticationModule {}
