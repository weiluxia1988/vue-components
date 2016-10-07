<template>
    <section class="content-header">
        <h1>Select 选择器
            <small>类似 Select2 的选择器</small>
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
                        <p class="text-muted">弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选择器时。</p>
                        <pre>
                            <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">select</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>请选择<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"神盾局"</span>&gt;</span>神盾局<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"天机部"</span>&gt;</span>天机部<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span></code>
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
                        <multiselect
                                :selected="selected"
                                :options="options_selected"
                                @update="updateSelected">
                        </multiselect>
                    </div>
                    <div class="box-body">
                        <p class="text-muted text-justify"> {{selected | json}} </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box box-success">
                    <div class="box-header">
                        <h3 class="box-title">单选下拉（值）</h3>
                    </div>
                    <div class="box-body">
                        <multiselect
                                :options="options_valuePrimitive"
                                :selected="valuePrimitive"
                                :multiple="false"
                                :searchable="false"
                                :close-on-select="false"
                                :show-labels="false"
                                @update="updateValuePrimitive"
                                placeholder="单选"
                                label="name">
                        </multiselect>
                        <div class="box-body">
                            <p class="text-muted text-justify"> {{valuePrimitive | json}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box box-success">
                    <div class="box-header">
                        <h3 class="box-title">单选下拉（对象）</h3>
                    </div>
                    <div class="box-body">
                        <multiselect :options=source
                                     :selected=value
                                     :searchable=false
                                     :close-on-select=false
                                     :allow-empty=false
                                     @update=updateValue
                                     deselect-label="Can't remove this value'"
                                     key=name
                                     label=name
                                     placeholder="单选">
                        </multiselect>
                        <div class="box-body">
                            <p class="text-muted text-justify"> {{value | json}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box box-success">
                    <div class="box-header">
                        <h3 class="box-title">单选下拉（搜索）</h3>
                    </div>
                    <div class="box-body">
                        <multiselect :options=source
                                     :searchable=true
                                     :custom-label=nameWithLang
                                     @update=updateValue
                                     placeholder="单选"
                                     label=name
                                     key=name>
                        </multiselect>
                        <div class="box-body">
                            <p class="text-muted text-justify"> {{value | json}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box box-danger">
                    <div class="box-header">
                        <h3 class="box-title">多选下拉（默认）
                            <small>限制选项个数</small>
                        </h3>
                    </div>
                    <div class="box-body">
                        <multiselect :options=source
                                     :selected=multiValue
                                     :multiple=true
                                     :searchable=false
                                     :close-on-select=false
                                     :clear-on-select=false
                                     :limit=2
                                     @update=updateMultiValue
                                     placeholder="多选"
                                     label=name
                                     key=name>
                        </multiselect>
                        <div class="box-body">
                            <p class="text-muted text-justify"> {{multiValue | json}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box box-danger">
                    <div class="box-header">
                        <h3 class="box-title">多选下拉（搜索）
                            <small>限制选项个数</small>
                        </h3>
                    </div>
                    <div class="box-body">
                        <multiselect :options=source
                                     :selected=multiValue
                                     :multiple=true
                                     :searchable=true
                                     :close-on-select=false
                                     :clear-on-select=false
                                     :limit=2
                                     @update=updateMultiValue
                                     placeholder="多选"
                                     label=name
                                     key=name>
                        </multiselect>
                        <div class="box-body">
                            <p class="text-muted text-justify"> {{multiValue | json}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="box box-danger">
                    <div class="box-header">
                        <h3 class="box-title">多选下拉（搜索）
                            <small>不限个数</small>
                        </h3>
                    </div>
                    <div class="box-body">
                        <multiselect :options=source
                                     :selected=multiValue
                                     :multiple=true
                                     :searchable=true
                                     :close-on-select=false
                                     :clear-on-select=false
                                     @update=updateMultiValue
                                     placeholder="多选"
                                     label=name
                                     key=name>
                        </multiselect>
                        <div class="box-body">
                            <p class="text-muted text-justify"> {{multiValue | json}} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="box box-warning">
                    <div class="box-header">
                        <h3 class="box-title">异步多选下拉（搜索）</h3>
                    </div>
                    <div class="box-body">
                        <multiselect :options=countries
                                     :selected=selectedCountries
                                     :multiple=true
                                     :local-search=false
                                     :clear-on-select=false
                                     :close-on-select=false
                                     :loading=isLoading
                                     id=ajax
                                     @search-change=asyncFind
                                     @update=asyncUpdate
                                     label=name
                                     key=code
                                     placeholder="请输入内容">
                            <span slot=noResult>请稍后，正在努力加载...</span>
                        </multiselect>
                        <div class="box-body">
                            <p class="text-muted text-justify"> {{selectedCountries | json}} </p>
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
                        <h3 class="box-title">Select props</h3>
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
                                <td colspan="4" class="text-center">multiselectMixin.js</td>
                            </tr>
                            <tr>
                                <td>Id</td>
                                <td>用于识别事件中的组件</td>
                                <td>Integer||String</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Options</td>
                                <td>可用的选项数组: Objects, Strings or Integers. <br>如果对象数组，可见的标签将默认 option.label.</td>
                                <td>Array</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Selected</td>
                                <td>预设选项</td>
                                <td>Object||Array||String||Integer  </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Multiple</td>
                                <td>是否多选</td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>Key</td>
                                <td>用于比较对象。只作用于选项为对象的</td>
                                <td>String</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Label</td>
                                <td>下拉选项的标签，下拉时可见</td>
                                <td>String</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Searchable</td>
                                <td>添加/删除 搜索功能</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>LocalSearch</td>
                                <td>确定是否过滤基于搜索查询的结果。用于异步过滤搜索更复杂的数据。</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>ClearOnSelect</td>
                                <td>只有在'multiple'为 true 时用于清除搜索输入</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>HideSelected</td>
                                <td>隐藏已选择的选项</td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>Placeholder</td>
                                <td>相当于input上的Placeholder属性</td>
                                <td>String</td>
                                <td>'Select option'</td>
                            </tr>
                            <tr>
                                <td>MaxHeight</td>
                                <td>设置最大下拉选项数值</td>
                                <td>Integer</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>AllowEmpty</td>
                                <td>允许删除所有选定的值</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>ResetAfter</td>
                                <td>复位this.value，this.search, this.selected 变化为 this.value </td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>CloseOnSelect</td>
                                <td>启用/禁用关闭后，选择一个选项</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>CustomLabel</td>
                                <td>用于创建自定义标签的功能</td>
                                <td>Function => String</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Taggable</td>
                                <td>禁用/启用标签</td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>TagPlaceholder</td>
                                <td>高亮一个标签</td>
                                <td>String</td>
                                <td>'Press enter to create a tag'</td>
                            </tr>
                            <tr>
                                <td>Max</td>
                                <td>允许选择的选项数</td>
                                <td>Number</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="4" class="text-center">Multiselect.vue</td>
                            </tr>
                            <tr>
                                <td>SelectLabel</td>
                                <td>指向一个选项时显示的字符串</td>
                                <td>String</td>
                                <td>'Press enter to select'</td>
                            </tr>
                            <tr>
                                <td>SelectedLabel</td>
                                <td>显示下一个选择的选项的字符串</td>
                                <td>String</td>
                                <td>'Selected'</td>
                            </tr>
                            <tr>
                                <td>DeselectLabel</td>
                                <td>当选定一个选项时显示字符串</td>
                                <td>String</td>
                                <td>'Press enter to remove'</td>
                            </tr>
                            <tr>
                                <td>ShowLabels</td>
                                <td>在选项上的标签是否显示高亮</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>Limit</td>
                                <td>限制选项个数</td>
                                <td>Number</td>
                                <td>99999</td>
                            </tr>
                            <tr>
                                <td>LimitText</td>
                                <td>当选定元素通过定义的极限时，处理所显示的消息的函数</td>
                                <td>Function => String</td>
                                <td>count => `and ${count} more`</td>
                            </tr>
                            <tr>
                                <td>Loading</td>
                                <td>显示/隐藏加载(loading)</td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>Disabled</td>
                                <td>启用/禁用多选</td>
                                <td>Boolean</td>
                                <td>false</td>
                            </tr>
                            <tr>
                                <td>OptionPartial</td>
                                <td>自定义选项部分的名称</td>
                                <td>String</td>
                                <td>multiselectBasicOptionPartial</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="text-center">pointerMixin.js</td>
                            </tr>
                            <tr>
                                <td>ShowPointer</td>
                                <td>启用/禁用高亮显示的指向值</td>
                                <td>Boolean</td>
                                <td>true</td>
                            </tr>
                            <tr>
                                <td>OptionHeight</td>
                                <td>设置用于滚动选项的高度</td>
                                <td>Number</td>
                                <td>40</td>
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
    import Multiselect from 'vue-multiselect';
    import countries from '../../../j/countries.json';

    export default {
        components: {Multiselect},
        data () {
            return {
                selected: null,
                // 基础使用
                options_selected: ["list", "of", "options"],
                // 单选下拉（值）
                options_valuePrimitive: ["Select option", "options", "selected", "mulitple", "label", "searchable", "clearOnSelect", "hideSelected", "maxHeight", "allowEmpty", "showLabels", "onChange", "touched"],
                valuePrimitive: "showLabels",
                // 单选下拉（对象）
                source: [
                    {name: "Vue.js", language: "JavaScript"},
                    {name: "Rails", language: "Ruby"},
                    {name: "Sinatra", language: "Ruby"},
                    {name: "Laravel", language: "PHP"},
                    {name: "Phoenix", language: "Elixir"}
                ],
                value: {name: "Vue.js", language: "Javascript"},
                // 多选下拉
                multiValue: [{name: "Vue.js", language: "Javascript"}],
                // 异步多选下拉
                isLoading: false,
                countries: [],
                selectedCountries: [],
            }
        },
        methods: {
            // 基础使用
            updateSelected (newSelected) {
                this.selected = newSelected
            },
            // 单选下拉（值）
            updateValuePrimitive (value) {
                this.valuePrimitive = value
            },
            // 单选下拉（对象）
            updateValue (value) {
                this.value = value
            },
            // 单选下拉（搜索）
            nameWithLang ({name, language}) {
                return `${name} — [${language}]`
            },
            // 多选下拉
            updateMultiValue (value) {
                this.multiValue = value
            },
            // 异步多选下拉
            // 异步需要加载以前面的 json
            // 官方这个例子写错了，看源码，排错。官方错误 :multiple=multiple，必须这样 :multiple=true，不然无法选中选项...
            asyncFind (query) {
                if (query.length === 0) {
                    this.countries = []
                } else {
                    this.isLoading = true;
                    setTimeout(() => {
                        this.countries = countries.filter((element, index, array) => {
                            return element.name.toLowerCase().includes(query.toLowerCase())
                        });
                        this.isLoading = false
                    }, 1000)
                }
            },
            asyncUpdate (newVal) {
                this.selectedCountries = newVal
            }
        }
    }
</script>