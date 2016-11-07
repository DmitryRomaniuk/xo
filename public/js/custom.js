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
                    //console.log('click')
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
                        <i class="fa" aria-hidden="true"
                        v-bind:class="[isChecked ? 'busy' : 'free',playerOne? 'fa-check':'',
                        playerTwo? 'fa-circle-o':'']"></i>
                    </div>
            </div>
            `,
    props: ['row','col'],
    data: function () {
        //console.log('ROW'+this.row)
        //console.log('COL'+this.col)
        var posX=this.col;
        var posY=this.row;
        var playerOne = true;
        var playerTwo = false;
        var isChecked ;
        return {arr, isChecked, posX, posY, playerOne, playerTwo}
    },
    computed: {
    classObject: function () {
        return {
        free: !this.isChecked,
        busy: this.isChecked
        }
    }
    },
    methods: {
        cx2: function(event) {
            arr[this.posY][this.posX] = true;
            this.isChecked = arr[this.posY][this.posX];
            //console.log(arr[0][0],arr[0][1],arr[0][2],arr[1][0],arr[1][1],arr[1][2],arr[2][0],arr[2][1],arr[2][2]);
            console.log(this.posX+ ' '+this.posY+ ' '+this.isChecked+ ' '+arr[this.posY][this.posX])
            //this.posClick = {posX:this.posX,posY:this.posY};
            //console.log('emit-data');
            //this.$emit('position-click', 'data')
            return arr
        }
    }
})
var arrX = new Array(3);
var arr = [Object.create(arrX),Object.create(arrX),Object.create(arrX)];
//var arr = [[false,false,false],[false,false,false],[false,false,false]]
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
