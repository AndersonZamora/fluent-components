import { Route, Routes } from 'react-router-dom'
import { ContentNavBar } from '../components'
import { Home, PageDateTime, PageSelect } from '../pages'

export const ContentRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<ContentNavBar />} >
                <Route path='/' element={<Home />} />
                <Route path='/inicio' element={<Home />} />
                <Route path='/fechas' element={<PageDateTime />} />
                <Route path='/selects' element={<PageSelect />} />

                </Route>
            </Routes>
        </>
    )
}
