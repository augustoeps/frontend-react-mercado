// Este componente tiene 2 errores intencionados:
// 1. No define el tipo para las 'props', por lo que TypeScript/ESLint se quejará.
// 2. No retorna un elemento JSX válido, lo cual es un error en un componente de React.
interface GreetingProps {
    name: string;
}
const Greeting = ({ name }: GreetingProps) => {
    return <h2>¡Hola, {name}!</h2>
}

export default Greeting