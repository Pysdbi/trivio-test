<template>
  <div>
		<AHeader/>
		<div>
			<div v-for="i in 10" :key="i">
				<h1>Card {{1}}</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quasi!</p>
			</div>
		</div>
  </div>
</template>
<script>
import AHeader from "./components/atoms/Header";
export default {
	components: {AHeader}
}
</script>
