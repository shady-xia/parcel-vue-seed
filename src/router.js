import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Hello from './components/Hello'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '*',
        name: 'hello',
        component: Hello
    }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
