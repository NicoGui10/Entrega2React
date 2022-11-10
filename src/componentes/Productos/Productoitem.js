import React from 'react'


export const Productoitem = ({
    id,
    title,
    price,
    image,
    category
}) => {
   
    return (
             
                <div className="producto">
                    <a href="">
                        <div className="producto__img">
                            <img src={image} alt="title" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>{title}</h1>
                        <p>{category}</p>
                        <p className="price">{price}</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">añadir al carrito</button>
                        <div>
                            <a href="#" className="btn">
                                vista
                            </a>
                        </div>
                    </div>
                </div>
                
               
           


    )
}
