const app = new Vue({
    router: new VueRouter({
        routes: [
            { path: '/', component: { template: '<scam-layout></scam-layout>' } },
            { path: '/scam/add', component: { template: '<scam-add></scam-add>' } },
            { path: '/scam/edit/:id', component: { template: '<scam-add></scam-add>' } },
            { path: '/scam', component: { template: '<scam-list></scam-list>' } }
        ]
    })
}).$mount('#app')