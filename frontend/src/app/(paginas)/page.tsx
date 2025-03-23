import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/Principal";
import Projetos from "@/components/projetos/Projetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home() {
	const tecnologias = await obterTecnologias();
	const projetos = await obterProjetos();
	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container>
				<Projetos titulo="Destaques" lista={projetos.destaques} />
				<Projetos titulo="web" lista={projetos.web} />
				<Projetos titulo="Mobile" lista={projetos.mobile} />
				<Projetos titulo="Jogos" lista={projetos.jogos} />
				<Projetos titulo="Todos" lista={projetos.todos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	);
}
