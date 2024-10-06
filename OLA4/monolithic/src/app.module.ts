import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrailersModule } from './trailers/trailers.module';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { TrailersModule } from './trailers/trailers.module';
import { PaymentsModule } from './payments/payments.module';
import { PaymentsModule } from './payments/payments.module';
import { TestModule } from './test/test.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [TrailersModule, UsersModule, BookingsModule, PaymentsModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
