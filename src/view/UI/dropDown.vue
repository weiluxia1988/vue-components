<template>
  <article>
    <h1>下拉菜单dropDown</h1>
    <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
    <section>
      <h3>演示</h3>
      <v-drop-down
        trigger="hover"
      >
        <v-button type="warn">hover <i class="fa fa-caret-down"></i></v-button>
        <ul slot="content" class="dropdown-menu">
          <li><a href="javascript:;">Action</a></li>
          <li><a href="javascript:;">Another action</a></li>
          <li><a href="javascript:;">Something else here</a></li>
          <li class="divider"></li>
          <li><a href="javascript:;">Separated link</a></li>
        </ul>
      </v-drop-down>
      <v-drop-down
        trigger="click"
      >
        <v-button type="warn">click <i class="fa fa-caret-down"></i></v-button>
        <ul slot="content" class="dropdown-menu">
          <li><a href="javascript:;">Action</a></li>
          <li><a href="javascript:;">Another action</a></li>
          <li><a href="javascript:;">Something else here</a></li>
          <li class="divider"></li>
          <li><a href="javascript:;">Separated link</a></li>
        </ul>
      </v-drop-down>
    </section>
    <section>
      <h3>使用</h3>
      <div class="box">
        <div class="box-body">
          <table class="table table-bordered table-hover dataTable">
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>  
              <tr>
                <td>trigger</td>
                <td>触发下拉的行为</td>
                <td>click or hover</td>
                <td>hover</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>菜单是否禁用</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>show</td>
                <td>菜单是否显示</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>onVisibleChange</td>
                <td>菜单显示状态改变时调用</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </article>
</template>
<style>
  h1{
    color: #3c8dbc;
    font-weight: 700;
  }
</style>
<script>
  import vButton from "../../../components/button";
  import vDropDown from "../../../components/dropDown";
  export default{
    components: { vButton, vDropDown },
    data () {
      let self = this;
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>