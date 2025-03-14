// filepath: d:\documentos\projetos\pessoais\fitness-station\fitness-station-api\src\modules\companies\dtos\companyDTO.ts
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCompanyDto {
  @IsString({ message: 'Nome inválido' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;
}

export class UpdateCompanyDto extends CreateCompanyDto {
  @IsUUID()
  @IsNotEmpty({ message: 'ID é obrigatório' })
  id: string;
}