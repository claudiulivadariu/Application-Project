import { Injectable, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Student } from './student.entity'
import { Grade } from 'src/grades/grade.entity'

@Injectable()
export class StudentsService {
    private readonly students: Student[] = []
    highSchoolRepository: any
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
        @InjectRepository(Grade)
        private gradeRepository: Repository<Grade>
    ) {}

    findAll() {
        console.log(this.studentRepository)
        return this.studentRepository.find()
    }

    async createStudent(studentData: Student): Promise<Student> {
        console.log(studentData)
        const { highSchool, grades, ...studentFields } = studentData

        const student = this.studentRepository.create(studentFields)
        console.log('Student.highschool:', student.highSchool)

        if (highSchool) {
            const highSchoolEntity = await this.highSchoolRepository.findOne({
                where: { name: highSchool.name },
            })
            console.log('highSchoolEntity:', highSchoolEntity)
            if (highSchoolEntity) {
                student.highSchool = highSchoolEntity
            }
        }
        if (grades && grades.length > 0) {
            student.grades = grades
        }

        return await this.studentRepository.save(student)
    }

    async addGradeToStudent(
        studentID: number,
        gradeData: Partial<Grade>
    ): Promise<Grade> {
        const studentFound = await this.studentRepository.findOne({
            where: { id: studentID },
        })

        if (!studentFound) {
            throw new NotFoundException(
                `Student with ID ${studentID} not found`
            )
        }
        const grade = this.gradeRepository.create({
            ...gradeData,
            student: studentFound,
        })

        return await this.gradeRepository.save(grade)
    }

    async getStudents(): Promise<any[]> {
        return this.studentRepository
            .createQueryBuilder('student')
            .leftJoinAndSelect('student.highSchool', 'highSchool')
            .leftJoinAndSelect('student.grades', 'grades')
            .getMany()
    }
    async deleteStudent(studentId: number): Promise<void> {
        const studentFound = await this.studentRepository.findOne({
            where: { id: studentId },
        })

        if (!studentFound) {
            throw new NotFoundException(
                `Student with ID ${studentId} not found`
            )
        }
        await this.studentRepository.remove(studentFound)
    }
}
