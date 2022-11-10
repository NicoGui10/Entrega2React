import React, {useContext} from "react";
import { DataContext } from "../../contex/Dataprovider";
import { Productoitem } from "./Productoitem";

export const Productosweb = () => {
const value = useContext(DataContext)
const [productos] = value.productos


console.log(productos)





    return (
        <>
            <h1 className="tittle">Productos</h1>
            <div className="productos">
{
    productos.map(producto=>(
        <Productoitem 
        key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
        
            cantidad={producto.cantidad}
        
        
        
        />
    ))
}


               
                
               
            </div>
        </>
    );
};
