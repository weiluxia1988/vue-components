<template>
  <article style="height: 2000px;">
    <h1>确认弹框Confirm</h1>
    <section>
      <h3>演示</h3>
      update
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
  import vConfirm from "../../../components/confirm";
  export default{
    components: { vButton, vConfirm }
  }
</script>