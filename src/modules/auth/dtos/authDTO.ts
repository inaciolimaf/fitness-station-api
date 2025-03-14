import { Role } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthBody {
    @IsNotEmpty({ message: 'username é obrigatório' })
    username: string;

    @IsString({ message: 'Senha inválida' })
    @IsNotEmpty({ message: 'Senha é obrigatória' })
    password: string;
  }

export class PayLoadData {
    id: string;
    username: string;
    role: Role;
}