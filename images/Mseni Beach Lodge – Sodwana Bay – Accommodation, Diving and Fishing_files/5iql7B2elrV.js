if (self.CavalryLogger) { CavalryLogger.start_js(["pGATk9K"]); }

__d("BasePopoverArrowContainer.react",["BaseContextualLayerContextSizeContext","BaseContextualLayerLayerAdjustmentContext","BaseContextualLayerOrientationContext","Locale","react","stylex","testID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useMemo,k=6,l=16,m={arrow:{borderBottomColor:"d06cv69u",borderEndColor:"r7dfy6xl",borderStartColor:"cdcbzqsl",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopColor:"jgf7e1nu",borderTopWidth:"tl61u9r6",borderEndWidth:"bcctvi4p",borderBottomWidth:"gcjuebxg",borderStartWidth:"kvs4odcb",pointerEvents:"hzruof5a",position:"pmk7jnqg"},arrowAlignBottom:{bottom:"i09qtzwb"},arrowAlignEnd:{end:"n7fi1qx3"},arrowAlignHorizontalCenter:{start:"h9efg1rk"},arrowAlignStart:{start:"j9ispegn"},arrowAlignTop:{top:"kr520xx4"},arrowAlignVerticalCenter:{top:"rarmybbq"}},n={above:{marginBottom:"ama3r5zh"},below:{marginTop:"swg4t2nn"},end:{marginStart:"aoep172s"},start:{marginEnd:"r70wmyd8"}},o={above:{borderBottomColor:"j7g94pet",borderStartColor:"b74d5cxt",boxShadow:"tpe1gtqi",top:"i42f9fw1"},below:{borderEndColor:"et4y5ytx",borderTopColor:"np69z8it",bottom:"bssd97o4",boxShadow:"n4j0glhw"},end:{borderBottomColor:"j7g94pet",borderStartColor:"b74d5cxt",boxShadow:"tpe1gtqi",end:"p72yiolg"},start:{borderBottomColor:"j7g94pet",borderEndColor:"et4y5ytx",boxShadow:"jxfglsfo",start:"lu1ps8bl"}},p=d("Locale").isRTL(),q=p?"start":"end",r=p?"end":"start";function a(a,b){var d=a.arrowAlignment,e=a.children,f=a.testid,g=a.withArrow,s=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["arrowAlignment","children","testid","withArrow","xstyle"]);var t=i(c("BaseContextualLayerOrientationContext")),u=t.align,v=t.position,w=i(c("BaseContextualLayerContextSizeContext")),x=(t=i(c("BaseContextualLayerLayerAdjustmentContext")))!=null?t:0;t=n[v];var y=j(function(){var a=0,b=0,c=0,e=0,f=0;switch(v){case"above":c+=-x;e+=-7;f=45*(p?1:-1);break;case"below":c+=-x;e+=7;f=45*(p?1:-1);break;case r:c+=-6;e+=-x;f=-45;break;case q:c+=6;e+=-x;f=45;break}var g=l;if(v==="start"||v==="end"){d==="center"&&(g=w?w.height/2:0);var h=Math.max(g,l),i=h-g;u==="start"?(e+=h-k,b-=i):u==="end"&&(e-=h-k,b+=i)}else if(v==="above"||v==="below"){d==="center"&&(g=w?w.width/2:0);h=Math.max(g,l);i=h-g;u===r?(c+=h-k,a-=i):u===q&&(c-=h-k,a+=i)}return{arrowTransform:"translate("+c+"px, "+e+"px) rotate("+f+"deg)",popoverTransform:"translate("+a+"px, "+b+"px)"}},[u,d,w,x,v]),z=y.arrowTransform;y=y.popoverTransform;return h.jsxs("div",babelHelpers["extends"]({},a,{className:c("stylex")(s,g&&t),ref:b,style:g?{transform:y}:void 0},c("testID")(f),{children:[e,g?h.jsx("div",{className:c("stylex")(m.arrow,o[v],(v==="above"||v==="below")&&[u==="middle"&&m.arrowAlignHorizontalCenter,u==="start"&&m.arrowAlignStart,u==="end"&&m.arrowAlignEnd],(v==="start"||v==="end")&&[u==="middle"&&m.arrowAlignVerticalCenter,u==="start"&&m.arrowAlignTop,u==="end"&&m.arrowAlignBottom]),style:{transform:z}}):null]}))}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("ChatPluginLandingLoadQplLogger",["QuickPerformanceLogger","qpl"],(function(a,b,c,d,e,f,g){"use strict";function a(){c("QuickPerformanceLogger").markerStart(c("qpl")._(968826519,"5"))}function b(){c("QuickPerformanceLogger").markerEnd(c("qpl")._(968826519,"5"),2)}function d(){c("QuickPerformanceLogger").markerEnd(c("qpl")._(968826519,"5"),3)}g.logChatPluginLandingLoadModuleStart=a;g.logChatPluginLandingLoadModuleEndSuccess=b;g.logChatPluginLandingLoadModuleEndFail=d}),98);