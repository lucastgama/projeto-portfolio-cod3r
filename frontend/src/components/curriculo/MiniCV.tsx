import Image from "next/image";

const MiniCV = () => {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image 
					src="/perfil.jpg" 
					alt="Foto de perfil" 
					fill 
					className="object-cover rounded-lg"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
				/>
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Lucas Gama
					</span>
					<span>Desenvolvedor Full Stack</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Desenvolvedor Full Stack com sólida experiência em PHP e JavaScript,
					especializado em desenvolvimento de back-end e sistemas. Busco novas
					oportunidades para aplicar minhas habilidades em projetos desafiadores. Possuo
					um histórico de desenvolvimento de plugins para WordPress, aplicações headless
					com Next.js e projetos pessoais que envolvem interações 3D e templates
					personalizados, demonstrando minha capacidade de entregar soluções inovadoras e
					eficazes.
				</p>
			</div>
		</div>
	);
};

export default MiniCV;
