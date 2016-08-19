<template>
    <section class="content-header">
        <h1>表单验证</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <h4>普通表单验证</h4>
                <validator name="validation0" :groups="['password']">
                    <form class="form-horizontal" novalidate>
                        <div class="form-group" v-validate-class>
                            <label for="username" class="col-sm-2 control-label">用户名:</label>
                            <div class="col-sm-10">
                                <input type="text" id="username" v-validate:username="username" placeholder="请填写你的用户名" class="form-control" :classes="styleValid" />
                                <p v-if="$validation0.username.required" class="help-block">请填写你的用户名</p>
                                <p v-if="!($validation0.username.required)" class="help-block">谢谢您的输入</p>
                            </div>
                        </div>
                        <div class="form-group" v-validate-class>
                            <label for="password1" class="col-sm-2 control-label">密码:</label>
                            <div class="col-sm-10">
                                <input type="text" id="password1" group="password" v-validate:password1="password1" placeholder="请填写你的密码" class="form-control" :classes="stylePassword1" />
                            </div>
                        </div>
                        <div class="form-group" v-validate-class>
                            <label for="password2" class="col-sm-2 control-label">重复密码:</label>
                            <div class="col-sm-10">
                                <input type="text" id="password2" group="password" v-validate:password2="password2" placeholder="请填写你的密码" class="form-control" :classes="stylePassword2" />
                                <p v-if="$validation0.password.invalid" class="help-block">请确认密码是否相同,至少8个字符</p>
                            </div>
                        </div>
                        <div class="form-group" v-validate-class>
                            <label for="comment" class="col-sm-2 control-label">字符数量:</label>
                            <div class="col-sm-10">
                                <input type="text" id="comment" v-validate:rules="rules" placeholder="请输入3-6个字符" class="form-control" :classes="styleRules" />
                                <p v-if="$validation0.rules.minlength" class="help-block">字符数量小于3个.</p>
                                <p v-if="$validation0.rules.maxlength" class="help-block">字符数量大于6个.</p>
                            </div>
                        </div>
                        <button type="submit" v-if="$validation0.valid" class="btn btn-success"> 提交</button>
                    </form>
                </validator>
                <h4>表单验证事件</h4>
                <validator name="validation1">
                    <form class="form-horizontal" novalidate>
                        <div class="form-group" v-validate-class>
                            <label for="vevent" class="col-sm-2 control-label">事件:</label>
                            <div class="col-sm-10">
                                <input type="text" id="vevent" v-validate:vevent="vevent" @valid="onValid" @invalid="onInvalid" @touched="onTouched" @dirty="onDirty" @modified="onModified" placeholder="请打开控制台,并在input内输入字符" class="form-control" :classes="styleVevent" />
                                <p v-if="$validation1.vevent.required" class="help-block">请打开控制台,并在input内输入字符</p>
                            </div>
                        </div>
                        <button type="submit" v-if="$validation1.valid" class="btn btn-success"> 提交</button>
                    </form>
                </validator>
                <h4>自定义表单验证</h4>
                <validator name="validation2">
                    <form class="form-horizontal" novalidate>
                        <div class="form-group" v-validate-class>
                            <label for="site" class="col-sm-2 control-label">自定义验证(url):</label>
                            <div class="col-sm-10">
                                <input type="text" id="site" v-validate:site="['url']" placeholder="请输入网址" class="form-control" :classes="styleUrl" />
                                <p v-if="$validation2.site.url" class="help-block">例如:http://www.bianfeng.com/</p>
                            </div>
                        </div>
                        <div class="form-group" v-validate-class>
                            <label for="address" class="col-sm-2 control-label">自定义验证(email):</label>
                            <div class="col-sm-10">
                                <input type="text" id="address" v-validate:address="['email']" placeholder="请输入网址" class="form-control" :classes="styleEmail" />
                                <p v-if="$validation2.address.email" class="help-block">例如:qianzhangsheng@bianfeng.com</p>
                            </div>
                        </div>
                        <button type="submit" v-if="$validation2.valid" class="btn btn-success"> 提交</button>
                    </form>
                </validator>
                <h4>单选框验证</h4>
                <validator name="validation3">
                    <form class="form-horizontal" novalidate>
                        <div class="form-group" v-validate-class>
                            <label for="address" class="col-sm-2 control-label">单选框:</label>
                            <div class="checkbox col-sm-10">
                                <p>
                                    <label>
                                        <input type="radio" v-validate:fruits="radioconfig" name="fruits" :classes="styleRadio" /> 单选1
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio" v-validate:fruits name="fruits" :classes="styleRadio" /> 单选2
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="radio" v-validate:fruits name="fruits" :classes="styleRadio" /> 单选2
                                    </label>
                                </p>
                                <p v-for="error in $validation3.errors" class="help-block">
                                    {{error.message}}
                                </p>
                            </div>
                        </div>
                        <button type="submit" v-if="$validation3.valid" class="btn btn-success"> 提交</button>
                    </form>
                </validator>
                <h4>复选框验证</h4>
                <validator name="validation4">
                    <form class="form-horizontal" novalidate>
                        <div class="form-group" v-validate-class>
                            <label for="address" class="col-sm-2 control-label">复选框:</label>
                            <div class="checkbox col-sm-10">
                                <p>
                                    <label>
                                        <input type="checkbox" v-validate:fruits="checkboxconfig" value="a" :classes="styleCheckbox" /> 复选1
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" v-validate:fruits value="b" :classes="styleCheckbox" /> 复选2
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" v-validate:fruits value="c" :classes="styleCheckbox" /> 复选2
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" v-validate:fruits value="d" :classes="styleCheckbox" /> 复选2
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input type="checkbox" v-validate:fruits value="e" :classes="styleCheckbox" /> 复选2
                                    </label>
                                </p>
                                <p v-for="error in $validation4.errors" class="help-block">
                                    {{error.message}}
                                </p>
                            </div>
                        </div>
                        <button type="submit" v-if="$validation4.valid" class="btn btn-success"> 提交</button>
                    </form>
                </validator>
                <h4>下拉列表验证</h4>
                <validator name="validation5">
                    <form class="form-horizontal" novalidate>
                        <div class="form-group" v-validate-class>
                            <label for="address" class="col-sm-2 control-label">下拉列表:</label>
                            <div class="checkbox col-sm-10">
                                <select v-validate:lang="selectconfig" class="form-control" :classes="styleSelect">
                                    <option value="">--- 请选择 ---</option>
                                    <option value="javascript">JavaScript是世界上最好的语言</option>
                                    <option value="ruby">Ruby</option>
                                    <option value="python">Python</option>
                                    <option value="perl">Perl</option>
                                    <option value="lua">Lua</option>
                                    <option value="go">Go</option>
                                    <option value="PHP">PHP</option>
                                    <option value="c">C</option>
                                    <option value="none">Not a nothing here</option>
                                </select>
                                <p v-if="$validation5.lang.required">亲,你必须选择一个</p>
                            </div>
                        </div>
                        <button type="submit" v-if="$validation5.valid" class="btn btn-success"> 提交</button>
                    </form>
                </validator>
            </div>
        </div>
    </section>
