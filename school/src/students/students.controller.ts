import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common'
import { StudentsService } from './students.service'
import { Student } from './student.entity'
import { Grade } from 'src/grades/grade.entity'

@Controller('students')
export class StudentsController {
    constructor(private studentsService: StudentsService) {}
    @Get()
    findAll() {
        return this.studentsService.findAll()
    }

    @Post()
    create(@Body() studentData: Student): Promise<Student> {
        return this.studentsService.createStudent(studentData)
    }

    @Post(':studentId/add-grade')
    addGradeToStudent(
        @Param('studentId') studentId: number,
        @Body() gradeData: Partial<Grade>
    ): Promise<Grade> {
        return this.studentsService.addGradeToStudent(studentId, gradeData)
    }

    @Get('getStudents')
    getAllStudents() {
        return this.studentsService.getStudents()
    }

    @Delete('/delete/:studentId')
    async deleteStudent(@Param('studentId') studentId: number): Promise<void> {
        await this.studentsService.deleteStudent(studentId)
    }
}
