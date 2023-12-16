import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized.response';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UsersService {
  private saltGenRound = 12;

  constructor(private readonly prisma: PrismaService) { }

  public async create(createUserDto: CreateUserDto) {
    const createdUser = new NormalizedResponse(
      `User ${createUserDto.pseudo} has been created`,
      await this.prisma.user.create({
        data: {
          user_pseudo: createUserDto.pseudo,
          user_password: await bcrypt.hash(createUserDto.password, this.saltGenRound),

          username: createUserDto.name,
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
    const createdAt = new Date()
    const updatedUser = new NormalizedResponse(
      `User ${updateUserDto.pseudo} has been updated`,
      await this.prisma.user.update({
        where: {
          user_UUID: uuid,
        },
        data: {
          user_pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
          username: !!updateUserDto.name ? updateUserDto.name : undefined,
          user_password: !!updateUserDto.password ? updateUserDto.password : undefined,
          user_UUID: !!uuid ? uuid : undefined,
          created_at: !!createdAt ? createdAt : undefined,
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