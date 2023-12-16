import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create an order', description: 'Create a new order in the database' })
  async create(@Param('uuid') uuid: string, @Body() createOrderDto: CreateOrderDto) {
    try {
      return await this.ordersService.createOrder(createOrderDto, uuid);
    } catch (error) {
      throw new HttpException('Failed to create order', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':Order')
  @ApiOperation({ summary: 'Find an order', description: 'Find an order by its order number' })
  async findOne(@Param('Order') order_number: number) {
    try {
      return await this.ordersService.getByOrderNumber(order_number);
    } catch (error) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':Order')
  @ApiOperation({ summary: 'Update an order', description: 'Update an order by its order number' })
  async update(@Param('Order') order_number: number, @Body() updateOrderDto: UpdateOrderDto) {
    try {
      return await this.ordersService.updateByOrderNumber(order_number, updateOrderDto);
    } catch (error) {
      throw new HttpException('Failed to update order', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':Order')
  @ApiOperation({ summary: 'Delete an order', description: 'Delete an order by its order number' })
  async remove(@Param('Order') order_number: number) {
    try {
      return await this.ordersService.removeByOrderNumber(order_number);
    } catch (error) {
      throw new HttpException('Failed to delete order', HttpStatus.BAD_REQUEST);
    }
  }
}
