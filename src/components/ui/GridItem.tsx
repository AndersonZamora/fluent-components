import React from 'react'
import { styleGridInten } from '../../utils';

interface Props {
    children: React.ReactNode;
}


export const GridItem = ({ children }: Props) => {

    const  styleItem = styleGridInten({
        padding:"10px",
        borderStyle:"solid",
        borderWidth:"1px",
        radiusWidth:"50px"
    })

    return (
        <div className='grid-item' style={styleItem}>
            {children}
        </div>
    )
}
