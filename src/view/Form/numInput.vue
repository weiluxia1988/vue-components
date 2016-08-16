<template>
    <section class="content-header">
        <h1>数字输入框InputNumber</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-2">
                <h3>演示</h3>
                <v-num-input :name="oNumInput.name"
                             :step="oNumInput.step"
                             :min="oNumInput.min"
                             :max="oNumInput.max"
                             :value="oNumInput.value"
                             @on-change="oNumInput.onChange">

                </v-num-input>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
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
<style>
    h1 {
        color: #3c8dbc;
        font-weight: 700;
    }
</style>
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