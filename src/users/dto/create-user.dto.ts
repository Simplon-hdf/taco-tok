
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, Length, IsDate } from 'class-validator';

export class CreateUserDto {
  static password(password: any, arg1: number): any {
    throw new Error('Method not implemented.');
  }
  @ApiProperty({
    description: 'This field represents the user UUID',
  })
  @IsUUID()
  @Length(36, 36)
  UUID: string;

  @ApiProperty({
    description: 'This field represents the user pseudo',
    minLength: 4,
    maxLength: 20,
  })
  @IsString()
  @Length(4, 20)
  pseudo: string;

  @ApiProperty({
    description: 'This field represents the user name',
    minLength: 1,
    maxLength: 30,
  })
  @IsString()
  @Length(1, 30)
  name: string;

  @ApiProperty({
    description: 'This field represents the user password',
    minLength: 72,
    maxLength: 72,
  })
  @IsString()
  @Length(72, 72)
  password: string;

  @ApiProperty({
    description: 'This field represents the date of order',
  })
  @IsDate()
  order_at : Date;
}
