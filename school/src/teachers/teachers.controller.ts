import { Controller, Post, Body, Get } from '@nestjs/common'
import { TeachersService } from './teachers.service'
import { Teacher } from './teacher.entity'

@Controller('teachers')
export class TeachersController {
    constructor(private teachersService: TeachersService) {}
    @Get()
    findAll() {
        return this.teachersService.findAll()
    }

    @Post()
    create(@Body() teacherData: Teacher): Promise<Teacher> {
        return this.teachersService.createTeacher(teacherData)
    }
}
