import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized.response';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto) {
    const createdUser = new NormalizedResponse(
      `User ${createUserDto.pseudo} has been created`,
      await this.prisma.user.create({
        data: {
          user_pseudo: createUserDto.pseudo,
          user_UUID: createUserDto.UUID,
          user_password: createUserDto.password,
          username: createUserDto.name,
          created_at: createUserDto.order_at,
        },
      }),
    );
    return createdUser.toJSON();
  }

  findAll() {
    return `This action returns all users`;
  }

  public async getByUUID(uuid: string) {
    const gettedUser = new NormalizedResponse(
      `User ${uuid} has been found`,
      await this.prisma.user.findUnique({
        where: {
          user_UUID: uuid,
        },
      }),
    );
    return gettedUser.toJSON();
  }

  public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updatedUser = new NormalizedResponse(
      `User ${updateUserDto.pseudo} has been updated`,
      await this.prisma.user.update({
        where: {
          user_UUID: uuid,
        },
        data: {
          user_pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
          username: !!updateUserDto.name ? updateUserDto.name : undefined,
          user_password : !!updateUserDto.password ? updateUserDto.password : undefined,
          user_UUID: !!updateUserDto.UUID ? updateUserDto.UUID : undefined,
          created_at : !!updateUserDto.order_at ? updateUserDto.order_at : undefined,
        },
      }),
    );
    return updatedUser.toJSON();
  }

  public async deleteByUUID(uuid: string) {
    const deletedUser = new NormalizedResponse(
      `User ${uuid} has been deleted`,
      await this.prisma.user.delete({
        where: {
          user_UUID: uuid,
        },
      }),
    );
    return deletedUser.toJSON();
  }
}