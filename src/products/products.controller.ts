import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get(':uuid')
  getByUUID(@Param('uuid') uuid: string) {
    return this.productsService.getByUUID(uuid);
  }

  @Patch(':uuid')
  updateByUUID(@Param('uuid') uuid: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateByUUID(uuid, updateProductDto);
  }

  @Delete(':uuid')
  deleteByUUID(@Param('uuid') uuid: string) {
    return this.productsService.deleteByUUID(uuid);
  }
}
