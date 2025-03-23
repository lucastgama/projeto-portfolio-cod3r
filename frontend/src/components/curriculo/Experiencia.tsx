import React from "react";

const Experiencia = () => {
	return (
		<div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
			<Item principal="+20" label="Projetos feitos" />
			<Item principal="+6" label="anos de experiência" />
		</div>
	);
};

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
			<span className="text-zinc-400 text-sm text-center">{props.label}</span>
		</div>
	);
}
export default Experiencia;
