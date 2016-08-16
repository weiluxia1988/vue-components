<template>
	<span class="v-tag label" :class="className">
		<slot></slot>
		<i v-if="closable" @click="closeHandle" class="fa fa-times"></i>
	</span>
</template>
<script>
	import './tag.scss';
  import * as Util from "../Util";
  const oTheme = {
  	'default': 'label-default',
  	'primary': 'label-primary',
  	'success': 'label-success',
  	'info': 'label-info',
  	'warning': 'label-warning',
  	'danger': 'label-danger'
  };
	export default {
		props: {
			theme: {
        type: String,
        default: 'default'
      },
      key: null,
			closable: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
			onClose: {
        type: Function,
        default () {
          return new Function();
        }
      }
		},
		computed: {
			className () {
				let arr = [];
				arr.push(oTheme[this.theme]);
				return arr.join(' ');
			}
		},
		methods: {
			closeHandle () {
				this.onClose(this.key);
				this.$destroy(true);
			}
		}
	}
</script>