import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID, Length, IsDate, Min, IsOptional } from 'class-validator'; 


export class CreateOrderDto {

  @ApiProperty({
    description: 'This field represents order number',
    minLength: 0,
    maxLength: 20,
  })
  @IsInt()
  @IsOptional()
 public order_number: number;


  @ApiProperty({
    description: 'This field represents order total cost ht',
    minLength: 1,
    maxLength: 50,
  })
  @IsInt()
  order_total_cost_ht: number;

  @ApiProperty({
    description: 'This field represents order total quantity',
    minLength: 1,
    maxLength: 50,
  })
  @Min(1)
  order_total_quantity: number;



  @ApiProperty({
    description: 'This field represents User UUID',
  })
  @IsUUID()
  @Length(36, 36)
  user_UUID: string;

  @ApiProperty({
    description: 'This field represents the product UUID',
  })
  @IsUUID()
  @Length(36, 36)
  product_UUID: string[];

}
