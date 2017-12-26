import Vue from 'vue/dist/vue';
import App from './app';
import router from './router';

import './style/base.scss';

let vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

