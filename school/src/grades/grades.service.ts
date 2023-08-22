import { Injectable, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Grade } from './grade.entity'

@Injectable()
export class GradesService {
    private readonly grades: Grade[] = []
    constructor(
        @InjectRepository(Grade)
        private gradeRepository: Repository<Grade>
    ) {}

    findAll() {
        return this.gradeRepository.find()
    }

    async createGrade(gradeData: Grade): Promise<Grade> {
        const grade = this.gradeRepository.create(gradeData)
        return await this.gradeRepository.save(grade)
    }

    async getInfoGrades(): Promise<any[]> {
        return this.gradeRepository
            .createQueryBuilder('grade')
            .leftJoinAndSelect('grade.student', 'student')
            .leftJoinAndSelect('student.highSchool', 'highSchool')
            .getMany()
    }
    async updateGrade(gradeId: number, newGradeValue: number): Promise<Grade> {
        const gradeFound = await this.gradeRepository.findOne({
            where: { id: gradeId },
        })
        if (!gradeFound) {
            throw new NotFoundException(`Grade with ID ${gradeId} not found`)
        }
        gradeFound.grade = newGradeValue
        return this.gradeRepository.save(gradeFound)
    }
}
