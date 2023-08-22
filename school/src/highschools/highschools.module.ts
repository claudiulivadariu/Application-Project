import { Module } from '@nestjs/common'
import { HighschoolsController } from './highschools.controller'
import { HighschoolsService } from './highschools.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Student } from 'src/students/student.entity'
import { HighSchool } from './highschool.entity'

@Module({
    imports: [TypeOrmModule.forFeature([HighSchool, Student])],
    controllers: [HighschoolsController],
    providers: [HighschoolsService],
})
export class HighschoolsModule {}
