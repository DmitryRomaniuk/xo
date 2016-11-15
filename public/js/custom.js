/**
 * Created by Dzmitry_Ramaniuk on 01-Nov-16.
 */
'use strict';
Vue.component('my-game', {
    template: `
            <div class="game">
                <my-row class="row-0" row=0 v-on:click="" @position-click="handleClick"></my-row>
                <my-row class="row-1" row=1 v-on:click="" @position-click="handleClick"></my-row>
                <my-row class="row-2" row=2 v-on:click="" @position-click="handleClick"></my-row>
            </div>
                `,
    methods: {
        handleClick: function(position){
            this.$emit('position-click', position)
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
    mounted: function () {
        this.$root.$on('position-click', function (posClick) {
            this.arr[1][1] = "playerTwo";
            console.log(posClick.posX + " " + posClick.posY)
            if (this.posX === posClick.posX) {
                if (this.posY === posClick.posY) {
                    this.playerOne = (arr[this.posY][this.posX] === "playerOne")? true: false;
                    this.playerTwo = (arr[this.posY][this.posX] === "playerTwo")? true: false;
                    this.isChecked = (arr[this.posY][this.posX])? true: false;
                }
            }
        })
    },
    methods: {
        cx2: function(event) {
            this.arr[this.posY][this.posX] = "playerOne";
            console.log(arr);
            this.isChecked = (this.arr[this.posY][this.posX])? true: false;
            this.playerOne = (this.arr[this.posY][this.posX] === "playerOne")? true: false;
            this.playerTwo = (this.arr[this.posY][this.posX] === "playerTwo")? true: false;
            this.posClick = {posX:this.posX,posY:this.posY, arr: this.arr};
            this.$root.$emit('position-click', this.posClick)
            return arr
        }
    }
})
var arrX = new Array(3);
var arr = [Object.create(arrX),Object.create(arrX),Object.create(arrX)];
// var arr = [["playerOne","playerOne","playerTwo"],["playerOne","playerTwo","playerOne"],["playerTwo","playerOne","playerOne"]];
new Vue({
    el: '#gameClick',
    methods: {
        onClick: function(event) {
    },
    data: function() {
        return {arr}
    },
    // beforeUpdate: function () {
    //     this.$root.$on('position-click', function (posClick) {
    //         console.log('component parent')
    //         console.log(posClick.posX + " " + posClick.posY)
    //         arr[1][1] === "playerTwo";
    //         this.posClick = {posX:1,posY:1, arr: this.arr};
    //         this.$root.$emit('component-click', this.posClick)
    //         // if (this.posX === posClick.posX) {
    //         //     if (this.posY === posClick.posY) {
    //         //         this.playerOne = (arr[this.posY][this.posX] === "playerOne")? true: false;
    //         //         this.playerTwo = (arr[this.posY][this.posX] === "playerTwo")? true: false;
    //         //         this.isChecked = (arr[this.posY][this.posX])? true: false;
    //         //     }
    //         // }
    //     })
    // },
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
            <div is="my-game" @position-click="handleClick">
            </div>
        </div>
    `
})
