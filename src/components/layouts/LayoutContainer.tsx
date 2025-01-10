import React from 'react'

interface Props {
    children: React.ReactNode;
}

export const LayoutContainer = ({ children }: Props) => {
    return (
        <div style={{ display: 'flex', padding: '10px', margin: '10px', flexDirection: 'column', width: '100%', height:'100%', gap: '10px' }}>
            {children}
        </div>
    )
}
