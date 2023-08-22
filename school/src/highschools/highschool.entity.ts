/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { Student } from '../students/student.entity';

@Entity()
export class HighSchool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Teacher, (teacher) => teacher.highSchool)
  teachers: Teacher[];

  @OneToMany(() => Student, (student) => student.highSchool)
  students: Student[];
}
