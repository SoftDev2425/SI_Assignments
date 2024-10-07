import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth';

@Module({
  providers: [AuthService, Auth]
})
export class AuthModule {}
