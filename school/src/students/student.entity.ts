/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { HighSchool } from '../highschools/highschool.entity';
import { Grade } from '../grades/grade.entity';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => HighSchool, (highSchool) => highSchool.students)
    highSchool: HighSchool;

    @Column()
    class: string;

    @OneToMany(() => Grade, (grade) => grade.student, { cascade: true })
    grades: Grade[];
}
