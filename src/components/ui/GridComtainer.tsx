import { styleGrid } from '../../utils'
import React from 'react';

interface Props {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    gap?: string;
    children: React.ReactNode;
}

export const GridComtainer = ({ xs, sm, md, lg, gap="10px", children }: Props) => {

    const gridStyle = styleGrid({ xs, sm, md, lg,gap })

    return (
        <div className='grid-container' style={gridStyle}>
            {children}
        </div>
    )
}
