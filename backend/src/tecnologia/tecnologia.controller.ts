import { TecnologiaProvider } from './tecnologia.provider';
import { Controller, Get } from "@nestjs/common";
import { Tecnologia } from "@core";

@Controller("tecnologias")
export class TecnologiaController {
    constructor(private readonly repo: TecnologiaProvider ) {}
	@Get()
	async obterTodas():Promise<Tecnologia[]> {
		return this.repo.obterTodos();
	}
    
    @Get('destaques')
    async obterDestaques():Promise<Tecnologia[]> {
        return this.repo.obterDestaques();
    }
}
