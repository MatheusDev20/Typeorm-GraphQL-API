import CreateUserDto from '@modules/User/dtos/CreateUserDto';
import UserInterfaceRepository from '@modules/User/repositories/User.repository.interface';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

class UserRepository implements UserInterfaceRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async create(createUserData: CreateUserDto) {
        const user = this.ormRepository.create(createUserData);

        await this.ormRepository.save(user);

        return user;
    }
}

export default UserRepository;
