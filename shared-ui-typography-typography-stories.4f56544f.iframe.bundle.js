"use strict";(self.webpackChunkreact_shared=self.webpackChunkreact_shared||[]).push([[161],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/shared/ui/typography/typography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,DemoWithContext:()=>DemoWithContext,DemoWithContextAndPropsRedefinition:()=>DemoWithContextAndPropsRedefinition,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Demo$parameters,_Demo$parameters2,_DemoWithContext$para,_DemoWithContext$para2,_DemoWithContextAndPr,_DemoWithContextAndPr2,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/typography/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Heading=_index__WEBPACK_IMPORTED_MODULE_2__.ZT.Heading,SubHeading=_index__WEBPACK_IMPORTED_MODULE_2__.ZT.SubHeading,Body=_index__WEBPACK_IMPORTED_MODULE_2__.ZT.Body;const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_2__.ZT,parameters:{layout:"fullscreen"}};var Demo={parameters:{controls:{exclude:["children","className"]}},tags:["isHidden"],args:{children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(Heading,{lvl:1},"Heading 1"),__jsx(Heading,{lvl:2},"Heading 2"),__jsx(Heading,{lvl:3},"Heading 3"),__jsx(Heading,{lvl:4},"Heading 4"),__jsx(Heading,{lvl:5},"Heading 5"),__jsx(Heading,{lvl:6},"Heading 6"),__jsx(SubHeading,{variant:"primary"},"Subheading 1"),__jsx(SubHeading,{variant:"secondary"},"Subheading 2"),__jsx(Body,null,"Body text")),align:"left",color:"black",cropLineHeight:!1,font:"nunito",transform:"none"}},DemoWithContext={args:{align:"center",cropLineHeight:!0},tags:["isHidden"],render:function render(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__.ZT,args,__jsx(FlexContainer,null,__jsx(Heading,{lvl:1},"Awesome Header"),__jsx(SubHeading,{variant:"primary"},"Some additional info"),__jsx(Body,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente iusto labore ipsam sint vitae, odit iure cum voluptate laudantium velit accusamus itaque. Architecto exercitationem porro velit illum? Voluptates, voluptatum.")))}},DemoWithContextAndPropsRedefinition={args:{align:"center",cropLineHeight:!0},tags:["isHidden"],render:function render(args){return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__.ZT,(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args,{align:"left"}),__jsx(FlexContainer,null,__jsx(SubHeading,{variant:"secondary",transform:"capitalize",align:"right",color:"error",font:"rubik"},"I'm text with specific props and I'm not affected by any context props"),__jsx(Heading,{lvl:6,align:"center",color:"success"},"I'm has only fixed align and color"),__jsx(Body,null,"I'm text without specific props")))}},FlexContainer=function FlexContainer(_ref){var children=_ref.children;return __jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"4rem 0"}},children)};FlexContainer.displayName="FlexContainer",Demo.parameters=_objectSpread(_objectSpread({},Demo.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Demo$parameters=Demo.parameters)||void 0===_Demo$parameters?void 0:_Demo$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  parameters: {\n    controls: {\n      exclude: ['children', 'className']\n    }\n  },\n  tags: ['isHidden'],\n  args: {\n    children: <>\n        <Heading lvl={1}>Heading 1</Heading>\n        <Heading lvl={2}>Heading 2</Heading>\n        <Heading lvl={3}>Heading 3</Heading>\n        <Heading lvl={4}>Heading 4</Heading>\n        <Heading lvl={5}>Heading 5</Heading>\n        <Heading lvl={6}>Heading 6</Heading>\n        <SubHeading variant=\"primary\">Subheading 1</SubHeading>\n        <SubHeading variant=\"secondary\">Subheading 2</SubHeading>\n        <Body>Body text</Body>\n      </>,\n    align: 'left',\n    color: 'black',\n    cropLineHeight: false,\n    font: 'nunito',\n    transform: 'none'\n  }\n}"},null===(_Demo$parameters2=Demo.parameters)||void 0===_Demo$parameters2||null===(_Demo$parameters2=_Demo$parameters2.docs)||void 0===_Demo$parameters2?void 0:_Demo$parameters2.source)})}),DemoWithContext.parameters=_objectSpread(_objectSpread({},DemoWithContext.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DemoWithContext$para=DemoWithContext.parameters)||void 0===_DemoWithContext$para?void 0:_DemoWithContext$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    align: 'center',\n    cropLineHeight: true\n  },\n  tags: ['isHidden'],\n  render: args => <Typography {...args}>\n      <FlexContainer>\n        <Heading lvl={1}>Awesome Header</Heading>\n        <SubHeading variant=\"primary\">Some additional info</SubHeading>\n        <Body>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi\n          sapiente iusto labore ipsam sint vitae, odit iure cum voluptate\n          laudantium velit accusamus itaque. Architecto exercitationem porro\n          velit illum? Voluptates, voluptatum.\n        </Body>\n      </FlexContainer>\n    </Typography>\n}"},null===(_DemoWithContext$para2=DemoWithContext.parameters)||void 0===_DemoWithContext$para2||null===(_DemoWithContext$para2=_DemoWithContext$para2.docs)||void 0===_DemoWithContext$para2?void 0:_DemoWithContext$para2.source)})}),DemoWithContextAndPropsRedefinition.parameters=_objectSpread(_objectSpread({},DemoWithContextAndPropsRedefinition.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DemoWithContextAndPr=DemoWithContextAndPropsRedefinition.parameters)||void 0===_DemoWithContextAndPr?void 0:_DemoWithContextAndPr.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    align: \'center\',\n    cropLineHeight: true\n  },\n  tags: [\'isHidden\'],\n  render: args => <Typography {...args} align={\'left\'}>\n      <FlexContainer>\n        <SubHeading variant="secondary" transform="capitalize" align="right" color="error" font="rubik">\n          I&apos;m text with specific props and I&apos;m not affected by any\n          context props\n        </SubHeading>\n        <Heading lvl={6} align="center" color="success">\n          I&apos;m has only fixed align and color\n        </Heading>\n        <Body>I&apos;m text without specific props</Body>\n      </FlexContainer>\n    </Typography>\n}'},null===(_DemoWithContextAndPr2=DemoWithContextAndPropsRedefinition.parameters)||void 0===_DemoWithContextAndPr2||null===(_DemoWithContextAndPr2=_DemoWithContextAndPr2.docs)||void 0===_DemoWithContextAndPr2?void 0:_DemoWithContextAndPr2.source)})})}}]);