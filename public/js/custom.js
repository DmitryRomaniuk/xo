/**
 * Created by Dzmitry_Ramaniuk2 on 01-Nov-16.
 */
'use strict';
var data_1 = { counter_y1:0,counter_y2:0,counter_y3:0,counterx1:0,counterx2:0,counterx3:0 };
Vue.component('my-game', {
  template: `
        <div class="game">
            <my-row class="row-0" row=0 v-on:click="newClick" @position-click="handleClick"></my-row>
            <my-row class="row-1" row=1 v-on:click="" @position-click="handleClick"></my-row>
            <my-row class="row-2" row=2 v-on:click="" @position-click="handleClick"></my-row>
        </div>
            `,
            methods: {
                newClick: function () {
                    //console.log('click')
                    this.$emit('asdf','asdfsa')
                },
                handleClick: function(position){
                    //console.log(position);
                    this.$emit('position-click', position)
                    /*fetch('/', {
                        method: 'post',
                        body: JSON.stringify(posit)
                    });   */
                }
            }
})
Vue.component('my-row', {
  template: `
        <div class="row-box">
            <my-col class="colu-0" :row="row" col=0 v-on:click="" @position-click="handleClick"></my-col>
            <my-col class="colu-1" :row="row" col=1 v-on:click="" @position-click="handleClick"></my-col>
            <my-col class="colu-2" :row="row" col=2 v-on:click="" @position-click="handleClick"></my-col>
        </div>
            `,
  props: ['row'],
    methods: {
    handleClick: function(position){
        //console.log(position);
        this.$emit('position-click', position)
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
        var posX=this.col;
        var posY=this.row;
        var playerOne = true;
        var playerTwo = false;
        var isChecked, posClick;
        return {arr, isChecked, posX, posY, playerOne, playerTwo, posClick}
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
            this.playerOne = !this.playerOne;
            this.playerTwo = !this.playerTwo;
            //console.log(this.posX+ ' '+this.posY+ ' '+this.isChecked+ ' '+arr[this.posY][this.posX])
            this.posClick = {posX:this.posX,posY:this.posY};
            // console.log('emit-data');
            this.$emit('position-click', this.posClick)
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
        console.log(positX.posX);
        console.log(positX.posY);
        /*fetch('/', {
            method: 'post',
            body: JSON.stringify(posit)
        });   */
    }
}
})
