/**
 * Created by Dzmitry_Ramaniuk2 on 01-Nov-16.
 */
'use strict';
var data_1 = { counter_y1:0,counter_y2:0,counter_y3:0,counterx1:0,counterx2:0,counterx3:0 };
var counter_y1,counter_y2,counter_y3,counterx1,counterx2,counterx3;
Vue.component('my-game', {
  template: `
                <div class="game">
                <my-row class="row-0" v-on:click="counter_y1 += 1"></my-row>
                <my-row class="row-1" v-on:click="counter_y2 += 1"></my-row>
                <my-row class="row-2" v-on:click="counter_y3 += 1"></my-row>
                </div>
            `,
        data: function () {
            //console.log(data);
            return data_1
        }
})
Vue.component('my-row', {
  template: `
            <div class="row-box">
                <my-col class="colu-0" v-on:click="cx1()"></my-col>
                <my-col class="colu-1" v-on:click="counterx2 += 1"></my-col>
                <my-col class="colu-2" v-on:click="counterx3 += 1"></my-col>
            </div>
            `,
    methods: {
        cx1: function(event) {
            console.log('mycx1');
        }
    },
    data: function () {
        //console.log(data);
        return data_1
    }
})
Vue.component('my-col', {
  template: `<div class="cell">
                    <div class="inner-fillet" v-on:click="counterx3 += 1">{{data_1}}
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
            </div>
            `,
        data: function () {
            //console.log(data);
            return data_1
        }
})
var arrX = [false,false,false];
var arr = [arrX,arrX,arrX];
var aX,aY;
//var arr = [[0,1,2],[3,4,5],[6,7,8]];
new Vue({
    el: '#gameClick',
    methods: {
        onClick: function(event) {
            var posX,posY;
        if (event.target.className.indexOf("colu-")>=0) {
            posX=event.target.className
            posY=event.target.parentNode.className
        }
        if (event.target.parentNode.className.indexOf("colu-")>=0) {
            posX=event.target.parentNode.className
            posY=event.target.parentNode.parentNode.className
        }
        if (event.target.parentNode.parentNode.className.indexOf("colu-")>=0) {
            posX=event.target.parentNode.parentNode.className
            posY=event.target.parentNode.parentNode.parentNode.className
        }
        posX=posX.match( /colu-\d/ig )[0];
        posY=posY.match( /row-\d/ig )[0];
        posX=posX[posX.length-1];
        posY=posY[posY.length-1];
        arr[posY][posX] = true;
        console.log({
            counterW:0,
            counter_y1: 0,
            counter_y2: 0,
            counter_y3: 0,
            counterx1: 0,
            counterx2: 0,
            counterx3: 0,
        });
        //console.log(JSON.stringify({posX:posX,posY:posY}));
        /*fetch('/', {
            method: 'post',
            body: JSON.stringify({posX:posX,posY:posY})
        });*/
    }
}
})
