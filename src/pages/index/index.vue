<template>
    <div class="index">Hi Vue</div>
</template>
<script>
    import 'Utils/swiper-3.3.1'
    import cache from 'Utils/cache'
    import Toast from 'Components/Toast/index'

    export default {
    	data() {
    		return {
                test: true
    		}
    	},
    	created() {
            document.title = '设置页面title'
        },
        mounted() {
        	this.toast(3000, '获取信息失败jo');
        },
        methods: {
        	toast(time, msg) {
                Toast({
                    show: 'true',
                    duration: time,
                    message: msg
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "./index";
</style>