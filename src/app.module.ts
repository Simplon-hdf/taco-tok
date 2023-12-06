import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './orders/products.module';
import { UserModule } from './orders/users.module';
import { BelongModule } from './belong/belong.module';
@Module({
  imports: [OrdersModule, ProductModule, UserModule, BelongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
