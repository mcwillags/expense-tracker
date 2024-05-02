import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Інформаційна панель',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "Надходження",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Витрати",
        icon: expenses,
        link: "/dashboard",
    },
]