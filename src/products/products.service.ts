import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import NormalizedResponse from 'src/utils/normalized.response';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createProductDto: CreateProductDto) {
    return new NormalizedResponse(
      `Product ${createProductDto.name} has been registered`,
      await this.prisma.products.create({
        data: {
          product_UUID: createProductDto.uuid,
          product_name: createProductDto.name,
          product_description: createProductDto.description,
          product_price: createProductDto.price,
          product_quantity: createProductDto.quantity,
          created_at: createProductDto.created_at,
          updated_at: createProductDto.updated_at,
        },
      }),
    ).toJSON();
  }

  public async getByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been found`,
      await this.prisma.products.findUnique({
        where: {
          product_UUID: uuid,
        },
      }),
    ).toJSON();
  }

  public async updateByUUID(uuid: string, updateProductDto: UpdateProductDto) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been updated`,
      await this.prisma.products.update({
        where: {
          product_UUID: uuid,
        },
        data: {
          product_name: updateProductDto.name,
          product_description: updateProductDto.description,
          product_price: updateProductDto.price,
        },
      }),
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid} has been deleted'`,
      await this.prisma.products.delete({ where: { product_UUID: uuid } }),
    ).toJSON();
  }

}