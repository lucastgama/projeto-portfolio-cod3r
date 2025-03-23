"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Menu = () => {
	const caminho = usePathname();

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Início
			</MenuItem>
			<MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>
				Projetos
			</MenuItem>
		</nav>
	);
};

function MenuItem(props: {
	href: string;
	children: React.ReactNode;
	selecionado: boolean;
	novaAba?: boolean;
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`
                    flex items-center gap-2 text-sm border-red-600 hover:text-white
                    ${props.selecionado ? "border-b-4 text-white" : "text-zinc-300"}    
                `}
			>
				{props.children}
			</span>
		</Link>
	);
}

export default Menu;
