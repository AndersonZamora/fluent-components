interface Props {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    gap?: string;
}

interface ItemProps {
    padding?: string;
    borderWidth?: string;
    borderStyle: 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
    borderColor?: string;
    radiusWidth?: string;
}

export const styleGrid = ({ xs = 1, sm = 2, md = 3, lg = 4, gap = "10" }: Props): React.CSSProperties => {
    return {
        '--xs-cols': xs,
        '--sm-cols': sm,
        '--md-cols': md,
        '--lg-cols': lg,
        gap
    } as React.CSSProperties;
}

export const styleGridInten = ({ padding = "5px", borderWidth = "1px", borderStyle, borderColor = "#ddd", radiusWidth = "10px" }: ItemProps): React.CSSProperties => {
    return {
        padding,
        borderWidth,
        borderStyle,
        borderColor,
        radiusWidth,
    } as React.CSSProperties;
}










