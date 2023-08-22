import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    Res,
    UnauthorizedException,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { Response, Request } from 'express'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    @Post('register')
    async register(
        @Body('username') username: string,
        @Body('password') password: string
    ): Promise<any> {
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await this.usersService.create({
            username,
            password: hashedPassword,
        })
        delete user.password
        return user
    }

    @Post('login')
    async login(
        @Body('username') username: string,
        @Body('password') password: string,
        @Res({ passthrough: true }) response: Response
    ): Promise<any> {
        const user = await this.usersService.findOne(username)
        if (!user) {
            return { message: 'User not found' }
        }
        if (!(await bcrypt.compare(password, user.password))) {
            return { message: 'Invalid password' }
        }
        const jwt = await this.jwtService.signAsync({ id: user.id })
        response.cookie('jwt', jwt, { httpOnly: true })
        return { message: 'Success' }
    }

    @Get('getUser')
    async user(@Req() request: Request): Promise<any> {
        try {
            const cookie = request.cookies['jwt']
            const data = await this.jwtService.verifyAsync(cookie)
            if (!data) {
                throw new Error('Invalid token')
            }
            const user = await this.usersService.findOneById(data['id'])
            return user
        } catch (e) {
            throw new UnauthorizedException()
        }
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) response: Response) {
        response.clearCookie('jwt')
        return {
            message: 'Success',
        }
    }
}
