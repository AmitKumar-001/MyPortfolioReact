import { createContext, useContext } from "react";

export const MenuIconContext = createContext({
    menuStatus: 'false',
    
});

export const MenuIconProvider = MenuIconContext.Provider;

export default function useMenuIcon() {
    return useContext(MenuIconContext);
}