import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user', description: 'Add a new user to the database' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get user by UUID', description: 'Retrieve a user using their UUID' })
  public getByUUID(@Param('uuid') uuid: string) {
    return this.usersService.getByUUID(uuid);
  }

  @Patch(':uuid')
  @ApiOperation({ summary: 'Update user information', description: 'Update a user\'s information using their UUID' })
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateByUUID(uuid, updateUserDto);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete a user', description: 'Remove a user from the database using their UUID' })
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.usersService.deleteByUUID(uuid);
  }
}
