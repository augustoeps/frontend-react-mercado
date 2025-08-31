import type {ReactElement} from "react";
import { Link } from "react-router-dom";
interface ItemProps{
    name:string,
    icon:ReactElement | null
    path: string;
}


const Item = ({ name, icon, path }: ItemProps) => {
    return (
        <Link
            to={path}
            className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
                 text-black hover:bg-gray-800 hover:text-white transition-colors
                 w-full"
        >
            <span className="text-lg">{icon}</span>
            <span className="text-sm font-medium">{name}</span>
        </Link>
    );
};




export default Item