import { styleGrid } from '../../utils'
import React from 'react';

interface Props {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    gap?: string;
    visible?: boolean;
    children: React.ReactNode;
}

export const GridComtainer = ({ xs, sm, md, lg, gap = "10px", visible = true, children }: Props) => {

    const gridStyle = styleGrid({ xs, sm, md, lg, gap })

    return (
        <>
            {
                visible && (
                    <div className='grid-container' style={gridStyle}>
                        {children}
                    </div>
                )
            }
        </>
    )
}
