import Layout from '../page/layout/index';
import Login from '../page/login/index';
import Article from '../page/compoment/article/index'
import Detail from '../page/compoment/detail/index'
import List from '../page/compoment/list/index'

export let arr=[
    {
        path: '/article',
        name:'文章',
        compoment: Article,
        exact: false,
    },
    {
        path: '/detail',
        name:'详情',
        compoment: Detail,
        exact: false,
    },
    {
        path: '/list',
        name:'列表',
        compoment: List,
        exact: false,
    }
]


export default [
    {
        path: '/',
        compoment: Layout,
        exact: true,
    },
    {
        path: '/login',
        compoment: Login,
        exact: false,
    },
]