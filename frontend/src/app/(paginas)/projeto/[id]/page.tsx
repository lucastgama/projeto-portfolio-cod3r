import React from "react";
import Cabecalho from "@/components/shared/Cabecalho";
import Container from "@/components/shared/Container";
import Readme from "@/components/projetos/Readme";
import Tecnologias from "@/components/tecnologias/Tecnologias";
import CarrosselImagens from "@/components/shared/CarrosselImagens";
import { obterProjeto } from "@/functions/projetos";
import { obterReadme } from "@/functions/github";

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params;
	const projeto = await obterProjeto(id);

	if (!projeto) return null;

	const readme = await obterReadme(projeto.repositorio);

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias lista={projeto.tecnologias} tamanhoMenor />
				<Readme markdown={readme} />
			</Container>
		</div>
	);
};

export default PaginaProjeto;
