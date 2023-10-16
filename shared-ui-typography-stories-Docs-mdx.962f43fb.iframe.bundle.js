/*! For license information please see shared-ui-typography-stories-Docs-mdx.962f43fb.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_pet_compound_component=self.webpackChunkreact_pet_compound_component||[]).push([[474,64,574],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/shared/ui/typography/stories/Docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_home_runner_work_react_ui_react_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_typography_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/typography/stories/typography.stories.tsx"),_heading_stories_tsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/ui/typography/stories/heading.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",code:"code"},(0,_home_runner_work_react_ui_react_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{of:_typography_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"typography-ui-component",children:"Typography UI component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is a set of customisabled components used to design texts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_typography_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.Demo}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"includes",children:"Includes:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Heading"})," for h1 - h6 tags"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"SubHeadings"})," for adding to headings or highlight important parts of text"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Body"})," regular text"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["In plans: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Typography for buttons, Typography for links"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"features",children:"Features:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Compound Components Pattern"})," for best reusability and simplify component configuration"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"CSS Clamp"})," for fluid typography"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"how-use",children:"How use:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"approach-1",children:"Approach 1:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use individual components with customizability in-place:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_heading_stories_tsx__WEBPACK_IMPORTED_MODULE_3__.Heading}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"approach-2",children:"Approach 2:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use components wrapped by TypographyContext"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Wrap all components by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<Typography>{...components}</Typography>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Set general props to: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<Typography {...props}>"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_typography_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.WithContext}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Set specific props / styles to any component inside context, that props has higher priority: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<Heading lvl={1} color={white} className={...}>"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_typography_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.WithContextAndPropsRedefinition})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_react_ui_react_ui_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/shared/ui/typography/stories/heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Heading$parameters,_Heading$parameters2,_home_runner_work_react_ui_react_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/typography/index.ts"),_typography_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/typography/typography.hooks.ts");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_react_ui_react_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Typography",component:___WEBPACK_IMPORTED_MODULE_1__.ZT.Heading,parameters:{layout:"fullscreen"},args:_objectSpread(_objectSpread({},_typography_hooks__WEBPACK_IMPORTED_MODULE_2__.uQ),{},{children:"Awesome header",lvl:1})};var Heading={};Heading.parameters=_objectSpread(_objectSpread({},Heading.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Heading$parameters=Heading.parameters)||void 0===_Heading$parameters?void 0:_Heading$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Heading$parameters2=Heading.parameters)||void 0===_Heading$parameters2||null===(_Heading$parameters2=_Heading$parameters2.docs)||void 0===_Heading$parameters2?void 0:_Heading$parameters2.source)})})},"./src/shared/ui/typography/stories/typography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,WithContext:()=>WithContext,WithContextAndPropsRedefinition:()=>WithContextAndPropsRedefinition,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Demo$parameters,_Demo$parameters2,_WithContext$paramete,_WithContext$paramete2,_WithContextAndPropsR,_WithContextAndPropsR2,_home_runner_work_react_ui_react_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/typography/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_react_ui_react_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Heading=___WEBPACK_IMPORTED_MODULE_2__.ZT.Heading,SubHeading=___WEBPACK_IMPORTED_MODULE_2__.ZT.SubHeading,Body=___WEBPACK_IMPORTED_MODULE_2__.ZT.Body;const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Typography",component:___WEBPACK_IMPORTED_MODULE_2__.ZT,parameters:{layout:"fullscreen"}};var Demo={parameters:{controls:{exclude:["children","className"]}},args:{children:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(Heading,{lvl:1},"Heading 1"),__jsx(Heading,{lvl:2},"Heading 2"),__jsx(Heading,{lvl:3},"Heading 3"),__jsx(Heading,{lvl:4},"Heading 4"),__jsx(Heading,{lvl:5},"Heading 5"),__jsx(Heading,{lvl:6},"Heading 6"),__jsx(SubHeading,{variant:"primary"},"Subheading 1"),__jsx(SubHeading,{variant:"secondary"},"Subheading 2"),__jsx(Body,null,"Body text")),align:"left",color:"black",cropLineHeight:!1,font:"nunito",transform:"none"}},WithContext={args:{align:"center",cropLineHeight:!0},render:function render(args){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.ZT,args,__jsx(FlexContainer,null,__jsx(Heading,{lvl:1},"Awesome Header"),__jsx(SubHeading,{variant:"primary"},"Some additional info"),__jsx(Body,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente iusto labore ipsam sint vitae, odit iure cum voluptate laudantium velit accusamus itaque. Architecto exercitationem porro velit illum? Voluptates, voluptatum.")))}},WithContextAndPropsRedefinition={args:{align:"center",cropLineHeight:!0},render:function render(args){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.ZT,args,__jsx(FlexContainer,null,__jsx(Heading,{lvl:1},"Awesome Header"),__jsx(SubHeading,{variant:"primary"},"Some additional info"),__jsx(SubHeading,{variant:"secondary",transform:"capitalize",align:"right",color:"error",font:"rubik"},"I'm text with specific props and I'm not affected by any context props"),__jsx(Heading,{lvl:6,align:"center",color:"waterBlue"},"I has only fixed align and color"),__jsx(Body,null,"I'm text without specific props")))}},FlexContainer=function FlexContainer(_ref){var children=_ref.children;return __jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",padding:"4rem 0"}},children)};FlexContainer.displayName="FlexContainer",Demo.parameters=_objectSpread(_objectSpread({},Demo.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Demo$parameters=Demo.parameters)||void 0===_Demo$parameters?void 0:_Demo$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  parameters: {\n    controls: {\n      exclude: ['children', 'className']\n    }\n  },\n  args: {\n    children: <>\n        <Heading lvl={1}>Heading 1</Heading>\n        <Heading lvl={2}>Heading 2</Heading>\n        <Heading lvl={3}>Heading 3</Heading>\n        <Heading lvl={4}>Heading 4</Heading>\n        <Heading lvl={5}>Heading 5</Heading>\n        <Heading lvl={6}>Heading 6</Heading>\n        <SubHeading variant=\"primary\">Subheading 1</SubHeading>\n        <SubHeading variant=\"secondary\">Subheading 2</SubHeading>\n        <Body>Body text</Body>\n      </>,\n    align: 'left',\n    color: 'black',\n    cropLineHeight: false,\n    font: 'nunito',\n    transform: 'none'\n  }\n}"},null===(_Demo$parameters2=Demo.parameters)||void 0===_Demo$parameters2||null===(_Demo$parameters2=_Demo$parameters2.docs)||void 0===_Demo$parameters2?void 0:_Demo$parameters2.source)})}),WithContext.parameters=_objectSpread(_objectSpread({},WithContext.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithContext$paramete=WithContext.parameters)||void 0===_WithContext$paramete?void 0:_WithContext$paramete.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    align: 'center',\n    cropLineHeight: true\n  },\n  render: args => <Typography {...args}>\n      <FlexContainer>\n        <Heading lvl={1}>Awesome Header</Heading>\n        <SubHeading variant=\"primary\">Some additional info</SubHeading>\n        <Body>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi\n          sapiente iusto labore ipsam sint vitae, odit iure cum voluptate\n          laudantium velit accusamus itaque. Architecto exercitationem porro\n          velit illum? Voluptates, voluptatum.\n        </Body>\n      </FlexContainer>\n    </Typography>\n}"},null===(_WithContext$paramete2=WithContext.parameters)||void 0===_WithContext$paramete2||null===(_WithContext$paramete2=_WithContext$paramete2.docs)||void 0===_WithContext$paramete2?void 0:_WithContext$paramete2.source)})}),WithContextAndPropsRedefinition.parameters=_objectSpread(_objectSpread({},WithContextAndPropsRedefinition.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithContextAndPropsR=WithContextAndPropsRedefinition.parameters)||void 0===_WithContextAndPropsR?void 0:_WithContextAndPropsR.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    align: \'center\',\n    cropLineHeight: true\n  },\n  render: args => <Typography {...args}>\n      <FlexContainer>\n        <Heading lvl={1}>Awesome Header</Heading>\n        <SubHeading variant="primary">Some additional info</SubHeading>\n        <SubHeading variant="secondary" transform="capitalize" align="right" color="error" font="rubik">\n          I&apos;m text with specific props and I&apos;m not affected by any\n          context props\n        </SubHeading>\n        <Heading lvl={6} align="center" color="waterBlue">\n          I has only fixed align and color\n        </Heading>\n        <Body>I&apos;m text without specific props</Body>\n      </FlexContainer>\n    </Typography>\n}'},null===(_WithContextAndPropsR2=WithContextAndPropsRedefinition.parameters)||void 0===_WithContextAndPropsR2||null===(_WithContextAndPropsR2=_WithContextAndPropsR2.docs)||void 0===_WithContextAndPropsR2?void 0:_WithContextAndPropsR2.source)})})},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);