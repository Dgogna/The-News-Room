import { createContext, useContext } from "react";
import { useState } from "react";


const AppContext=createContext(null);

export const useAppContext=()=>{
    const context=useContext(AppContext);

    if(context===undefined){
        throw new Error("AppContext must be written with app context provider");
    }

    return context;
}

const AppContextProvider=({children})=>{

    const [favorites,setFavorites] = useState([]);

    const addToFavotites=(item)=>{
        const oldFavorites=[...favorites];

        const newFavorites=oldFavorites.concat(item);
        setFavorites(newFavorites);
    };

    const removeFromFavorites=(id) => {
        const oldFavorites=[...favorites];
        const newFavorites=oldFavorites.filter((item)=>item.url!=id);
        setFavorites(newFavorites);
    };



    return (
        <AppContext.Provider value={{favorites,addToFavotites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;