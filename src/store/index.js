import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      audio:{
        songUrl:'',
        imgUrl:'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
        title:'',
        singer:'',
        currentLength:0,
        songLength:0,
        currentLength:false
      },
        head:{
            toggle:false,
            title:'',
            style:{'background':'rgba(43,162,251,0)'}
        },
        headNav:'head-nav1',
        listInfo: {
			songList: [],
			songIndex: 0
		},
        audioLoadding: false,
    },
    getters: {
        headNav:state=>state.headNav,
        head:state=>state.head,
        audioLoadding: state => state.audioLoadding,
    },
    mutations:{
        setAudio(state, audio){
			if (!state.listenCount) {
				state.showPlayer = true  //首次进入应用时不可打开播放详情
			}
			state.listenCount++
			state.audio = {...(state.audio), ...audio}
		},
        showHead(state, flag){
			state.head.toggle = flag
		},
        setHeadTitle(state,title){
            state.head.title = title
        },
        setHeadStyle(state,style){
            state.head.title = style
        },
        setHeadNav: (state, nav) => {
			state.headNav = nav
		},
        showDetailPlayer: (state, flag) => {
			state.detailPlayerFlag = flag
		},
        toggleAudioLoadding: (state, flag) => {
			state.audioLoadding = flag
		},
        setLrc: (state, lrc) => {
			state.audio = {...(state.audio), lrc}
		},
    },
    actions:{
        getSong({commit, state}, hash){
			commit('toggleAudioLoadding', true)
			axios.get(`/bproxy/yy/index.php?r=play/getdata&hash=${hash}`).then(({data}) => {
				data = data.data
				const songUrl = data.play_url
				const imgUrl = data.img
				const title = data.audio_name
				const songLength = data.timelength / 1000
				const singer = data.author_name
				const currentLength = 0;
				const lrc = data.lyrics
				const	audio = {songUrl, imgUrl, title, singer, songLength, currentLength}
				commit('setAudio', audio)
				commit('setLrc', lrc)
				commit('toggleAudioLoadding', false)
			})
		},
    }
})

export default store
