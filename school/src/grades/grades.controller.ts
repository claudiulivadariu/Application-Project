import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    NotFoundException,
} from '@nestjs/common'
import { GradesService } from './grades.service'
import { Grade } from './grade.entity'

@Controller('grades')
export class GradesController {
    constructor(private gradesService: GradesService) {}
    @Get()
    findAll() {
        return this.gradesService.findAll()
    }

    @Get('getGrades')
    getGrades() {
        return this.gradesService.getInfoGrades()
    }

    @Post()
    create(@Body() gradeData: Grade): Promise<Grade> {
        return this.gradesService.createGrade(gradeData)
    }

    @Patch(':id/update')
    async updateGrade(
        @Param('id') gradeId: number,
        @Body('gradeValue') newGradeValue: number
    ): Promise<Grade> {
        try {
            const updatedGrade = await this.gradesService.updateGrade(
                gradeId,
                newGradeValue
            )
            return updatedGrade
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message)
            }
            throw error
        }
    }
}
