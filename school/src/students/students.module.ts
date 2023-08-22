import { Module } from '@nestjs/common'
import { StudentsController } from './students.controller'
import { StudentsService } from './students.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Student } from './student.entity'
import { Grade } from 'src/grades/grade.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Student, Grade])],
    controllers: [StudentsController],
    providers: [StudentsService],
})
export class StudentsModule {}
