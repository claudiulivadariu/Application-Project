# Highschools manangement.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Technologies](#technologies)
5. [Usage](#usage)


## Features

Using Angular front-end + Nest.Js Backend in my project, i provided these features:
  * **Login/Register using JWT**
  * **Add,remove students/grades**
  * **See all students/grades**
  * **Info: Random functionality: You can search the best student from every highschool for a selected subject (Ex: "Math")**
Backend features not implemented in front yet:
  -Add/Remove teachers etc.

## Prerequisites

1. **Node.js and npm**
2. **Angular CLI**

## Installation

1. Clone the repository.
   ```console
   git clone https://github.com/claudiulivadariu/TestRepo
   cd <project-directory>
   ```
3. Installing dependencies.
   ```console
   cd school
   npm install
   ```
   The same for front-end:
   ```console
   cd front-end
   npm install
   ```

## Technologies

# Technologies Used

List of technologies and tools used in this project:

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [SQLite](https://www.sqlite.org/)

## Usage

   To start front-end, in the /front-end:
   ```console
   ng serve
   ```
   For the backend, in the /school:
   ```console
   npm run start
   ```
  You can now start using this project at **http://localhost:4200/**

## Project Structure

* Login/Register
  * Students
    * Add Student
    * Remove Student
    * See Students
  * Grades
    * Add Grade
    * Update Grade
    * See grades
  * Infos
    * Best student based on subject

### Login/Register Page:

You can also use:

**username: admin**
**password: admin**

### Students Page:

![image](https://github.com/claudiulivadariu/TestRepo/assets/79170970/94ccf452-4ba4-4e72-aae0-a88fa71df84e)

### Add student:

![image](https://github.com/claudiulivadariu/TestRepo/assets/79170970/bb8bafcc-2ed3-4715-b764-33947faab675)

### Remove student

![image](https://github.com/claudiulivadariu/TestRepo/assets/79170970/6c04948b-dd20-4785-abaf-3393b1e99701)

### Grades Page:
![image](https://github.com/claudiulivadariu/TestRepo/assets/79170970/2679b9ef-a38b-466c-acf0-b2207d400330)

### Add grade:
![image](https://github.com/claudiulivadariu/TestRepo/assets/79170970/14f64ad7-e97a-494a-bdd8-7a69038030a2)

### Update grade:
![image](https://github.com/claudiulivadariu/TestRepo/assets/79170970/35bfd7e4-2e62-422c-93c5-2e498264e58f)

### Best student based on subject
![image](https://github.com/claudiulivadariu/TestRepo/assets/79170970/15fd2f0d-2455-4bd6-b5a0-c20550445f86)
