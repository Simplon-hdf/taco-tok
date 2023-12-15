import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized.response';
import { CreateOrderDto } from './dto/create-order.dto';
import { addDays } from 'date-fns';


@Injectable()
export class OrdersService {

  constructor(private readonly prisma: PrismaService) { }

  public async createOrder(createOrderDto: CreateOrderDto, uuid: string) {
    const createdAt = new Date()
    const deliverAt = addDays(new Date(createdAt), 7);

    const createOrders = new NormalizedResponse('A new order has been created',
      await this.prisma.order.create({
        data: {
         order_total_quantity: createOrderDto.order_total_quantity,
         order_total_cost_ht: createOrderDto.order_total_cost_ht,
          created_at: createdAt,
          deliver_at: deliverAt, 
          User: {
            connect: {
              user_UUID: createOrderDto.user_UUID,
            },
          },
        },
      }),
    );
    return createOrders.toJSON();
  }

  


  public async belong(createOrderDto: CreateOrderDto, uuid: string) {
    const createdOrder = await this.createOrder(createOrderDto, uuid);
    const orderNumber = createdOrder.data.number;
    const OrderedproductUUIDs = createOrderDto.product_UUID;

    await this.prisma.belong.createMany({
      data: OrderedproductUUIDs.map((product_UUID) => ({
        order_number: orderNumber,
        product_UUID: product_UUID
      }))
    });
  }

      public async getByOrderNumber(order_number: number) {
      return new NormalizedResponse(
        `Order '${order_number}' has been found`,
        await this.prisma.order.findUnique({
          where: {
            order_number: order_number,
          },
        }),
      ).toJSON();
    }

  public async updateByOrderNumber(order_number: number, updateOrdertDto: UpdateOrderDto) {
    const createdAt = new Date()
    const deliverAt = addDays(new Date(createdAt), 7);
    return new NormalizedResponse(
      `Order '${order_number}' has been updated`,
      await this.prisma.order.update({
        where: {
          order_number: order_number,
        },
        data: {
          order_total_cost_ht: updateOrdertDto.order_total_cost_ht,
          order_total_quantity: updateOrdertDto.order_total_quantity,
          created_at: createdAt,
          deliver_at: deliverAt,
        },
      }),
    ).toJSON();
  }

  public async removeByOrderNumber(order_number: number) {
    return new NormalizedResponse(
      `Order '${order_number} has been deleted'`,
      await this.prisma.order.delete({
        where: {
          order_number: order_number
        }
      }),
    ).toJSON();
  }
}