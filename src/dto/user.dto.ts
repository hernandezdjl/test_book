import { IsNotEmpty } from 'class-validator';
import { UserDetail } from '../entity/UserDetail';
import { RoleType } from '../modules/role/role.enum';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  roles: RoleType[];

  @IsNotEmpty()
  details: UserDetail;
}
