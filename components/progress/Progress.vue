<template>
	<div class="v-progress-outer">
		<span v-if="showInfo">
      {{ percent }}%
    </span>
		<div class="v-progress-inner">
			<div class="v-progress-bg"
				:style="{width: percent + '%', height: strokeWidth + 'px', background: bgColor}"
			></div>
		</div>
	</div>
</template>
<script>
	import './progress.scss';
	export default{
		props: {
			showInfo: {
				type: Boolean,
				default: true
			},
	    percent: {
	    	type: Number,
	    	default: 0
	    },
	    strokeWidth: {
	    	type: Number,
	    	default: 10
	    },
	    bgColor: {
	    	type: String,
	    	default: 'rgb(16, 169, 236)'
	    }
		}
	}
</script>