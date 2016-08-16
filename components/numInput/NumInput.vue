<!--
    数字输入框
    qianzhangsheng 2016.08.10
    name            名称
    value           当前值
    min             最小值
    max             最大值
    step            每次改变的数值
    fillable        是否输入
    onChange        变化回调
-->
<template>
    <div class="v-numinput input-group">
        <div class="v-numinput-handler-wrap">
            <a @click="_up"
               :class="'v-numinput-handler ' + 'v-numinput-handler-up ' + upDisabledClass">
                <span class="v-numinput-handler-up-inner">
                    <i class="fa fa-angle-up"></i>
                </span>
            </a>
            <a @click="_down"
               :class="'v-numinput-handler ' + 'v-numinput-handler-down ' + downDisabledClass">
                <span class="v-numinput-handler-down-inner">
                    <i class="fa fa-angle-down"></i>
                </span>
            </a>
        </div>
        <div class="v-numinput-input-wrap">
            <input type="text"
                   class="v-numinput-input form-control"
                   number
                   :name="name"
                   v-model="value"
                   :readonly="!fillable"
                   pattern="[0-9]*"
                   @change="_onChange" />
        </div>
    </div>
</template>
<script>
    import './numinput.scss';

    export default {
        props: {
            min: {
                type: Number,
                default: -Infinity
            },
            max: {
                type: Number,
                default: Infinity
            },
            step: {
                type: Number,
                default: 1
            },
            value: {
                type: Number,
                default: 0
            },
            name: String,
            fillable: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            disabledMin(){
                return typeof this.min === 'undefined' ? false : this.value <= this.min;
            },
            disabledMax(){
                return typeof this.max === 'undefined' ? false : this.value >= this.max;
            }
        },
        ready(){
        },
        watch: {
            value(newValue, old){
                // 如果输入带有非数字,则计算的输入非数字前的数值
                if (isNaN(newValue)) {
                    this.value = old;
                }
                if (this.value < this.min) {
                    //this.value = this.min;
                    this.value = old;
                }
                if (this.value > this.max) {
                    //this.value = this.max;
                    this.value = old;
                }
                this.$emit('on-change', this.value);
            }
        },
        methods: {
            _up(){
                if (!this.disabledMax) {
                    this.value += this.step;
                }
            },
            _down(){
                if (!this.disabledMin) {
                    this.value -= this.step;
                }
            },
            _onChange(event){
                let val = event.target.value.trim();


            }
        }
    }
</script>