import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HighschoolsModule } from './highschools/highschools.module'
import { StudentsModule } from './students/students.module'
import { TeachersModule } from './teachers/teachers.module'
import { GradesModule } from './grades/grades.module'
import { HighSchool } from './highschools/highschool.entity'
import { Grade } from './grades/grade.entity'
import { Student } from './students/student.entity'
import { Teacher } from './teachers/teacher.entity'
import { UsersModule } from './users/users.module'
import { User } from './users/user.entity'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'school.db',
            entities: [HighSchool, Student, Teacher, Grade, User],
            synchronize: true,
        }),
        HighschoolsModule,
        StudentsModule,
        TeachersModule,
        GradesModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
