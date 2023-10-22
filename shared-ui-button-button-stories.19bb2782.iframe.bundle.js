"use strict";(self.webpackChunkreact_shared=self.webpackChunkreact_shared||[]).push([[738],{"./src/shared/ui/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>button_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),typography=__webpack_require__("./src/shared/ui/typography/index.ts"),button_base=__webpack_require__("./src/shared/ui/button-base/button-base.tsx"),propsStyler=__webpack_require__("./src/shared/utils/css/propsStyler.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/button/button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(button_module.Z,options);const button_button_module=button_module.Z&&button_module.Z.locals?button_module.Z.locals:void 0;var _Default$parameters,_Default$parameters2,__jsx=react.createElement,buttonStyles=(0,propsStyler.N)(button_button_module),Button=(0,react.forwardRef)((function(props,ref){var children=props.children,className=props.className,_props$variant=props.variant,buttonClassNames=buttonStyles("button",{className,variant:void 0===_props$variant?"regular":_props$variant});return __jsx(button_base.X,{onClick:function onClick(){},className:buttonClassNames,ref},__jsx(typography.ZT.Body,{as:"span",color:"inherit",cropLineHeight:!1,transform:"none"},children))}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button"};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"regular"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const button_stories={component:Button,parameters:{layout:"fullscreen"}};var Default={args:{children:"Button"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/shared/ui/button-base/button-base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>ButtonBase});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),link_base=__webpack_require__("./src/shared/ui/link-base/link-base.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_base_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/button-base/button-base.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(button_base_module.Z,options);const button_base_button_base_module=button_base_module.Z&&button_base_module.Z.locals?button_base_module.Z.locals:void 0;var propsStyler=__webpack_require__("./src/shared/utils/css/propsStyler.ts"),_excluded=["children","className"],__jsx=react.createElement,buttonBaseStyles=(0,propsStyler.N)(button_base_button_base_module),ButtonBase=(0,react.forwardRef)((function(props,ref){var children=props.children,className=props.className,rest=(0,objectWithoutProperties.Z)(props,_excluded),buttonBaseClassName=buttonBaseStyles("buttonBase",{className});return function isButton(props){return"onClick"in props||"type"in props}(rest)?__jsx("button",(0,esm_extends.Z)({},rest,{className:buttonBaseClassName,ref}),children):function isLink(props){return"href"in props&&void 0!==props.href}(rest)?__jsx(link_base.w,(0,esm_extends.Z)({},rest,{className:buttonBaseClassName,ref}),children):void 0}));ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",methods:[],displayName:"ButtonBase"};try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!1,type:{name:"(Url & string)"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement> | MouseEventHandler<HTMLButtonElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement> | TouchEventHandler<HTMLButtonElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"(MouseEventHandler<HTMLButtonElement> & (() => void)) | (MouseEventHandler<HTMLButtonElement> & (() => void)) | (MouseEventHandler<...> & (() => void))"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},externalLink:{defaultValue:null,description:"",name:"externalLink",required:!1,type:{name:"true"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/button-base/button-base.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"src/shared/ui/button-base/button-base.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/link-base/link-base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>LinkBase});var _home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_excluded=["externalLink","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LinkBase=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(props,ref){if(function isExternalLink(props){return"externalLink"in props}(props)){props.externalLink;var children=props.children,rest=(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded);return __jsx("a",(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},rest,{ref}),children)}if(function isNextLink(props){return!("externalLink"in props)}(props))return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},props,{ref}))}));LinkBase.displayName="Link",LinkBase.__docgenInfo={description:"",methods:[],displayName:"Link"};try{LinkBase.displayName="Link",LinkBase.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!1,type:{name:"Url"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},externalLink:{defaultValue:null,description:"",name:"externalLink",required:!1,type:{name:"true"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/link-base/link-base.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/shared/ui/link-base/link-base.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/button-base/button-base.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-base_buttonBase__ceEYY{cursor:pointer;padding:0;font:inherit;color:inherit;text-decoration:none;white-space:nowrap;appearance:none;background-color:rgba(0,0,0,0);border:none;outline:none}","",{version:3,sources:["webpack://./src/shared/ui/button-base/button-base.module.scss"],names:[],mappings:"AAAA,+BACE,cAAA,CAEA,SAAA,CAEA,YAAA,CACA,aAAA,CACA,oBAAA,CACA,kBAAA,CAEA,eAAA,CACA,8BAAA,CACA,WAAA,CACA,YAAA",sourcesContent:[".buttonBase {\n  cursor: pointer;\n\n  padding: 0;\n\n  font: inherit;\n  color: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={buttonBase:"button-base_buttonBase__ceEYY"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/button/button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button_button__aZ_6A{display:inline-flex;align-items:center;justify-content:center;padding:.8em 2.5em;border-radius:.4em}.button_button_variant_regular__Ruj9e{color:#070606;background-color:#f8fcff}.button_button_variant_success__tyYGg{color:#f8fcff;background-color:#1d8750}.button_button_variant_error__sZQXv{color:#f8fcff;background-color:#c32323}.button_text__r7Qnw{color:inherit}","",{version:3,sources:["webpack://./src/shared/ui/button/button.module.scss","webpack://./src/global/styles/variables.scss"],names:[],mappings:"AAEA,sBACE,mBAAA,CACA,kBAAA,CACA,sBAAA,CAEA,kBAAA,CAEA,kBAAA,CAGE,sCACE,aCXO,CDYP,wBCbO,CDgBT,sCACE,aCjBO,CDkBP,wBChBS,CDmBX,oCACE,aCtBO,CDuBP,wBCpBO,CDyBb,oBACE,aAAA",sourcesContent:["@import '/src/global/styles/colors';\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 0.8em 2.5em;\n\n  border-radius: 0.4em;\n\n  &_variant {\n    &_regular {\n      color: $colorBlack;\n      background-color: $colorWhite;\n    }\n\n    &_success {\n      color: $colorWhite;\n      background-color: $colorSuccess;\n    }\n\n    &_error {\n      color: $colorWhite;\n      background-color: $colorError;\n    }\n  }\n}\n\n.text {\n  color: inherit;\n}\n\n/* disable hover on touchscreens:\n  @media (hover: hover) {\n    &:hover {\n    [ css props...]\n    }\n  } */\n","// Colors\n$colorWhite: #f8fcff;\n$colorBlack: #070606;\n$colorSuccess: #1d8750;\n$colorError: #c32323;\n\n// Fonts\n$fontNunito: var(--nunitoFont);\n$fontRubik: var(--rubikFont);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button:"button_button__aZ_6A",button_variant_regular:"button_button_variant_regular__Ruj9e",button_variant_success:"button_button_variant_success__tyYGg",button_variant_error:"button_button_variant_error__sZQXv",text:"button_text__r7Qnw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);