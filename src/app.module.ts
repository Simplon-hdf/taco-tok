import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule, UsersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
