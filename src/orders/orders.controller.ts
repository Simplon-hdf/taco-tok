import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}



  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
  @Get()
  findOne(@Param('NumberOrder') order_number: number) {
    return this.ordersService.getByOrderNumber(order_number);
  }

  @Patch()
  update(@Param('Order') order_number: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateByOrderNumber(order_number, updateOrderDto);
  }

  @Delete()
  remove(@Param('Order') order_number: number) {
    return this.ordersService.removeByOrderNumber(order_number);
  }
}
