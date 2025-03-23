import { Tecnologia } from "@core";
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas";
import MiniCV from "./MiniCV";
import Experiencia from "./Experiencia";

export interface CurriculoProps {
	tecnologias: Tecnologia[];
}

const Curriculo = (props: CurriculoProps) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full mt-5">
			<MiniCV />
			<Experiencia />
			<TecnologiasTrabalhadas lista={props.tecnologias} />
		</div>
	);
};

export default Curriculo;
