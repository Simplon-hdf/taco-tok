import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID, Length, Min, IsDate } from 'class-validator';


export class CreateOrderDto {

  @ApiProperty({
    description: 'This field represents order number',
    minLength: 1,
    maxLength: 50,
  })
  @IsInt()
 public order_number: number;


  @ApiProperty({
    description: 'This field represents order total cost ht',
    minLength: 1,
    maxLength: 50,
  })
  @IsInt()
  order_total_cost_ht

  @ApiProperty({
    description: 'This field represents order total quantity',
    minLength: 1,
    maxLength: 50,
  })
  @IsInt()
  order_total_quantity

  @ApiProperty({
    description: 'This field represents order created at',
    minLength: 1,
    maxLength: 50,
  })
  @IsDate()
  created_at

  @ApiProperty({
    description: 'This field represents deliver at',
    minLength: 1,
    maxLength: 50,
  })
  @IsDate()
  deliver_at

  @ApiProperty({
    description: 'This field represents User UUID',
    minLength: 1,
    maxLength: 1000,
  })
  @IsUUID()
  @Length(36, 36)
  user_UUID: string;


  @ApiProperty({
    description: 'This field represents User UUID',
    minLength: 1,
    maxLength: 1000,
  })
  @IsUUID()
  User: string;

  @ApiProperty({
    description: 'This field represents products',
    minLength: 1,
    maxLength: 1000,
  })
@IsString()
@Length(1, 50)
  Products: string;


  @ApiProperty({
    description: 'This field represents the product UUID',
    minLength: 1,
    maxLength: 1000,
  })
  @IsUUID()
  @Length(36, 36)
  product_UUID: string;
}