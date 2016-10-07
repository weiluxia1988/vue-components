<template>
    <section class="content-header">
        <h1>Input数字输入框
            <small>InputNumber</small>
        </h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-solid">
                    <div class="box-header with-border">
                        <i class="fa fa-text-width"></i>
                        <h3 class="box-title">何时使用</h3>
                    </div>
                    <div class="box-body">
                        <p class="text-muted">让用户只能选择数字时</p>
                        <pre>
                            <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> /&gt;</span></code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="page-header"><i class="fa fa-code"></i> 代码演示</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="box box-success">
                    <div class="box-header">
                        <h3 class="box-title">基本使用</h3>
                    </div>
                    <div class="box-body">
                        <div class="col-md-4">
                            <v-num-input :name="oNumInput.name"
                                         :step="oNumInput.step"
                                         :min="oNumInput.min"
                                         :max="oNumInput.max"
                                         :value="oNumInput.value"
                                         @on-change="oNumInput.onChange">

                            </v-num-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="box-title">API</h3>
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">InputNumber props</h3>
                    </div>
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
                                <td>name</td>
                                <td>当前input的名称</td>
                                <td>String</td>
                                <td>''</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>当前值</td>
                                <td>Number</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>min</td>
                                <td>最小值</td>
                                <td>Number</td>
                                <td>-Infinity</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>最大值</td>
                                <td>Number</td>
                                <td>Infinity</td>
                            </tr>
                            <tr>
                                <td>step</td>
                                <td>每次改变的数值</td>
                                <td>Number</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>fillable</td>
                                <td>input框是否可以输入</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>数值变化回调</td>
                                <td>Function</td>
                                <td>new Function()</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import vNumInput from '../../../components/numInput';
    export default {
        components: {vNumInput},
        data(){
            let self = this;
            return {
                oNumInput: {
                    value: 5,
                    min: 0,
                    max: 10,
                    name: 'kk',
                    step: 1,
                    onChange (value) {
                        console.log('onchange: ' + value);
                    }
                }
            };
        }
    }
</script>