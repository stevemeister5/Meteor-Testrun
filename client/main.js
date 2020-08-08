import { Meteor } from 'meteor/meteor'
import Vue from 'vue'
import App from './components/App.vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import 'vue-progress-path/dist/vue-progress-path.esm'
import VueProgress from 'vue-progress-path'

import router from './router'

Vue.use(VueMeteorTracker)

Vue.use(VueProgress, {
    defaultShape: 'semicircle',
})

Meteor.startup( () => {
    new Vue({
        el: '#app',
        router,
        ...App,
    })
})