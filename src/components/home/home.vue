<template>
	<el-container class="home-container">
		<!-- 头部区域 -->
		<el-header>
			<div class="header-img">
				<!-- <img src="../../assets/logo.png" alt="" /> -->
				<span>后台管理系统</span>
			</div>
			<el-button type="info" @click="logout">退出</el-button>
		</el-header>
		<!-- 页面主体区域 -->
		<el-container>
			<!-- 侧栏区域 -->
			<el-aside width="200px">
				<!-- 侧边栏菜单区域 -->
				<el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff">
					<!-- 一级菜单 -->
					<el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
						<!-- 一级菜单模板区域 -->
						<template slot="title">
							<!-- 图标 -->
							<i class="el-icon-menu"></i>
							<!-- 文本 -->
							<span>{{ item.authName }}</span>
						</template>
						<!-- 二级菜单 -->
						<el-menu-item
							:index="subitem.id + ''"
							v-for="subitem in item.children"
							:key="subitem.id"
						>
							<template slot="title">
								<!-- 图标 -->
								<i class="el-icon-menu"></i>
								<!-- 文本 -->
								<span>{{ subitem.authName }}</span>
							</template>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<!-- 右主体 -->
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>
<script>
export default {
	data() {
		return {
			menuList: [],
		}
	},
	methods: {
		logout() {
			window.sessionStorage.clear()
			this.$router.push('/login')
		},
		// 获取菜单列表
		async getMenuList() {
			const { data: res } = await this.$http.get('menus')
			if (res.meta.status !== 200) return this.$message.errror(res.message)
			this.menuList = res.data
			console.log(res)
		},
	},
	created() {
		this.getMenuList()
	},
}
</script>
<style lang="scss" scoped>
.el-header {
	background-color: #373d41;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	font-size: 20px;
	div {
		display: flex;
		align-items: center;
	}
}
.el-aside {
	background-color: #333744;
}
.el-main {
	background-color: #eaedf1;
}
.home-container {
	height: 100%;
}
</style>
