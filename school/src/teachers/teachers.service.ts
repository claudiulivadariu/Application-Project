import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Teacher } from './teacher.entity'

@Injectable()
export class TeachersService {
    private readonly teachers: Teacher[] = []
    constructor(
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>
    ) {}

    findAll() {
        return this.teacherRepository.find()
    }

    async createTeacher(teacherData: Teacher): Promise<Teacher> {
        const teacher = this.teacherRepository.create(teacherData)
        return await this.teacherRepository.save(teacher)
    }
}
