import { Module } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { ProjetoControllerController } from './projeto.controller.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [ ProjetoProvider],
  controllers: [ProjetoControllerController],
  imports: [DbModule],
})
export class ProjetoModule {}
