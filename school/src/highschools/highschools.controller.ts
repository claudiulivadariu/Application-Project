import { Controller, Post, Body, Get, Param } from '@nestjs/common'
import { HighschoolsService } from './highschools.service'
import { HighSchool } from './highschool.entity'
import { Student } from 'src/students/student.entity'

@Controller('highschools')
export class HighschoolsController {
    constructor(private highSchoolsService: HighschoolsService) {}
    @Get()
    findAll() {
        return this.highSchoolsService.findAll()
    }

    @Post()
    create(@Body() highschoolData: HighSchool): Promise<HighSchool> {
        return this.highSchoolsService.createHighSchool(highschoolData)
    }

    @Post('best-student')
    getBestStudentPerHighSchoolAtSubject(
        @Body('subject') subject: string
    ): Promise<any[]> {
        return this.highSchoolsService.getBestStudentAtSubject(subject)
    }

    @Post(':highSchoolName/add-student')
    addStudentToHighSchool(
        @Param('highSchoolName') highSchoolName: string,
        @Body() studentData: Partial<Student>
    ): Promise<Student> {
        return this.highSchoolsService.addStudentToHighSchool(
            highSchoolName,
            studentData
        )
    }
}
