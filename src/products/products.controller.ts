import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a product', description: 'Add a new product to the database' })
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      throw new HttpException('Failed to create product', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get product by UUID', description: 'Retrieve a product using its UUID' })
  async getByUUID(@Param('uuid') uuid: string) {
    try {
      return await this.productsService.getByUUID(uuid);
    } catch (error) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':uuid')
  @ApiOperation({ summary: 'Update product information', description: 'Update a product\'s information using its UUID' })
  async updateByUUID(@Param('uuid') uuid: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      return await this.productsService.updateByUUID(uuid, updateProductDto);
    } catch (error) {
      throw new HttpException('Failed to update product', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete a product', description: 'Remove a product from the database using its UUID' })
  async deleteByUUID(@Param('uuid') uuid: string) {
    try {
      return await this.productsService.deleteByUUID(uuid);
    } catch (error) {
      throw new HttpException('Failed to delete product', HttpStatus.BAD_REQUEST);
    }
  }
}
