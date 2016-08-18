<template>
    <article>
        <h1>select</h1>
        <section class="clearfix">
            <h3>演示</h3>
            <div class="box">
                <div class="box-body clearfix">
                    <h1 class="col-md-8">select单选例子</h1>
                    <div class="col-md-5">
                        <v-select
                        :lists = "test.lists"
                        :multiple = "test.multiple"
                        :placeholders = "test.placeholder"
                        :id = 'test.id'
                        ></v-select>
                    </div>
                    <h1 class="col-md-8">select多选例子</h1>
                    <div class="col-md-5">
                        <v-select
                        :lists = "test1.lists"
                        :multiple = "test1.multiple"
                        :change = "test1.change"
                        :placeholders = "test1.placeholder"
                        :id = 'test1.id'
                        ></v-select>
                    </div>
                    <h1 class="col-md-8">ajax+select例子</h1>
                    <div class="col-md-12" style="margin:10px 0px">
                        把value内容作为条件去请求ajax。当select中选项过多时可以选择使用。
                    </div>
                    <div class="col-md-9" style="margin:10px 0px">
                        <pre>
        test3:{
            ajaxurl:'/testajax',
            minL:0,//search中value值的最小长度要求
            multiple:true,//多选
            placeholder:'请选择'
        }
                        </pre>
                    </div>
                    <div class="col-md-12" style="margin:10px -15px"> 
                        <div class="col-md-4">有min-l且不等于0时，当输入内容达到要求才请求：</div>
                        <div class="col-md-5">
                            <v-select
                            :multiple = "test2.multiple"
                            :ajaxurl = "test2.ajaxurl"
                            :min-l = "test2.minL"
                            :placeholders = "test4.placeholder"
                            ></v-select>
                        </div>
                    </div>
                    <div class="col-md-12" style="margin:10px -15px"> 
                        <div class="col-md-4">没min-l或者等于0时，获得焦点就请求：</div>
                        <div class="col-md-5">
                            <v-select
                            :multiple = "test3.multiple"
                            :ajaxurl = "test3.ajaxurl"
                            :min-l = "test3.minL"
                            :placeholders = "test4.placeholder"
                            ></v-select>
                        </div>
                    </div>
                    <h1 class="col-md-8">data+url请求lists例子</h1>
                    <div class="col-md-12" style="margin:10px 0px">
                        select会根据所提供的data+ajaxurl请求lists数据，其中data为请求参数
                    </div>
                    <div class="col-md-4" style="margin:10px 0px">
                        <v-select
                        :ajaxurl = "test4.ajaxurl"
                        :multiple = "test4.multiple"
                        :data = "test4.data"
                        :change = "test4.change"
                        :ajaxtype ="test4.ajaxtype"
                        :placeholders = "test4.placeholder"
                        ></v-select>
                    </div>
                    <div class="col-md-9" style="margin:10px 0px">
                        <pre>
        test4:{
            ajaxurl:'/testajax',//请求地址
            data:{test:'test4'},//参数
            ajaxtype:'get',//请求方式
            multiple:true,//多选
            change: function(){//change回调函数
                console.log('change ok');
            }
        }
                        </pre>
                    </div>
                    <div class="col-md-12">
                        具体应用,联级选择（结合change回调改变data参数，监测data参数变化重绘select）
                    </div>
                    <div class="col-md-12" style="margin:10px 0px">
                        <div class="col-md-4">
                            <v-select
                            :lists = "test5.lists"
                            :multiple = "test5.multiple"
                            :change = "test5.change"
                            :placeholders = "test5.placeholder"
                            :change = "test5.change"
                            ></v-select>
                        </div>
                        <div class="col-md-4">
                            <v-select
                            :ajaxurl = "test6.ajaxurl"
                            :multiple = "test6.multiple"
                            :data = "test6.data"
                            :change = "test6.change"
                            :ajaxtype ="test6.ajaxtype"
                            :placeholders = "test6.placeholder"
                            ></v-select>
                        </div>
                    </div>
                    <div class="col-md-12" style="margin:10px 0px">
                        <div class="col-md-4">
                            <pre>
        test5:{
            lists:[
                {id:'1',text:'测试1'},
                {id:'2',text:'test2'},
                {id:'3',text:'test3'},
                {id:'4',text:'test4'},
            ],
            change:function(){
                console.log(998);
                self.test6.data = {test:'9999'};
            },
            multiple:true,
            placeholder:'请选择'
        },
                            </pre>
                        </div>
                        <div class="col-md-4">
                            <pre>
        test6:{
            ajaxurl:'/testajax',
            data:{test:''},
            ajaxtype:'get',
            multiple:true,
            placeholder:'请选择',
            change: function(){
                console.log('change ok');
            }
        }
                            </pre>
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
                            <td>lists</td>
                            <td>select中的选项</td>
                            <td>arry</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>multiple=true时select为多选，false时为单选。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>placeholder提示</td>
                            <td>string</td>
                            <td>请选择</td>
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>当前select的唯一标识，id不重复</td>
                            <td>string</td>
                            <td>随机数</td>
                        </tr>
                        <tr>
                            <td>ajaxurl</td>
                            <td>ajax的url请求地址</td>
                            <td>string</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>min-l</td>
                            <td>ajax请求对input中value值得长度要求，没有就是获得焦点时请求数据。</td>
                            <td>string</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>change</td>
                            <td>select内容改变时的回调方法</td>
                            <td>function</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>ajax请求的参数，当存在data时select就回以这个data去获取lists数据</td>
                            <td>data = {}</td>
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
    import vSelect from '../../../components/select/select.vue';
    export default{
        components: {vSelect},
        data () {
            let self = this;
            return {
                test:{
                    lists:[
                        {id:'1',text:'test1'},
                        {id:'2',text:'test2'},
                        {id:'3',text:'test3'},
                        {id:'4',text:'test4'},
                    ],
                    id:'1',
                    multiple:false,
                    placeholder:'请选择'
                },
                test1:{
                    lists:[
                        {id:'1',text:'测试1'},
                        {id:'2',text:'test2'},
                        {id:'3',text:'test3'},
                        {id:'4',text:'test4'},
                    ],
                    id:'2',
                    change:function(){
                        self.test4.data = {test:'999'};
                    },
                    multiple:true,
                    placeholder:'请选择'
                },
                test2:{
                    ajaxurl:'/testajax',
                    minL:1,
                    multiple:true,
                    placeholder:'请选择'
                },
                test3:{
                    ajaxurl:'/testajax',
                    minL:0,
                    multiple:true,
                    placeholder:'请选择'
                },
                test4:{
                    ajaxurl:'/testajax',
                    data:{test:'test4'},
                    ajaxtype:'get',
                    multiple:true,
                    placeholder:'请选择',
                    change: function(){
                        console.log('change ok');
                    }
                },
                test5:{
                    lists:[
                        {id:'1',text:'测试1'},
                        {id:'2',text:'test2'},
                        {id:'3',text:'test3'},
                        {id:'4',text:'test4'},
                    ],
                    change:function(){
                        console.log(998);
                        self.test6.data = {test:'9999'};
                    },
                    multiple:true,
                    placeholder:'请选择'
                },
                test6:{
                    ajaxurl:'/testajax',
                    data:{test:''},
                    ajaxtype:'get',
                    multiple:true,
                    placeholder:'请选择',
                    change: function(){
                        console.log('change ok');
                    }
                },
            }
        }
    }
</script>