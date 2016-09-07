<!--
  穿梭框
  weiluxia 2016.09.01
  dataSource 数据源
  targetKeys 显示在右侧框数据的key集合
  onChange 变化时回调函数
  render 每行数据渲染函数
  titles 标题集合,顺序从左至右
  showSearch 是否显示搜索框
  searchPlaceholder 搜索框的默认值
  notFoundContent 当列表为空时显示的内容
-->
<template>
  <div class="v-transfer" :class="className">
    <div class="v-transfer-list" v-bind:style="listStyle">
      <div class="v-transfer-list-header">
        <v-checkbox
        :text = "sourceLenText"
        :checked = "allSourceChecked"
        :on-change="selectAllSourceHandle"
        ></v-checkbox>
        <span class="v-transfer-list-header-title">{{ titles[0] }}</span>
      </div>
      <div class="v-transfer-list-body" :class="showSearch ? 'v-transfer-list-body-with-search' : ''">
        <div v-if="showSearch" class="v-transfer-list-body-search-wrapper">
          <v-search
          input
          v-ref:source-search
          :placeholder="searchPlaceholder"
          :on-change="searchSourceHandle" 
          ></v-search>
        </div>
        <ul v-el:source>
          <template v-if="sourceList.length">
            <li v-for="item in sourceList" v-bind:title="item|renderTitle" >
              <v-checkbox
              :text = "item|renderTitle"
              :checked = "item.isChecked"
              :on-change="selectSourceHandle.bind(this, item)"
              ></v-checkbox>
            </li>
          </template>
          <p v-else class="v-transfer-list-body-not-found">{{ notFoundContent }}</p>
        </ul>
      </div>
    </div>
    <div class="v-transfer-operation">
      <button type="button" class="btn btn-sm" disabled="{{selectTargetList.length == 0}}" @click="toSourceHandle" :class="selectTargetList.length == 0 ? 'btn-default': 'btn-primary'">
        <span><i class="fa fa-angle-left"></i></span>
      </button>
      <button type="button" class="btn btn-sm" disabled="{{selectSourceList.length == 0}}" @click="toTargetHandle" :class="selectSourceList.length == 0 ? 'btn-default': 'btn-primary'">
        <span><i class="fa fa-angle-right"></i></span>
      </button>
    </div>
    <div class="v-transfer-list" v-bind:style="listStyle">
      <div class="v-transfer-list-header">
        <v-checkbox
        :text = "targetLenText"
        :checked = "allTargetChecked"
        :on-change="selectAllTargetHandle"
        ></v-checkbox>
        <span class="v-transfer-list-header-title">{{ titles[1] }}</span>
      </div>
      <div class="v-transfer-list-body" :class="showSearch ? 'v-transfer-list-body-with-search' : ''">
        <div v-if="showSearch" class="v-transfer-list-body-search-wrapper">
          <v-search
          v-ref:target-search
          input
          :placeholder="searchPlaceholder"
          :on-change="searchSourceHandle" 
          ></v-search>
        </div>
        <ul v-el:target>
          <template v-if="targetList.length">
            <li v-for="item in targetList" >
              <v-checkbox
              :text = "item|renderTitle"
              :checked = "item.isChecked"
              :on-change="selectTargetHandle.bind(this, item)"
              ></v-checkbox>
            </li>
          </template>
          <p v-else class="v-transfer-list-body-not-found">{{ notFoundContent }}</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import './transfer.scss';
  import * as Util from "../Util";
  import vCheckbox from '../checkbox';
  import vSearch from '../base/search';
  export default{
    components: { vCheckbox, vSearch },
    props: {
      rowKey: {
        type: String,
        default: 'key'
      },
      filterKey: {
        type: String,
        default: 'title'
      },
      dataSource: {
        type: Array,
        default () {
          return [];
        }
      },
      targetKeys: {
        type: Array,
        default () {
          return [];
        }
      },
      className: {
        type: String,
        default: ''
      },
      listStyle: {
        type: Object,
        default () {
          return {};
        }
      },
      titles: {
        type: Array,
        default () {
          return ['源列表', '目标列表'];
        }
      },
      showSearch: {
        type: Boolean,
        coerce: Util.coerceBoolean,
        default: false
      },
      searchPlaceholder: {
        type: String,
        default: '请输入搜索内容'
      },
      notFoundContent: {
        type: String,
        default: '列表为空'
      },
      render: {
        type: Function,
        default () {
          return new Function();
        }
      },
      onChange: {
        type: Function,
        default () {
          return new Function();
        }
      }
    },
    filters: {
      renderTitle (item) {
        return this.render(item);
      }
    },
    computed: {
      // 源数组-全选
      allSourceChecked () {
        return this.sourceList.length && this.sourceList.every( item => {
          return this.selectSourceList.includes(item);
        });
      },
      // 目标数组-全选
      allTargetChecked () {
        return this.targetList.length && this.targetList.every( item => {
          return this.selectTargetList.includes(item);
        });
      },
      // 源数组-选中条数/总条数
      sourceLenText () {
        let s = '';
        if(this.selectSourceList.length) {
          s = this.selectSourceList.length + '/';
        }
        return s + this.sourceList.length + '条';
      },
      // 目标数组-选中条数/总条数
      targetLenText () {
        let s = '';
        if(this.selectTargetList.length) {
          s = this.selectTargetList.length + '/';
        }
        return s + this.targetList.length + '条';
      }
    },
    data () {
      return {
        sourceList: [],
        targetList: [],
        selectSourceList: [],
        selectTargetList: []
      };
    },
    beforeCompile () {
      this.initList();
    },
    watch: {
      dataSource () {
        this.initList();
      }
    },
    methods: {
      // 初始化源数组和目标数组
      initList () {
        let self = this;
        let arr1 = [], arr2 = [], obj;
        self.defaultDataSource = JSON.parse(JSON.stringify(self.dataSource));
        self.defaultDataSource.forEach((item, i) => {
          obj = {};
          for(var e in item) {
            obj[e] = item[e];
          }
          Object.assign(obj, {isChecked: false});
          self.defaultDataSource.$set(i, obj);
          if(self.targetKeys.includes(obj[self.rowKey])) {
            arr1.push(obj);
          } else{
            arr2.push(obj);
          } 
        });
        if(self.showSearch) {
          self.$refs.sourceSearch && self.$refs.sourceSearch.refresh();
          self.$refs.targetSearch && self.$refs.targetSearch.refresh();
        }
        self.sourceList = arr2;
        self.targetList = arr1;
      },
      // 加入到源数组 
      toSourceHandle () {
        const moveList = this.selectTargetList;
        this.selectTargetList.forEach(item => {
          item.isChecked = false;
          this.targetKeys.$remove(item[this.rowKey]);
          this.targetList.$remove(item);
          this.sourceList.unshift(item);
        });
        // this.sourceList = this.selectTargetList.concat(this.sourceList);
        this.selectTargetList = [];
        this.$els.source.scrollTop = 0;
        this.onChange(this.targetList, 'left', moveList);
      },
      // 加入到目标数组
      toTargetHandle () {
        const moveList = this.selectSourceList;
        this.selectSourceList.forEach(item => {
          item.isChecked = false;
          this.sourceList.$remove(item);
          this.targetKeys.push(item[this.rowKey]);
          this.targetList.unshift(item);
        });
        this.selectSourceList = [];
        this.$els.target.scrollTop = 0;
        this.onChange(this.targetList, 'right', moveList);
      },
      // 源数组-全选
      selectAllSourceHandle (flag) {
        this.selectSourceList = [];
        if(flag) {
          this.sourceList.forEach(item => {
            item.isChecked = true;
            this.selectSourceList.push(item);
          });
        } else{
          this.sourceList.forEach(item => {
            item.isChecked = false;
          });
          this.selectSourceList = [];
        }
      },
      // 目标数组-全选
      selectAllTargetHandle (flag) {
        this.selectTargetList = [];
        if(flag) {
          this.targetList.forEach(item => {
            item.isChecked = true;
            this.selectTargetList.push(item);
          });
        } else{
          this.targetList.forEach(item => {
            item.isChecked = false;
          });
          this.selectTargetList = [];
        }
      },
      // 源数组-选中
      selectTargetHandle (one) {
        one.isChecked = !one.isChecked;
        if(one.isChecked) {
          this.selectTargetList.push(one);
        } else{
          this.selectTargetList.$remove(one);
        }
      },
      // 目标数组-选中
      selectSourceHandle (one) {
        one.isChecked = !one.isChecked;
        if(one.isChecked) {
          this.selectSourceList.push(one);
        } else{
          this.selectSourceList.$remove(one);
        }
      },
      // 源数组-搜索
      searchSourceHandle (con) {
        this.sourceMessage = con;
        this.search(con, 'source');
      },
      // 目标数组-搜索
      searchTargetHandle (con) {
        this.targetMessage = con;
        this.search(con, 'target');
      },
      // 搜索
      search (con, type) {
        let self = this, arr1 = [], arr2 = [];
        self.defaultDataSource.forEach((item, i) => {
          if(item[self.filterKey].indexOf(con) > -1) {
            if(self.targetKeys.includes(item[self.rowKey])) {
              arr1.push(item);
            } else{
              arr2.push(item);
            }
          }
        });
        if('source' == type) {
          self.sourceList = arr2;
        } else{
          self.targetList = arr1;
        }
      }
    }
  }
</script>