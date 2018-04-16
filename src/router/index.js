import Vue from 'vue'
import VueRouter from 'vue-router'
import NewSongs from '@/views/NewSongs'
import Rank from '@/views/Rank'
import Plist from '@/views/Plist'
import Singer from '@/views/Singer'
import Search from '@/views/Search'
import RankInfo from '@/views/RankInfo'
import PlistInfo from '@/views/PlistInfo'
import SingerList from '@/views/SingerList'
import SingerInfo from '@/views/SingerInfo'
    
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path: '/newSongs',
            component: NewSongs,
            alias: '/'
        },
         {
            path: '/rank',
            component: Rank
        },
        {
            path: '/plist',
            component: Plist
        },
        {
            path: '/singer',
            component: Singer
        },
         {
            path: '/search',
            component: Search
        },
         {
            path: '/rank/info/:id',
            component: RankInfo
        },
         {
            path: '/plist/info/:id',
            component: PlistInfo
        },
        {
            path: '/singer/list/:id',
            component: SingerList
        },
        {
            path: '/singer/info/:id',
            component: SingerInfo
        },
        {
            path: '*',
            redirect:'/'
        },
        
    ]
});


export default router 