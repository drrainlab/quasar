webpackJsonp([17],{123:function(e,t,n){var s=n(13)(n(195),n(303),null,null);e.exports=s.exports},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{ready:!1,finished:!1}},methods:{finish:function(){this.finished=!0},reset:function(){this.$refs.stepper.reset(),this.finished=!1}}}},303:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"layout-padding"},[n("q-transition",{attrs:{name:"slide"}},[n("q-stepper",{directives:[{name:"show",rawName:"v-show",value:!e.finished,expression:"!finished"}],ref:"stepper",on:{finish:function(t){e.finish()}}},[n("q-step",{attrs:{title:"Select campaign settings"}},[e._v("\n          For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.\n        ")]),e._v(" "),n("q-step",{attrs:{title:"Create an ad group",ready:e.ready}},[e._v("\n          An ad group contains one or more ads which target a shared set of keywords.\n          "),n("br"),n("br"),e._v(" "),n("label",[n("q-toggle",{model:{value:e.ready,callback:function(t){e.ready=t},expression:"ready"}}),e._v("\n            Enable next step\n          ")],1)]),e._v(" "),n("q-step",{attrs:{title:"Create an ad"}},[e._v("\n          Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.\n        ")])],1)],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.finished,expression:"finished"}],staticClass:"items-center column justify-center full-width full-height"},[e._m(0),e._v(" "),n("button",{staticClass:"primary",on:{click:function(t){e.reset()}}},[e._v("Reset")])])],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"caption"},[n("i",{staticClass:"text-primary",staticStyle:{"font-size":"2rem","margin-right":"1rem"}},[e._v("check")]),e._v(" "),n("span",[e._v("Finished. Well done!")])])}]}}});