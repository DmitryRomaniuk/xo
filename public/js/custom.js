/**
 * Created by Dzmitry_Ramaniuk2 on 01-Nov-16.
 */
'use strict';
var data_1 = { counter_y1:0,counter_y2:0,counter_y3:0,counterx1:0,counterx2:0,counterx3:0 };
Vue.component('my-game', {
  template: `
        <div class="game">
            <my-row class="row-0" row=0 v-on:click="newClick"></my-row>
            <my-row class="row-1" row=1 v-on:click=""></my-row>
            <my-row class="row-2" row=2 v-on:click=""></my-row>
        </div>
            `,
            methods: {
                newClick: function () {
                    console.log('click')
                    this.$emit('asdf','asdfsa')
                }
            }
})
Vue.component('my-row', {
  template: `
        <div class="row-box" >
            <my-col class="colu-0" :row="row" col=0 v-on:click="" @position-click="handleClick"></my-col>
            <my-col class="colu-1" :row="row" col=1 v-on:click=""></my-col>
            <my-col class="colu-2" :row="row" col=2 v-on:click=""></my-col>
        </div>
            `,
  props: ['row'],
    methods: {
    handleClick: function(positX){
        //console.log(positX);
        /*fetch('/', {
            method: 'post',
            body: JSON.stringify(posit)
        });   */
    }
}
})
Vue.component('my-col', {
  template: `<div class="cell" v-on:click="cx2(event)">
                    <div class="inner-fillet">
                        <i class="fa fa-check" aria-hidden="true"
                        v-bind:class="[isChecked ? 'busy' : 'free']"></i>
                    </div>
            </div>
            `,
    props: ['row','col'],
    data: function () {
        //console.log('ROW'+this.row)
        //console.log('COL'+this.col)
        var posX=this.col;
        var posY=this.row;
        var isChecked = arr[posX][posY];
        return {arr: arr, isChecked:isChecked, posX:posX, posY:posY}
    },
    computed: {
    classObject: function () {
        this.isChecked = arr[this.posX][this.posY];
        return {
        free: !this.isChecked,
        busy: this.isChecked
        }
    }
    },
    methods: {
        cx2: function(event) {
            arr[this.posY][this.posX] = true;
            //console.log(arr[0][0],arr[0][1],arr[0][2],arr[1][0],arr[1][1],arr[1][2],arr[2][0],arr[2][1],arr[2][2]);
            console.log(this.posX+ ' '+this.posY+ ' '+this.isChecked)
            this.posClick = {posX:this.posX,posY:this.posY};
            //console.log('emit-data');
            this.$emit('position-click', 'data')
            return arr
        }
    }
})
var arrX = new Array(3);
var arr = [Object.create(arrX),Object.create(arrX),Object.create(arrX)];
new Vue({
    el: '#gameClick',
    methods: {
        onClick: function(event) {
    },
    handleClick: function(positX){
        //console.log(positX);
        /*fetch('/', {
            method: 'post',
            body: JSON.stringify(posit)
        });   */
    },
    randomClick: function(message) {
        console.log(message)
    }
}
})
