const app = new Vue({
    router: new VueRouter({
        routes: [
            {
                path: '/', component: { template: '<scam-layout></scam-layout>' },
                children: [
                    { path: '/scam/add', component: { template: '<scam-add></scam-add>' } },
                    { path: '/scam/edit/:id', component: { template: '<scam-add></scam-add>' } },
                    { path: '/scam', component: { template: '<scam-list></scam-list>' } },
                    { path: '/status/add', component: { template: '<status-add></status-add>' } },
                    { path: '/status/edit/:id', component: { template: '<status-add></status-add>' } },
                    { path: '/status', component: { template: '<status-list></status-list>' } }
                ]
            }]
    })
}).$mount('#app')