/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { HighSchool } from '../highschools/highschool.entity';

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => HighSchool, (highSchool) => highSchool.teachers)
    highSchool: HighSchool;

    @Column()
    class: string;

    @Column()
    subject: string;
}
