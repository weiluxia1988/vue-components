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
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="{{searchPlaceholder}}">
            <span class="input-group-btn">
              <button type="submit" name="seach" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
            </span>
          </div>
        </div>
        <ul v-if="sourceList.length">
          <li v-for="item in sourceList" v-bind:title="item|renderTitle">
            <v-checkbox
            :text = "item|renderTitle"
            :checked = "item.isChecked"
            :on-change="selectSourceHandle.bind(this, item)"
            ></v-checkbox>
          </li>
        </ul>
        <p v-else>{{ notFoundContent }}</p>
      </div>
    </div>
    <div class="v-transfer-operation">
      <button type="button" class="btn btn-default btn-sm" disabled="{{selectTargetList.length == 0}}" @click="toSourceHandle">
        <span><i class="fa fa-angle-left"></i></span>
      </button>
      <button type="button" class="btn btn-default btn-sm" disabled="{{selectSourceList.length == 0}}" @click="toTargetHandle">
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
      <div class="v-transfer-list-body">
        <ul v-if="targetList.length">
          <li v-for="item in targetList">
            <v-checkbox
            :text = "item|renderTitle"
            :checked = "item.isChecked"
            :on-change="selectTargetHandle.bind(this, item)"
            ></v-checkbox>
          </li>
        </ul>
        <p v-else>{{ notFoundContent }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import './transfer.scss';
  import * as Util from "../Util";
  import vCheckbox from '../checkbox';
  export default{
    components: { vCheckbox },
    props: {
      rowKey: {
        type: String,
        default: 'key'
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
      // 源数组
      sourceList () {
        let arr = [];
        arr = this.dataSource.filter(item => {
          return !this.targetKeys.includes(item[this.rowKey]);
        })
        return arr;
      },
      // 目标数组
      targetList () {
        let arr = [];
        arr = this.dataSource.filter(item => {
          return this.targetKeys.includes(item[this.rowKey]);
        })
        return arr;
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
        selectSourceList: [],
        selectTargetList: []
      };
    },
    methods: {
      // 加入到源数组 
      toSourceHandle () {
        this.selectTargetList.forEach(item => {
          this.targetKeys.$remove(item[this.rowKey]);
        });
        this.selectTargetList = [];
      },
      // 加入到目标数组
      toTargetHandle () {
        let arr = [];
        this.selectSourceList.forEach(item => {
          arr.push(item[this.rowKey]);
        });
        this.targetKeys = this.targetKeys.concat(arr);
        this.selectSourceList = [];
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
      }
    }
  }
</script>