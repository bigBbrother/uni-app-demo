<template>
	<view class="content">
		<view class="text-area">
			123
			<view v-for="(item,i) in dataList" :key="i">{{item.name}}</view>
		</view>
		<button @click="gotoDeatil">点我跳转</button>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		getListAPi
	} from "/api/empApi.js";
	import {
		onMounted,
		ref
	} from "vue";
	const dataList = ref([])
	const getDataList = () => {
		getListAPi().then(res => {
			console.log(res);
			dataList.value = res.data
		})
	}
	// onMounted(() => {
	// 	getDataList()
	// })
	onLoad(() => {
		getDataList()
	})
	const gotoDeatil = () => {
		uni.navigateTo({
			url: "/pages/detail/detail"
		})
	}
</script>

<style>

</style>
