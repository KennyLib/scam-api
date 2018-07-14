const app = new Vue({
    router: new VueRouter({
        routes: [
            { path: '/foo', component: { template: '<div>foo</div>' } },
            { path: '/scamadd', component: { template: '<scam-add></scam-add>' } },
            { path: '/scamlist', component: { template: '<scam-list></scam-list>' } }
        ]
    })
}).$mount('#app')