<template>
	<div class="login_container">
		<div class="login_box">
			<!-- 头像 -->
			<div class="login_avtior">
				<img src="../../assets/logo.png" alt="头像" />
			</div>
			<!-- 登录表单 -->
			<el-form
				label-width="0px"
				:model="loginForm"
				:rules="loginFormRules"
				class="login_from"
				ref="loginFormRef"
			>
				<!-- 用户名 -->
				<el-form-item prop="userName">
					<el-input type="text" prefix-icon="iconfont iconuser" v-model="loginForm.userName"></el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
					<el-input
						type="password"
						prefix-icon="iconfont iconmima"
						v-model="loginForm.password"
					></el-input>
				</el-form-item>
				<!-- 按钮区域 -->
				<el-form-item class="btns">
					<el-button type="primary" @click="login">登录</el-button>
					<el-button type="info" @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
import '../../styles/reset.scss';
import '../../styles/globle.scss';
export default {
	data() {
		return {
			loginForm: {
				userName: '',
				password: ""
			},
			loginFormRules: {
				// 验证用户名
				userName: [{ required: true, message: '请输入用户名', trigger: 'blur' },
				{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
				],
				// 验证密码
				password: [{ required: true, message: '请输入密码', trigger: 'blur' },
				{ min: 7, max: 15, message: '长度在 7 到 15 个字符', trigger: 'blur' }]
			}
		}
	},
	methods: {
		// 重置事件
		resetForm() {
			this.$refs.loginFormRef.resetFields()
		},
		// 登录事件
		login() {
			this.$refs.loginFormRef.validate(valid => {
				if (!valid) return;
			})
		}

	},
};
</script>
<style lang="scss" scoped>
.login_container {
	//   display: flex;
	//   justify-content: center;
	//   align-items: center;
	height: 100%;
	background-color: #2b4b6b;
}
.login_box {
	width: 400px;
	height: 300px;
	background-color: #fff;
	border-radius: 5px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	.login_avtior {
		width: 60px;
		height: 60px;
		padding: 10px;
		border: 4px solid #eeeeee;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 0 20px #ccc;
		background: #ccc;
		position: relative;
		left: 50%;
		top: -45px;
		transform: translateX(-50%);
		margin-bottom: 20px;
		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
}
.login_from {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
}
.btns {
	display: flex;
	justify-content: flex-end;
}
</style>
