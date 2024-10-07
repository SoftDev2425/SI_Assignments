import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrailersModule } from './trailers/trailers.module';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './bookings/bookings.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TrailersModule, UsersModule, BookingsModule, PaymentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
