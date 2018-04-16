<template>
    <div class="rank-head container" :style="cStyle" id="transparent-header">
        <a class="rank-head-back" @click="routeBack"></a>
        {{title}}
    </div>
</template>
<script>
    export default{
        pros:['title','to','cStyle'],
        methods:{
            routerBack(){

                this.$route.go(-1);
            }
        }
    }
</script>