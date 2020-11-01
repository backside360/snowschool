import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { getRepository } from 'typeorm';
import {AuthEntity} from './auth.entity';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
        const { password, ...result } = user;
        const repository = getRepository(AuthEntity);
        const existingUser = await repository.findOne({ login: username });
        let existingToken = existingUser?.token;
        
        if(!existingUser){
          const token = uuidv4();

          await repository.insert({
            login:username,
            token,
          });

          existingToken = token;
        }
       
        return { ...result, id: existingToken };
    }
    return { error: 'fail' };
  }

  
}