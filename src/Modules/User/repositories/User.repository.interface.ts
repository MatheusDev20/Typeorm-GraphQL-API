import User from '@modules/User/Infra/typeorm/entities/User';
import UserDto from '../dtos/CreateUserDto';

export default interface UserInterfaceRepository {
    create(data: UserDto): Promise<User>;
}
