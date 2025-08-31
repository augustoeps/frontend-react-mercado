import type { ComponentType } from 'react';
import Item from './item.tsx';
import sidebarData from '../../../data/sidebarItems.json';

// 1. Importamos todos los íconos que vamos a necesitar
import { FaTachometerAlt, FaBoxOpen, FaCog } from 'react-icons/fa';


// 2. Creamos un mapa para asociar el string del JSON con el componente de ícono real.
// Esto nos permite cargar los íconos de forma dinámica y mantener el código limpio.
const iconComponents: { [key: string]: ComponentType } = {
    FaTachometerAlt,
    FaBoxOpen,
    FaCog,
};

const ItemList = () => {
    return (
        <aside className="h-screen w-64 bg-white-900 text-white flex flex-col shadow-lg">

            <nav className="flex-1 p-2 space-y-2">
                {sidebarData.map((itemData) => {
                    const IconComponent = iconComponents[itemData.iconName];
                    return (

                        <Item
                            key={itemData.name}
                            name={itemData.name}
                            icon={IconComponent ? <IconComponent /> : null}
                            path={itemData.path}

                        />
                    );
                })}
            </nav>
            <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
                © 2025
            </div>
        </aside>
    );
};

export default ItemList;