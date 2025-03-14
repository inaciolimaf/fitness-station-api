// filepath: d:\documentos\projetos\pessoais\fitness-station\fitness-station-api\src\modules\companies\services\companies.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto, UpdateCompanyDto } from '../dtos/companyDTO';
import { ICompaniesRepository } from '../repositories/ICompanies-repository';
import { Company } from '@prisma/client';

@Injectable()
export class CompaniesService {
  constructor(
    private readonly companiesRepository: ICompaniesRepository,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return await this.companiesRepository.create(createCompanyDto);
  }

  async findAll(): Promise<Company[]> {
    return await this.companiesRepository.findAll();
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companiesRepository.findById(id);
    if (!company) throw new NotFoundException('Empresa não encontrada');
    return company;
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companiesRepository.findById(id);
    if (!company) throw new NotFoundException('Empresa não encontrada');
    return await this.companiesRepository.update(id, updateCompanyDto);
  }

  async remove(id: string): Promise<void> {
    const company = await this.companiesRepository.findById(id);
    if (!company) throw new NotFoundException('Empresa não encontrada');
    await this.companiesRepository.deleteById(id);
  }
}