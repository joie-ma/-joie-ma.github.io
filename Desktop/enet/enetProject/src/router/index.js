import Vue from 'vue';
import Router from 'vue-router';
import homepage from '@/components/PageHome';
import listpage from '@/components/PageList';
import detailpage from '@/components/PageDetail';
import aboutpage from '@/components/PageAbout';
import contactpage from '@/components/PageContact';
import fankuipage from '@/components/PageFankui';
import tooltip from '@/components/ToolTip';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'homepage', component: homepage},
        {path: '/listpage', name: 'listpage', component: listpage},
        {path: '/detailpage', name: 'detailpage', component: detailpage},
        {path: '/aboutpage', name: 'aboutus', component: aboutpage},
        {path: '/contactpage', name: 'contactpage', component: contactpage},
        {path: '/fankuipage', name: 'fankuipage', component: fankuipage},
        {path: '/tooltip', name: 'tooltip', component: tooltip}
    ]
});
