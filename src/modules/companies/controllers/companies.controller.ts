// filepath: d:\documentos\projetos\pessoais\fitness-station\fitness-station-api\src\modules\companies\controllers\companies.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from '../services/companies.service';
import { CreateCompanyDto, UpdateCompanyDto } from '../dtos/companyDTO';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companiesService.create(createCompanyDto);
  }

  @Get()
  async findAll() {
    return await this.companiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.companiesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return await this.companiesService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.companiesService.remove(id);
  }
}