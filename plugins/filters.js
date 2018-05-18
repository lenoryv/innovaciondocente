import Vue from 'vue'

Vue.filter('capitalize', val => val.toUpperCase());
Vue.filter('slice', (val, start, end) => val.slice(start, end) + '...');
