Vue.component('scam-list', {
    data: () => {
        return {
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
            scamData: []
        }
    },
    created: () => {
        document.title = '列表'
    },
    mounted() {
        this.$nextTick(() => {
            axios.post('/api/scam/list').then((res) => {
                if (res.data.code == 200) {
                    this.scamData = res.data.data
                    this.$Message.success(res.data.msg);
                } else {
                    this.$Message.error(res.data.msg);
                }
            }).catch(function (error) {
                this.$Message.error(error);
            })
        })
    },
    template: '<Table :columns="columns" :data="scamData"></Table>'
})
Vue.component('scam-add', {
    data: () => {
        return {
            form: {
                content: '',
                wechartjson: '_'
            }
        }
    },
    created: () => {
        document.title = '添加'
    },
    methods: {
        handleSubmit(name) {
            this.$nextTick(() => {
                axios({
                    method: 'post',
                    url: '/api/scam/create',
                    data: this.form,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    this.$Message.success('submit');
                }).catch(function (error) {
                    console.log(error);
                })
            })
        }
    },
    template: '<Form :model="form" label-position="right" :label-width="100">' +
        '<FormItem label="Content">' +
        '<Input v-model="form.content" type="textarea" :rows="4" placeholder="内容"></Input>' +
        '</FormItem>' +
        '<FormItem>' +
        '<Button type="primary" @click="handleSubmit(\'form\')">提交</Button>' +
        '</FormItem>' +
        '</Form>'
})