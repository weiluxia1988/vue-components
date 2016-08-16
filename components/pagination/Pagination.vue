<!--
  分页插件 
  weiluxia 2016.07.18  
  rcount 总条数
  pcount 总页数
  curpage 当前页
  perpage 每页显示数量
-->
<template>
<ul class="pagination pagination-sm no-margin" v-if="pcount > 1">
  <li v-bind:class="curpage <= 1 ? 'disabled' : ''">
    <a href="javascript:;" @click="prev">«</a>
  </li>
  <li v-if="curpage >= (1 + 3) && pcount > 5">
    <a href="javascript:;" @click="goPage(1)">1</a>
  </li>
  <li v-if="curpage > (1 + 3) && pcount > 6">
    <span>...</span>
  </li>
  <li v-for="sub in list" v-bind:class="sub == curpage ? 'active': ''">
    <a v-if="sub != curpage" href="javascript:;" @click="goPage(sub)">{{sub}}</a>
    <span v-if="sub == curpage">{{sub}}</span>
  </li>
  <li v-if="curpage < pcount - 3 && pcount > 6">
    <span>...</span>
  </li>
  <li v-if="curpage <= pcount - 3 && pcount > 5">
    <a href="javascript:;" @click="goPage(pcount)">{{pcount}}</a>
  </li>
  <li v-bind:class="curpage >= pcount ? 'disabled' : ''">
    <a href="javascript:;" @click="next">»</a>
  </li>
</ul>
</template>
<script>
  function getPages(pager) {
    var pager_list = [],
        nRcount = +pager.rcount;
    if (nRcount) {
      var nPrePage = +pager.prePage,
          nPcount = pager.pcount = +(pager.pcount || Math.ceil(nRcount / nPrePage)),
          nPage = +pager.curpage,
          nPrevDif = 4 - Math.min(nPage - 1, 2),
          nNextDif = 4 - Math.min(nPcount - nPage, 2),
          nPageStart = Math.max(nPage - nNextDif, 1),
          nPageEnd = Math.min(nPage + nPrevDif, nPcount),
          list = [];
      for(var i = nPageStart; i <= nPageEnd; i++) {
        list.push(i);
      }
      pager_list = list;
    }
    return pager_list;
  }
  export default {
    props: {
      rcount: {
        type: Number,
        default: 0
      },
      pcount: {
        type: Number,
        default: 0
      },
      curpage: {
        type: Number,
        default: 0
      },
      perpage: {
        type: Number,
        default: 10
      },
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    computed: {
      list: function() {
        return getPages({curpage: this.curpage, pcount: this.pcount, rcount: this.rcount, perpage: this.perpage});
      }
    },
    methods: {
      prev: function() {
        this.curpage = Math.max(this.curpage - 1 , 1);
        this.onChange(this.curpage);
      },
      next: function() {
        this.curpage = Math.min(this.curpage + 1 , this.pcount);
        this.onChange(this.curpage);
      },
      goPage: function(page) {
        this.curpage = page;
        this.onChange(this.curpage);
      }
    }
  };
</script>
