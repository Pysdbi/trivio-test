<template>
	<header class="nav">
		<input type="checkbox" id="nav-menu">
		<div class="nav-header">
			<h1>
				Trivio
			</h1>
		</div>
		<div class="nav-pages">
			<NuxtLink to="/" target="_blank">Page 1</NuxtLink>
			<NuxtLink to="/" target="_blank">Page 2</NuxtLink>
			<NuxtLink to="/" target="_blank">Page 3</NuxtLink>
			<NuxtLink to="/" target="_blank">Page 4</NuxtLink>
		</div>
		<div class="nav-menu-btn">
			<label for="nav-menu">
				Admin
			</label>
		</div>

		<div class="nav-links">
			<NuxtLink to="/" target="_blank">Page 1</NuxtLink>
			<NuxtLink to="/" target="_blank">Page 2</NuxtLink>
			<NuxtLink to="/" target="_blank">Page 3</NuxtLink>
			<NuxtLink to="/" target="_blank">Page 4</NuxtLink>
		</div>
	</header>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {onMounted, onUnmounted} from "#imports";

export default defineComponent({
	name: "AHeader",
	setup(){
		if(typeof document === "undefined") return

		const inputMenu = document.getElementById('nav-menu')
		const checkOutsideClick = (e) => e.target !== inputMenu && (inputMenu.checked = false)
		onMounted(() => {
			document.addEventListener('click', checkOutsideClick)
		})
		onUnmounted(() => {
			document.removeEventListener('click', checkOutsideClick)
		})
	}
})
</script>

<style scoped>
.nav {
	height: 64px;
	width: 100%;
	background: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	box-shadow: 0 4px 7px rgba(0, 0, 0, 5%);
	padding: 0 10px;
}

.nav > .nav-header > h1 {
	color: rgb(20, 20, 20);
	padding: 10px;
}

.nav > .nav-links > a, .nav > .nav-pages > a {
	padding: 13px 10px;
	text-decoration: none;
	color: rgb(10, 10, 10);
}
@media screen and (max-width: 768px) {
	.nav > .nav-pages {
		display: none;
	}
}

.nav > .nav-links > a:hover {
	background-color: rgba(10, 10, 10, .1);
}

.nav > #nav-menu {
	display: none;
}

.nav > .nav-menu-btn > label{
	padding: 10px;
	border-radius: 6px;
}

.nav > .nav-menu-btn > label:hover,
.nav #nav-menu:checked ~ .nav-menu-btn > label {
	background-color: rgba(50, 50, 50, .1);
}

.nav > .nav-links {
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 320px;
	height: 0;
	background: white;
	box-shadow: 0 4px 7px rgba(0, 0, 0, 14%);
	border-radius: 6px;
	overflow-y: hidden;
	top: 64px;
	margin-top: 8px;
	right: 0;
}

.nav > .nav-links > a {
	width: 100%;
}

.nav > #nav-menu:not(:checked) ~ .nav-links {
	height: 0;
}

.nav > #nav-menu:checked ~ .nav-links {
	height: min-content;
	max-height: 300px;
	overflow-y: auto;
}
</style>
