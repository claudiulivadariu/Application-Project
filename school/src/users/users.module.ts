import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        TypeOrmModule.forFeature([User], 'default'),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
