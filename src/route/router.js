const Index = resolve => {
    require.ensure([], () => {
        resolve(require('../pages/index/index.vue'))
    },'index')
}
const Detail = resolve => {
    require.ensure([], () => {
        resolve(require('../pages/detail/detail.vue'))
    },'detail')
}


export default [
    {
        name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'detail',
        path: '/detail',
        component: Detail
    },
    {
        path: '*',
        redirect: '/'
    }
]

