"use strict";(self.webpackChunkreact_pet_compound_component=self.webpackChunkreact_pet_compound_component||[]).push([[417],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/shared/ui/typography/stories/body.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Body:()=>Body,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Body$parameters,_Body$parameters2,_home_runner_work_react_ui_react_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/typography/index.ts"),_typography_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/typography/typography.hooks.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_react_ui_react_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Typography",component:___WEBPACK_IMPORTED_MODULE_1__.ZT.Body,parameters:{layout:"fullscreen"},args:_objectSpread(_objectSpread({},_typography_hooks__WEBPACK_IMPORTED_MODULE_2__.lE),{},{children:"Awesome body text"})};var Body={};Body.parameters=_objectSpread(_objectSpread({},Body.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Body$parameters=Body.parameters)||void 0===_Body$parameters?void 0:_Body$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Body$parameters2=Body.parameters)||void 0===_Body$parameters2||null===(_Body$parameters2=_Body$parameters2.docs)||void 0===_Body$parameters2?void 0:_Body$parameters2.source)})})},"./src/shared/ui/typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{ZT:()=>Typography,Z3:()=>TypographyContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),typography_module=__webpack_require__("./src/shared/ui/typography/typography.module.scss"),typography_hooks=__webpack_require__("./src/shared/ui/typography/typography.hooks.ts"),_excluded=["children","className"],__jsx=react.createElement,TypographyContext=(0,react.createContext)({}),TypographyRoot=function TypographyRoot(_ref){var children=_ref.children,className=_ref.className,contextProps=_objectWithoutProperties(_ref,_excluded);return __jsx(TypographyContext.Provider,{value:contextProps},__jsx("div",{className},children))};TypographyRoot.displayName="TypographyRoot";var Heading=function Heading(props){var _useHeadingProps2=_slicedToArray((0,typography_hooks.dy)(props),2),_useHeadingProps2$=_useHeadingProps2[0],lvl=_useHeadingProps2$.lvl,children=_useHeadingProps2$.children,universalStyles=_useHeadingProps2[1],HeadingTag="h".concat(lvl);return __jsx(HeadingTag,{className:(0,clsx.Z)(typography_module.Z.heading,typography_module.Z["heading_".concat(lvl)],universalStyles)},children)};Heading.displayName="Heading";var SubHeading=function SubHeading(props){var _useSubHeadingProps2=_slicedToArray((0,typography_hooks._A)(props),2),_useSubHeadingProps2$=_useSubHeadingProps2[0],children=_useSubHeadingProps2$.children,variant=_useSubHeadingProps2$.variant,universalStyles=_useSubHeadingProps2[1];return __jsx("p",{className:(0,clsx.Z)(typography_module.Z.subHeading,typography_module.Z["subHeading_".concat(variant)],universalStyles)},children)};SubHeading.displayName="SubHeading";var Body=function Body(props){var _useBodyProps2=_slicedToArray((0,typography_hooks.qo)(props),2),children=_useBodyProps2[0].children,universalStyles=_useBodyProps2[1];return __jsx("p",{className:(0,clsx.Z)(typography_module.Z.body,universalStyles)},children)};Body.displayName="Body";var Typography=Object.assign(TypographyRoot,{Heading,SubHeading,Body});Heading.__docgenInfo={description:"",methods:[],displayName:"Heading"},SubHeading.__docgenInfo={description:"",methods:[],displayName:"SubHeading"},Body.__docgenInfo={description:"",methods:[],displayName:"Body"},TypographyRoot.__docgenInfo={description:"",methods:[],displayName:"TypographyRoot"};try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{lvl:{defaultValue:null,description:"",name:"lvl",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"white"'},{value:'"waterBlue"'},{value:'"success"'},{value:'"error"'}]}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"enum",value:[{value:'"nunito"'},{value:'"rubik"'}]}},cropLineHeight:{defaultValue:null,description:"",name:"cropLineHeight",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/typography/typography.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/shared/ui/typography/typography.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}try{SubHeading.displayName="SubHeading",SubHeading.__docgenInfo={description:"",displayName:"SubHeading",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"white"'},{value:'"waterBlue"'},{value:'"success"'},{value:'"error"'}]}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"enum",value:[{value:'"nunito"'},{value:'"rubik"'}]}},cropLineHeight:{defaultValue:null,description:"",name:"cropLineHeight",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/typography/typography.tsx#SubHeading"]={docgenInfo:SubHeading.__docgenInfo,name:"SubHeading",path:"src/shared/ui/typography/typography.tsx#SubHeading"})}catch(__react_docgen_typescript_loader_error){}try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"white"'},{value:'"waterBlue"'},{value:'"success"'},{value:'"error"'}]}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"enum",value:[{value:'"nunito"'},{value:'"rubik"'}]}},cropLineHeight:{defaultValue:null,description:"",name:"cropLineHeight",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/typography/typography.tsx#Body"]={docgenInfo:Body.__docgenInfo,name:"Body",path:"src/shared/ui/typography/typography.tsx#Body"})}catch(__react_docgen_typescript_loader_error){}try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"white"'},{value:'"waterBlue"'},{value:'"success"'},{value:'"error"'}]}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"enum",value:[{value:'"nunito"'},{value:'"rubik"'}]}},cropLineHeight:{defaultValue:null,description:"",name:"cropLineHeight",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/typography/typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/shared/ui/typography/typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/typography/typography.hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pp:()=>subHeaderDefaultProps,_A:()=>useSubHeadingProps,dy:()=>useHeadingProps,lE:()=>bodyDefaultProps,qo:()=>useBodyProps,uQ:()=>headingDefaultProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/typography/index.ts"),_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/typography/typography.module.scss"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),usePropsMerge=function usePropsMerge(componentProps,defaultProps){var contextProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.Z3),mergedProps=Object.assign({},defaultProps,contextProps,componentProps),align=mergedProps.align,transform=mergedProps.transform,color=mergedProps.color,cropLineHeight=mergedProps.cropLineHeight,font=mergedProps.font,className=mergedProps.className;return[mergedProps,(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(font&&_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z["font_".concat(font)],align&&_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z["align_".concat(align)],transform&&_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z["transform_".concat(transform)],color&&_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z["color_".concat(color)],cropLineHeight&&_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__.Z.cropLineHeight,className)]},headingDefaultProps={align:"center",color:"black",transform:"uppercase",cropLineHeight:!1,font:"nunito"},useHeadingProps=function useHeadingProps(headingProps){return usePropsMerge(headingProps,headingDefaultProps)},subHeaderDefaultProps={align:"center",color:"black",transform:"uppercase",cropLineHeight:!1,font:"nunito"},useSubHeadingProps=function useSubHeadingProps(headingProps){return usePropsMerge(headingProps,subHeaderDefaultProps)},bodyDefaultProps={align:"left",color:"black",transform:"none",cropLineHeight:!1,font:"rubik"},useBodyProps=function useBodyProps(headingProps){return usePropsMerge(headingProps,bodyDefaultProps)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/typography/typography.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.typography_font_nunito__bE7A3{font-family:var(--nunitoFont)}.typography_font_nunito__bE7A3.typography_cropLineHeight__r_kxr::before,.typography_font_nunito__bE7A3.typography_cropLineHeight__r_kxr::after{display:block;width:0;height:0;content:""}.typography_font_nunito__bE7A3.typography_cropLineHeight__r_kxr::before{margin-bottom:calc(-0.25em)}.typography_font_nunito__bE7A3.typography_cropLineHeight__r_kxr::after{margin-top:calc(-0.3125em)}.typography_font_rubik__uJruL{font-family:var(--rubikFont)}.typography_font_rubik__uJruL.typography_cropLineHeight__r_kxr::before,.typography_font_rubik__uJruL.typography_cropLineHeight__r_kxr::after{display:block;width:0;height:0;content:""}.typography_font_rubik__uJruL.typography_cropLineHeight__r_kxr::before{margin-bottom:calc(-0.25em)}.typography_font_rubik__uJruL.typography_cropLineHeight__r_kxr::after{margin-top:calc(-0.3125em)}.typography_heading__70njd{margin:0;line-height:1.3}.typography_heading_1___QQA4{font-size:clamp(3.4331rem,2.529rem + 4.5207vw,6.0325rem);font-weight:300}.typography_heading_2__KeneC{font-size:clamp(2.7469rem,2.1706rem + 2.8815vw,4.4037rem);font-weight:300}.typography_heading_3__hBm_x{font-size:clamp(2.1975rem,1.8438rem + 1.7685vw,3.2144rem);font-weight:300}.typography_heading_4__t5niF{font-size:clamp(1.7581rem,1.5536rem + 1.0228vw,2.3463rem);font-weight:400}.typography_heading_5__FYpyF{font-size:clamp(1.4063rem,1.2997rem + .5326vw,1.7125rem);font-weight:400}.typography_heading_6__1_HUi{font-size:clamp(1.125rem,1.0815rem + .2174vw,1.25rem);font-weight:500}.typography_subHeading__z_0IN{margin:0;line-height:1.3}.typography_subHeading_primary___a7eQ{font-size:clamp(1.4063rem,1.2997rem + .5326vw,1.7125rem);font-weight:300}.typography_subHeading_secondary__DZ8Is{font-size:clamp(1.125rem,1.0815rem + .2174vw,1.25rem);font-weight:600}.typography_body__oqOeC{margin:0;font-size:1rem;line-height:1.4}.typography_color_black__WFdLB{color:#070606}.typography_color_white__tVtQD{color:#f8fcff}.typography_color_waterBlue__UJekU{color:#256d7b}.typography_color_success__nwmRG{color:#1d8750}.typography_color_error__leJFM{color:#c32323}.typography_align_left__2CfQK{text-align:left}.typography_align_center__REIWz{text-align:center}.typography_align_right__lkhAR{text-align:right}.typography_transform_uppercase__4fjW_{text-transform:uppercase}.typography_transform_lowercase__JEAy7{text-transform:lowercase}.typography_transform_capitalize__JU8yJ{text-transform:capitalize}.typography_transform_none__j953E{text-transform:none}',"",{version:3,sources:["webpack://./src/shared/ui/typography/typography.module.scss","webpack://./src/global/styles/variables.scss","webpack://./src/shared/utils/css/crop-line-height.scss"],names:[],mappings:"AA8BE,+BAZA,6BCRW,CCFX,+IAEE,aAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CAGF,wEACE,2BAAA,CAGF,uEACE,0BAAA,CFaF,8BA5BA,4BCKU,CCHV,6IAEE,aAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CAGF,uEACE,2BAAA,CAGF,sEACE,0BAAA,CFoBJ,2BACE,QAAA,CACA,eAAA,CAEA,6BACE,wDAAA,CACA,eAAA,CAGF,6BACE,yDAAA,CACA,eAAA,CAGF,6BACE,yDAAA,CACA,eAAA,CAGF,6BACE,yDAAA,CACA,eAAA,CAGF,6BACE,wDAAA,CACA,eAAA,CAGF,6BACE,qDAAA,CACA,eAAA,CAIJ,8BACE,QAAA,CACA,eAAA,CAEA,sCACE,wDAAA,CACA,eAAA,CAGF,wCACE,qDAAA,CACA,eAAA,CAIJ,wBACE,QAAA,CACA,cAAA,CACA,eAAA,CAMA,+BACE,aCjGS,CDoGX,+BACE,aCtGS,CDyGX,mCACE,aCxGa,CD2Gf,iCACE,aC3GW,CD8Gb,+BACE,aC9GS,CDmHX,8BACE,eAAA,CAGF,gCACE,iBAAA,CAGF,+BACE,gBAAA,CAKF,uCACE,wBAAA,CAGF,uCACE,wBAAA,CAGF,wCACE,yBAAA,CAGF,kCACE,mBAAA",sourcesContent:["@import '/src/global/styles/variables';\n@import '/src/shared/utils/css/crop-line-height';\n\n// Fonts\n\n@mixin rubikFont {\n  font-family: $fontRubik;\n\n  &.cropLineHeight {\n    $topCrop: 4;\n    $bottomCrop: 5;\n    $cropFontSize: 16;\n\n    @include textCrop($cropFontSize, $topCrop, $bottomCrop);\n  }\n}\n\n@mixin nunitoFont {\n  font-family: $fontNunito;\n\n  &.cropLineHeight {\n    $topCrop: 4;\n    $bottomCrop: 5;\n    $cropFontSize: 16;\n\n    @include textCrop($cropFontSize, $topCrop, $bottomCrop);\n  }\n}\n\n.font {\n  &_nunito {\n    @include nunitoFont;\n  }\n\n  &_rubik {\n    @include rubikFont;\n  }\n}\n\n// Components styles\n\n.heading {\n  margin: 0;\n  line-height: 1.3;\n\n  &_1 {\n    font-size: clamp(3.4331rem, 2.529rem + 4.5207vw, 6.0325rem);\n    font-weight: 300;\n  }\n\n  &_2 {\n    font-size: clamp(2.7469rem, 2.1706rem + 2.8815vw, 4.4037rem);\n    font-weight: 300;\n  }\n\n  &_3 {\n    font-size: clamp(2.1975rem, 1.8438rem + 1.7685vw, 3.2144rem);\n    font-weight: 300;\n  }\n\n  &_4 {\n    font-size: clamp(1.7581rem, 1.5536rem + 1.0228vw, 2.3463rem);\n    font-weight: 400;\n  }\n\n  &_5 {\n    font-size: clamp(1.4063rem, 1.2997rem + 0.5326vw, 1.7125rem);\n    font-weight: 400;\n  }\n\n  &_6 {\n    font-size: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);\n    font-weight: 500;\n  }\n}\n\n.subHeading {\n  margin: 0;\n  line-height: 1.3;\n\n  &_primary {\n    font-size: clamp(1.4063rem, 1.2997rem + 0.5326vw, 1.7125rem);\n    font-weight: 300;\n  }\n\n  &_secondary {\n    font-size: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);\n    font-weight: 600;\n  }\n}\n\n.body {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n\n// Universal styling\n\n.color {\n  &_black {\n    color: $colorBlack;\n  }\n\n  &_white {\n    color: $colorWhite;\n  }\n\n  &_waterBlue {\n    color: $colorWaterBlue;\n  }\n\n  &_success {\n    color: $colorSuccess;\n  }\n\n  &_error {\n    color: $colorError;\n  }\n}\n\n.align {\n  &_left {\n    text-align: left;\n  }\n\n  &_center {\n    text-align: center;\n  }\n\n  &_right {\n    text-align: right;\n  }\n}\n\n.transform {\n  &_uppercase {\n    text-transform: uppercase;\n  }\n\n  &_lowercase {\n    text-transform: lowercase;\n  }\n\n  &_capitalize {\n    text-transform: capitalize;\n  }\n\n  &_none {\n    text-transform: none;\n  }\n}\n","// TODO: Fix next line\n// /* stylelint-disable custom-property-pattern */\n// Colors\n$colorWhite: #f8fcff;\n$colorBlack: #070606;\n$colorWaterBlue: #256d7b;\n$colorSuccess: #1d8750;\n$colorError: #c32323;\n\n// Fonts\n$fontNunito: var(--nunitoFont);\n$fontRubik: var(--rubikFont);\n","// Text Line Height Crop Util\n// http://text-crop.eightshapes.com/\n// Добавляет отрицаельные отступы перед и после текстового блока, чтобы компенсировать отступы при line-height > 1 : это позволяет позиционировать следующий элемент на странице не от края этого блока, а от реальной границы текстовых символов внутри него.\n\n@mixin textCrop($crop-font-size, $top-crop, $bottom-crop) {\n  $dynamicTopCrop: max(($top-crop), 0) / $crop-font-size;\n  $dynamicBottomCrop: max($bottom-crop, 0) / $crop-font-size;\n\n  &::before,\n  &::after {\n    display: block;\n    width: 0;\n    height: 0;\n    content: '';\n  }\n\n  &::before {\n    margin-bottom: calc(-#{$dynamicTopCrop}em);\n  }\n\n  &::after {\n    margin-top: calc(-#{$dynamicBottomCrop}em);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={font_nunito:"typography_font_nunito__bE7A3",cropLineHeight:"typography_cropLineHeight__r_kxr",font_rubik:"typography_font_rubik__uJruL",heading:"typography_heading__70njd",heading_1:"typography_heading_1___QQA4",heading_2:"typography_heading_2__KeneC",heading_3:"typography_heading_3__hBm_x",heading_4:"typography_heading_4__t5niF",heading_5:"typography_heading_5__FYpyF",heading_6:"typography_heading_6__1_HUi",subHeading:"typography_subHeading__z_0IN",subHeading_primary:"typography_subHeading_primary___a7eQ",subHeading_secondary:"typography_subHeading_secondary__DZ8Is",body:"typography_body__oqOeC",color_black:"typography_color_black__WFdLB",color_white:"typography_color_white__tVtQD",color_waterBlue:"typography_color_waterBlue__UJekU",color_success:"typography_color_success__nwmRG",color_error:"typography_color_error__leJFM",align_left:"typography_align_left__2CfQK",align_center:"typography_align_center__REIWz",align_right:"typography_align_right__lkhAR",transform_uppercase:"typography_transform_uppercase__4fjW_",transform_lowercase:"typography_transform_lowercase__JEAy7",transform_capitalize:"typography_transform_capitalize__JU8yJ",transform_none:"typography_transform_none__j953E"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/ui/typography/typography.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/typography/typography.module.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_13_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_13_use_4_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);