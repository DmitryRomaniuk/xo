/**
 * Created by Dzmitry_Ramaniuk on 01-Nov-16.
 */
'use strict';
Vue.component('my-game', {
    template: `
            <div class="game">
                <my-row class="row-0" row=0 v-on:click="" :arr="this.arr" @position-click="handleClick"></my-row>
                <my-row class="row-1" row=1 v-on:click="" :arr="this.arr" @position-click="handleClick"></my-row>
                <my-row class="row-2" row=2 v-on:click="" :arr="this.arr" @position-click="handleClick"></my-row>
            </div>
                `,
    props: ['arr'],
    data: function() {
        console.log(this.arr);
    },
    methods: {
        handleClick: function(position){
            this.$emit('position-click', position)
        }
    }
})
Vue.component('my-row', {
    template: `
            <div class="row-box">
                <my-col class="colu-0" :row="row" :arr="0" col=0 v-on:click="" @position-click="handleClick"></my-col>
                <my-col class="colu-1" :row="row" :arr="0" col=1 v-on:click="" @position-click="handleClick"></my-col>
                <my-col class="colu-2" :row="row" :arr="0" col=2 v-on:click="" @position-click="handleClick"></my-col>
            </div>
                `,
    props: ['row','arr'],
    methods: {
    handleClick: function(position){
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
    props: ['row','col','arr'],
    data: function () {
        var posX=this.col;
        var posY=this.row;
        var arrX = new Array(3);
        var arr = [Object.create(arrX),Object.create(arrX),Object.create(arrX)];
        var playerOne = (arr[posY][posX] === "playerOne")? true: false;
        var playerTwo = (arr[posY][posX] === "playerTwo")? true: false;
        var isChecked = (arr[posY][posX])? true: false;
        var posClick;
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
            arr[this.posY][this.posX] = "playerOne";
            this.isChecked = arr[this.posY][this.posX];
            // this.playerOne = !this.playerOne;
            // this.playerTwo = !this.playerTwo;
            //console.log(this.posX+ ' '+this.posY+ ' '+this.isChecked+ ' '+arr[this.posY][this.posX])
            this.posClick = {posX:this.posX,posY:this.posY};
            // console.log('emit-data');
            this.$emit('position-click', this.posClick)
            return arr
        }
    }
})
// var arr = [["playerOne","playerOne","playerTwo"],["playerOne","playerTwo","playerOne"],["playerTwo","playerOne","playerOne"]];
new Vue({
    el: '#gameClick',
    data: function() {
        var arrX = new Array(3);
        var arr = [Object.create(arrX),Object.create(arrX),Object.create(arrX)];
        console.log(this.arr);
    },
    methods: {
        onClick: function(event) {
    },
    handleClick: function(positX){
        console.log(positX.posX);
        console.log(positX.posY);
        //arr[0][0] = "playerTwo";

        /*fetch('/', {
            method: 'post',
            body: JSON.stringify(posit)
        });   */
        }
    },
    template: `
        <div class="wrap-game" id="gameClick">
            <div is="my-game" @position-click="handleClick" :arr="arr">
            </div>
        </div>
    `
})
