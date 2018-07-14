Vue.component('scam-layout', {
    data() {
        return {
            isCollapsed: false
        }
    },
    created: () => {
        document.title = '首页'
    },

    computed: {
        rotateIcon() {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses() {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    methods: {
        collapsedSider() {
            this.$refs.side1.toggleCollapse();
        }
    },
    template: templates.Layout
})
Vue.component('scam-list', {
    data: () => {
        return {
            loading: true,
            columns: [
                {
                    title: '#',
                    key: 'id'
                },
                {
                    title: '内容',
                    key: 'content'
                },
                {
                    title: '状态',
                    key: 'scam_status'
                },
                {
                    title: '添加时间',
                    key: 'create_time'
                },
                {
                    title: '修改时间',
                    key: 'update_time'
                }

            ],
            scamData: [],
            showData: [],
            dataCount: 0,
            pageSize: 10,
            pageNum: 1
        }
    },
    created: () => {
        document.title = '列表'
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `内容：${this.showData[index].content}`
            })
        },
        remove(index) {
            this.showData[index].id
            for (const key in this.scamData) {
                if (this.scamData[key].id == this.showData[index].id) {
                    this.scamData.splice(key, 1);
                }
            }
            this.showData.splice(index, 1);
        },
        handlePage(index) {
            this.showData = this.scamData.slice(this.pageSize * (index - 1), this.pageSize * index)
        },
        handlePageSize(value) {
            this.pageSize = value
        }
    },
    mounted() {
        this.columns.push({
            title: '编辑',
            key: 'action',
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'info',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.show(params.index)
                            }
                        }
                    }, '显示'),
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.$router.push('/scam/edit/' + params.row.id)
                            }
                        }
                    }, '编辑'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                this.remove(params.index)
                            }
                        }
                    }, '移除')
                ]);
            }
        })

        this.$nextTick(() => {
            axios.post('/api/scam/list', { status: 1 }).then((res) => {
                if (res.data.code == 200) {
                    this.scamData = res.data.data
                    this.showData = this.scamData.slice(0, this.pageSize)
                    this.dataCount = this.scamData.length
                    this.loading = false
                } else {
                    this.$Message.error(res.data.msg);
                }
            }).catch(function (error) {
                this.$Message.error(error);
            })
        })
    },
    template: templates.scam_list
})
Vue.component('scam-add', {
    data: () => {
        return {
            form: {
                id: '0',
                content: '',
                status: '0',
                wechartjson: '0'
            }
        }
    },
    mounted() {
        document.title = this.$route.params.id ? '编辑' : '添加'
        if (this.$route.params.id) {
            this.$nextTick(() => {
                axios.post('/api/scam/getbyid', { id: this.$route.params.id }).then((res) => {
                    this.form.id = res.data.data.id;
                    this.form.content = res.data.data.content;
                    this.form.status = res.data.data.scam_status;
                }).catch(function (error) {
                    this.$Message.error(error);
                })
            })

        }
    },
    methods: {
        handleSubmit(name) {
            let url = this.$route.params.id ? '/api/scam/update' : '/api/scam/create'
            this.$nextTick(() => {
                axios.post(
                    url,
                    this.form,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((res) => {
                        this.$Message.success('submit');
                        this.$router.push('/scam')
                    }).catch(function (error) {
                        console.log(error);
                    })
            })
        }
    },
    template: templates.scam_add
})
Vue.component('status-list', {
    data: () => {
        return {
            loading: true,
            columns: [
                {
                    title: '#',
                    key: 'id'
                },
                {
                    title: '父级',
                    key: 'parent_id'
                },
                {
                    title: '状态名称',
                    key: 'status'
                },
                {
                    title: '添加时间',
                    key: 'create_time'
                },
                {
                    title: '修改时间',
                    key: 'update_time'
                }

            ],
            statusData: [],
            showData: [],
            dataCount: 0,
            pageSize: 10,
            pageNum: 1
        }
    },
    created: () => {
        document.title = '列表'
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `内容：${this.showData[index].status}`
            })
        },
        remove(index) {
            this.showData[index].id
            for (const key in this.statusData) {
                if (this.statusData[key].id == this.showData[index].id) {
                    this.statusData.splice(key, 1);
                }
            }
            this.showData.splice(index, 1);
        },
        handlePage(index) {
            this.showData = this.statusData.slice(this.pageSize * (index - 1), this.pageSize * index)
        },
        handlePageSize(value) {
            this.pageSize = value
        }
    },
    mounted() {
        this.columns.push({
            title: '编辑',
            key: 'action',
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'info',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.show(params.index)
                            }
                        }
                    }, '显示'),
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.$router.push('/status/edit/' + params.row.id)
                            }
                        }
                    }, '编辑'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                this.remove(params.index)
                            }
                        }
                    }, '移除')
                ]);
            }
        })

        this.$nextTick(() => {
            axios.post('/api/status/list', {}).then((res) => {
                if (res.data.code == 200) {
                    this.statusData = res.data.data
                    this.showData = this.statusData.slice(0, this.pageSize)
                    this.dataCount = this.statusData.length
                    this.loading = false
                } else {
                    this.$Message.error(res.data.msg);
                }
            }).catch(function (error) {
                this.$Message.error(error.message);
            })
        })
    },
    template: templates.status_list
})
Vue.component('status-add', {
    data: () => {
        return {
            form: {
                id: 0,
                parentid: 0,
                status: '',
            }
        }
    },
    mounted() {
        document.title = this.$route.params.id ? '编辑' : '添加'
        if (this.$route.params.id) {
            this.$nextTick(() => {
                axios.post('/api/status/getbyid', { id: this.$route.params.id }).then((res) => {
                    this.form.id = res.data.data.id;
                    this.form.status = res.data.data.status;
                }).catch(function (error) {
                    this.$Message.error(error);
                })
            })

        }
    },
    methods: {
        handleSubmit(name) {
            let url = this.$route.params.id ? '/api/status/update' : '/api/status/create'
            this.$nextTick(() => {
                axios.post(
                    url,
                    this.form,
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then((res) => {
                        this.$Message.success('submit');
                        this.$router.push('/status')
                    }).catch(function (error) {
                        console.log(error);
                    })
            })
        }
    },
    template: templates.status_add
})
