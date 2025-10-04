import type { ComponentType } from 'react';
import Item from './item.tsx';
import sidebarData from '../../../data/sidebarItems.json';
import { useUser } from '../../../../src/Context/UserContext.tsx'; // Asegúrate de la ruta

import { FaTachometerAlt, FaBoxOpen, FaCog, FaShoppingCart } from 'react-icons/fa';

const iconComponents: { [key: string]: ComponentType } = {
    FaTachometerAlt,
    FaBoxOpen,
    FaCog,
    FaShoppingCart,
};

const ItemList = () => {
    const { user } = useUser(); // user.role puede ser 'admin' o 'cliente'

    // Filtramos los items según el rol del usuario
    const filteredItems = sidebarData.filter((item) => {
        if (user?.role === 'cliente' && item.name === 'Productos') return false; // Cliente no ve Productos
        if (user?.role === 'admin' && item.name === 'Carrito') return false;   // Admin no ve Carrito
        return true;
    });

    return (
        <aside className="h-screen w-64 bg-white-900 text-white flex flex-col shadow-lg">
            <nav className="flex-1 p-2 space-y-2">
                {filteredItems.map((itemData) => {
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
