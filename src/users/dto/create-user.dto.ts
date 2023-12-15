
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, Length, IsDate } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({
    description: 'This field represents the user pseudo',
    minLength: 4,
    maxLength: 20,
  })
  @IsString()
  @Length(4, 20)
  public pseudo: string;

  @ApiProperty({
    description: 'This field represents the user name',
    minLength: 1,
    maxLength: 30,
  })
  @IsString()
  @Length(1, 30)
  public  name: string;

  @ApiProperty({
    description: 'This field represents the user password',
    minLength: 72,
    maxLength: 72,
  })
  @IsString()
  @Length(1, 72)
  public  password: string;
}
