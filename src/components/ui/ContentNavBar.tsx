import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'

export const ContentNavBar = () => {
    return (
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
            <div>
                <NavBar />
            </div>
            <Outlet />
        </div>
    )
}
