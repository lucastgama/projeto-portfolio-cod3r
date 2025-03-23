export interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container = (props: ContainerProps) => {
	return (
		<div className={`max-w-7xl mx-auto p-4 ${props.className ?? ""}`}>{props.children}</div>
	);
};

export default Container;
