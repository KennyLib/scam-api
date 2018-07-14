var templates = {
    Layout: '<div class="layout"><Layout>' +
        '<Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">' +
        '<Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">' +
        '<MenuItem name="1-1">' +
        '<Icon type="ios-navigate"></Icon>' +
        '<span>Option 1</span>' +
        '</MenuItem>' +
        '<MenuItem name="1-2">' +
        '<Icon type="search"></Icon>' +
        '<span>Option 2</span>' +
        '</MenuItem>' +
        '<MenuItem name="1-3">' +
        '<Icon type="settings"></Icon>' +
        '<span>Option 3</span>' +
        '</MenuItem>' +
        '</Menu>' +
        '</Sider>' +
        '<Layout>' +
        '<Header :style="{padding: 0}" class="layout-header-bar">' +
        '<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: \'20px 20px 0\'}" type="navicon-round" size="24"></Icon>' +
        '</Header>' +
        '<Content :style="{margin: \'20px\', background: \'#fff\', minHeight: \'260px\'}">' +
        'Content' +
        '</Content>' +
        '</Layout>' +
        '</Layout></div>',
    scam_list: '<div><Table :loading="loading" :columns="columns" :data="showData" stripe></Table>' +
        '<div style="margin: 10px;overflow: hidden">' +
        '<div style="float: right;">' +
        '<Page :total="dataCount" :current="1" :page-size="pageSize" size="small"  @on-change="handlePage" @on-page-size-change="handlePageSize" show-elevator></Page>' +
        '</div></div></div>',
    scam_add: '<Form :model="form" label-position="right" :label-width="100">' +
        '<FormItem label="Content">' +
        '<Input v-model="form.content" type="textarea" :rows="4" placeholder="内容"></Input>' +
        '</FormItem>' +
        '<FormItem>' +
        '<Button type="primary" @click="handleSubmit(\'form\')">提交</Button>' +
        '</FormItem>' +
        '</Form>'
}