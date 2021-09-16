import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () =>{

    // const categories = ['One Punch Man','Naruto', 'Neon Genesis Evangelion' ];

    const [categories, setCategories] = useState([ 'Neon Genesis Evangelion' ]);
    
    // const handleAdd = ()=>{
         
    //     //operador spread para agregar al arreglo sin modificar el tipo
    //     setCategories( cats => [...categories, 'Dragon Ball Z'] );

    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( cat =>{
                        return <GifGrid 
                            category={ cat }
                            key={ cat }
                        />
                    })
                }
            </ol>


        </>
    );
};

