// filepath: d:\documentos\projetos\pessoais\fitness-station\fitness-station-api\src\modules\companies\companies.module.ts
import { Module } from '@nestjs/common';
import { CompaniesController } from './controllers/companies.controller';
import { CompaniesService } from './services/companies.service';
import { companiesRepositoryProvider } from './repositories/companies-repository.provider';
import { PrismaModule } from '@modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CompaniesController],
  providers: [CompaniesService, companiesRepositoryProvider],
  exports: [companiesRepositoryProvider],
})
export class CompaniesModule {}