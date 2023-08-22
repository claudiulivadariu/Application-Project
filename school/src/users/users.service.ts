import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async create(data: any): Promise<User> {
        return await this.userRepository.save(data)
    }

    async findOne(username: string): Promise<User> {
        return await this.userRepository.findOne({
            where: { username },
        })
    }
    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: { id },
        })
    }
}
