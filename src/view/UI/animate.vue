<template>
  <article>
    <h1>动画Animation</h1>
    <section>
      <h3>演示</h3>
      <!-- <div v-show="show" transition="fade" style="margin-top: 20px; width: 200px; height: 200px; background-color: red">hello</div> -->
      <div class="clearfix">
        <div class="col-md-5">
          <v-button type="primary" @click="slideHandle">slideUp/slideDown</v-button>
          <v-animate :show="slideShow" transition-name="slide">
            <div style="margin-top: 20px; width: 200px; height: 200px; background-color: red"></div>
          </v-animate>
        </div>
        <div class="col-md-5">
          <v-button type="primary" @click="fadeHandle">fadeIn/fadeOut</v-button>
          <v-animate :show="fadeShow" transition-name="fade">
            <div style="margin-top: 20px; width: 200px; height: 200px; background-color: red"></div>
          </v-animate>
        </div>
      </div>
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
                <td>transitionName</td>
                <td>设置动画类型，可选值为fade slide</td>
                <td>String</td>
                <td>default</td>
              </tr>
              <tr>
                <td>show</td>
                <td>设置显示状态，存在为 true，不存在为 false，或直接设置值，如：show="true"</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>onEnter</td>
                <td>显示动画回调</td>
                <td>Function</td>
                <td>new Function()</td>
              </tr>
              <tr>onLeave</td>
                <td>隐藏动画回调</td>
                <td>Function</td>
                <td>new Function()</td>
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

  /* 必需 */
  .fade-transition {
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }

  /* .fade-enter 定义进入的开始状态 */
  /* .fade-leave 定义离开的结束状态 */
  .fade-enter{
    animation-name: fadeIn;
    animation-play-state: running;
  }
  .fade-leave {
    animation-name: fadeOut;
    animation-play-state: running;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
<script>
  import vButton from "../../../components/button/Button.vue";
  import vAnimate from '../../../components/animate';
  export default{
    components: { vButton, vAnimate },
    data () {
      return {
        slideShow: true,
        fadeShow: true
      }
    },
    transitions: {
      fade: {
        beforeEnter: function (el) {
          console.log(1)
          el.textContent = 'beforeEnter';
        },
        enter: function (el) {
          console.log(2)
          el.textContent = 'enter';
        },
        afterEnter: function (el) {
          console.log(3)
          el.textContent = 'afterEnter';
        },
        enterCancelled: function (el) {
          // handle cancellation
          console.log(7)
        },
        beforeLeave: function (el) {
          console.log(4)
          el.textContent = 'beforeLeave';
        },
        leave: function (el) {
          console.log(5)
          el.textContent = 'leave';
        },
        afterLeave: function (el) {
          console.log(6)
          el.textContent = 'afterLeave';
        },
        leaveCancelled: function (el) {
          // handle cancellation
          console.log(8)
        }
      }
    },
    methods: {
      slideHandle () {
        this.slideShow = !this.slideShow;
      },
      fadeHandle () {
        this.fadeShow = !this.fadeShow;
      }
    }
  }
</script>