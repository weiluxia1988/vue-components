<template>
  <div class="input-group">
    <input type="text" class="form-control" v-model="message" @keydown.enter='searchHandle' :placeholder="placeholder">
    <span class="input-group-btn">
      <button type="button" class="btn btn-flat" v-if="isDel" v-on:click="deleteHandle"><i class="fa fa-remove"></i></button>
      <button type="button" class="btn btn-flat" v-else v-on:click="searchHandle"><i class="fa fa-search"></i></button>
    </span>
  </div>
</template>
<script>
  import * as Util from "../../Util";
  export default{
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      input: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      message: {
        type: String,
        default: ''
      },
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    data () {
      return {
        isDel: false
      }
    },
    watch: {
      message (val) {
        this.isDel = !!this.message.length;
        if(this.input) this.onChange(val);
      }
    },
    methods: {
      deleteHandle: function() {
        this.message = '';
      },
      searchHandle: function() {
        this.onChange(this.message);
      }
    }
  }
</script>