</template>
<script>
    import Vue from 'vue';
    import VueValidator from 'vue-validator';
    Vue.use(VueValidator);
    export default {
        data(){
            return {
                // 用户名
                username: {required: true},
                styleValid: {valid: 'has-success', invalid: 'has-error'},

                //密码验证
                password1: {minlength: 8, required: true},
                stylePassword1: {valid: 'has-success', invalid: 'has-error'},

                password2: {minlength: 8, required: true},
                stylePassword2: {valid: 'has-success', invalid: 'has-error'},

                // 字符数量区间
                rules: {minlength: 3, maxlength: 6},
                styleRules: {valid: 'has-success', invalid: 'has-error'},

                // 事件
                vevent: {required: true},
                styleVevent: {valid: 'has-success', invalid: 'has-error'},

                // 自定义验证规则
                styleUrl: {valid: 'has-success', invalid: 'has-error'},

                styleEmail: {valid: 'has-success', invalid: 'has-error'},

                //单选框
                radioconfig: {
                    required: {rule: true, message: '请选择单选框'}
                },
                styleRadio: {valid: 'has-success', invalid: 'has-error'},

                // 复选框
                checkboxconfig: {
                    required: {rule: true, message: '请选择复选框'},
                    minlength: {rule: 2, message: '至少选中2个'},
                    maxlength: {rule: 4, message: '不能超过4个'}
                },
                styleCheckbox: {valid: 'has-success', invalid: 'has-error'},

                // 下拉列表
                selectconfig: {required: true},
                styleSelect: {valid: 'has-success', invalid: 'has-error'}
            }
        },
        // 自定义验证
        validators: {
            url: function (val) {
                return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val);
            },
            email: function (val) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
            }
        },
        methods: {
            onValid: function () {
                console.log('valid event');
            },
            onInvalid: function () {
                console.log('invalid event');
            },
            onTouched: function () {
                console.log('touched event');
            },
            onDirty: function () {
                console.log('dirty event');
            },
            onModified: function (e) {
                console.log('modified event: ' + e.modified);
            }
        }
    }
</script>