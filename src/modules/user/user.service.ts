import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '../../dto/user.dto';
import { User } from '../../entity/User';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
  ) {}

  async get(id: number): Promise<UserDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const user: User = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });
    if (!user) {
      throw new NotFoundException();
    }

    return;
  }

  async getAll(): Promise<UserDto[]> {
    const users: User[] = await this._userRepository.find({
      where: { status: 'ACTIVE' },
    });

    return;
  }

  async create(user: User): Promise<UserDto> {
    const savedUser: User = await this._userRepository.save(user);
    return;
  }

  async update(id: number, user: User): Promise<void> {
    await this._userRepository.update(id, user);
  }

  async delete(id: number): Promise<void> {
    const userExist = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!userExist) {
      throw new NotFoundException();
    }
    await this._userRepository.update(id, { status: 'INACTIVE' });
  }
}
