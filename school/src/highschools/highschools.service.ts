import { Injectable, NotFoundException } from '@nestjs/common'
import { HighSchool } from './highschool.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Student } from 'src/students/student.entity'

@Injectable()
export class HighschoolsService {
    private readonly highschools: HighSchool[] = []
    constructor(
        @InjectRepository(HighSchool)
        private highschoolRepository: Repository<HighSchool>,
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>
    ) {}
    findAll() {
        return this.highschoolRepository.find()
    }

    async createHighSchool(highschoolData: HighSchool): Promise<HighSchool> {
        const highschool = this.highschoolRepository.create(highschoolData) // Create a new instance
        return await this.highschoolRepository.save(highschool) // Save it to the database
    }

    async addStudentToHighSchool(
        highSchoolName: string,
        studentData: Partial<Student>
    ): Promise<Student> {
        const highSchool = await this.highschoolRepository.findOne({
            where: { name: highSchoolName },
        })

        if (!highSchool) {
            throw new NotFoundException(
                `High school with name '${highSchoolName}' not found`
            )
        }
        const student = this.studentRepository.create({
            ...studentData,
            highSchool,
        })

        return await this.studentRepository.save(student)
    }

    async getBestStudentAtSubject(subject: string): Promise<any[]> {
        console.log('subject:', subject)
        const queryBuilder = this.highschoolRepository
            .createQueryBuilder('highSchool')
            .leftJoin('highSchool.students', 'student')
            .leftJoin('student.grades', 'grade')
            .where('grade.subject = :subject', { subject: subject })
            .orderBy('grade.grade', 'DESC')
            .groupBy('highSchool.id')
            .select([
                'highSchool.name AS highSchoolName',
                'MAX(grade.grade) AS maxGrade',
                'grade.subject AS subject',
            ])
            .addSelect('student.name AS studentName')

        return await queryBuilder.getRawMany()
    }
}
