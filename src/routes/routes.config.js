import Home from '../components/pages/Home/Home'
import Sign from '../components/pages/Sign/Sign'
import Error from '../components/pages/Error/Error'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/sign',
        component: Sign,
        exact: true
    },
    {
        path: '/**',
        component: Error
    }
]

export default routes