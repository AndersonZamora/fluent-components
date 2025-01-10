import { NavLink } from 'react-router-dom';

interface Props {
    title: string;
    toLink: string;
    icon: JSX.Element;
}

export const LinkNavBar = ({ title, toLink, icon }: Props) => {
    return (
        <NavLink
            to={`/${toLink}`}
            style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                color: isActive ? 'blue' : 'black',
                textDecoration: 'none',
                fontSize: '16px',
            })}
        >
            {icon}
            {title}
        </NavLink>
    )
}
