<template>
    <article>
        <h1>单选</h1>
        <section class="clearfix">
            <h3>演示</h3>
            <div class="box clearfix">
                <h1 class="col-md-8">单个应用的列子</h1>
                <div class="col-md-8">
                    <div style="float:left" v-for="item in radio1">
                        <v-radio
                                :checked="item.checked"
                                :disabled="item.disabled"
                                :type="item.type"
                                :text="item.text"
                                :value = "item.value"
                        ></v-radio>
                    </div>
                </div>
                <h1 class="col-md-8">整组应用的列子</h1>
                <div class="col-md-8">
                    <div class="col-md-12" style="margin-top:20px;">
                        <div class="col-md-3">type='ele'默认样式：</div>
                        <div class="col-md-9">
                            <v-radio-group
                                    :groupdata="group1"
                            ></v-radio-group>
                        </div>
                    </div>
                    <div class="col-md-12" style="margin-top:20px;">
                        <div class="col-md-3">type='blie'的样式：</div>
                        <div class="col-md-9">
                            <v-radio-group
                                    :groupdata="group2"
                            ></v-radio-group>
                        </div>
                    </div>
                    <div class="col-md-12" style="margin-top:20px;">
                        <div class="col-md-3">type='green'的样式：</div>
                        <div class="col-md-9">
                            <v-radio-group
                                    :groupdata="group3"
                            ></v-radio-group>
                        </div>
                    </div>
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
                            <td>checked</td>
                            <td>是否选中, true/是, false/否</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用, true/是, false/否</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>text</td>
                            <td>radio对应文本内容</td>
                            <td>String</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>radio的类型,一共三种,如整组应用的列子的三种。</td>
                            <td>String</td>
                            <td>默认第一种</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>当前选项的key值</td>
                            <td>String</td>
                            <td>/</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </article>
</template>
<script>
    import vRadio from '../../../components/radio/Radio.vue';
    import vRadioGroup from '../../../components/radio/RadioGroup.vue';
    export default{
        components: {vRadio, vRadioGroup},
        data () {
            let self = this;
            return {
                radio1: [{
                    checked: true,
                    disabled: true,
                    type: 'green',
                    text: '初始选中且禁用',
                    value:'test'
                }, {
                    checked: false,
                    disabled: false,
                    text: '初始未选中且未禁用',
                    value:'test'
                }, {
                    checked: true,
                    disabled: false,
                    text: '初始选中且未禁用',
                    value:'test'
                }, {
                    checked: false,
                    disabled: true,
                    text: '初始未选中且禁用',
                    value:'test'
                }],
                group1: [
                    {
                        checked: true,
                        disabled: false,
                        text: '苹果',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '桃子',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '桃子2',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '橘子',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '香蕉',
                        value:'test'
                    }
                ],
                group2: [
                    {
                        checked: true,
                        disabled: false,
                        text: '苹果',
                        type: 'blue',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '桃子',
                        type: 'blue',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '橘子',
                        type: 'blue',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '香蕉',
                        type: 'blue',
                        value:'test'
                    }
                ],
                group3: [
                    {
                        checked: true,
                        disabled: false,
                        text: '苹果',
                        type: 'green',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '桃子',
                        type: 'green',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '橘子',
                        type: 'green',
                        value:'test'
                    }, {
                        checked: false,
                        disabled: false,
                        text: '香蕉',
                        type: 'green',
                        value:'test'
                    }
                ]
            }
        }
    }
</script>