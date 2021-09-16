import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    
    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

        { loading && <p className='animate__animated animate__fadeIn'>Loading...</p> }

        <div className='gifs-grid'>
            {
                images.map( img =>{
                    return <GifGridItem 
                    key={ img.id }
                    {...img} />
                })
            }
            
        </div>
        </>
    )
}
