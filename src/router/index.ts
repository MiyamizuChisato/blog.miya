import {createRouter, createWebHashHistory} from "vue-router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('/src/layout/Layout.vue'),
        children:
            [
                {
                    path: "/",
                    name: 'home',
                    component: () => import('/src/views/Home.vue'),
                    meta: {title: '主页', icon: 'icon-Home', card: {show: false}},
                },
                {
                    path: "/code",
                    name: "code",
                    component: () => import('/src/views/game.vue'),
                    meta: {
                        title: '程序',
                        icon: 'icon-biancheng',
                        card: {show: true, title: '程序人生', des: '程序人生卡片的Test，这里是程序板块的统计', backgroundColor: '#ad2b2b'}
                    }
                },
                {
                    path: "/game",
                    name: "game",
                    component: () => import('/src/views/game.vue'),
                    meta: {
                        title: '游戏',
                        icon: 'icon-playstation',
                        card: {show: true, title: '游戏人生', des: '游戏人生卡片的Test，这里是游戏板块的统计', backgroundColor: '#8aceff'}
                    }
                },
                {
                    path: "/anime",
                    name: "anime",
                    component: () => import('/src/views/game.vue'),
                    meta: {
                        title: '动漫',
                        icon: 'icon-003-sakura',
                        card: {show: true, title: '动漫人生', des: '动漫人生卡片的Test，这里是动漫板块的统计', backgroundColor: '#fedbe9'}
                    }
                },
            ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        component: () => import('/src/views/404.vue')
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return {
            el: '#app', top: 0, left: 0, behavior: 'smooth'
        }
    },
})
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})
export default router
