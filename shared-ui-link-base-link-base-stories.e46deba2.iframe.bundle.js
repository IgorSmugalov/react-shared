"use strict";(self.webpackChunkreact_shared=self.webpackChunkreact_shared||[]).push([[917],{"./src/shared/ui/link-base/link-base.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsExternalLink:()=>AsExternalLink,AsNextJsLink:()=>AsNextJsLink,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AsNextJsLink$paramet,_AsNextJsLink$paramet2,_AsExternalLink$param,_AsExternalLink$param2,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_link_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/link-base/link-base.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={component:_link_base__WEBPACK_IMPORTED_MODULE_2__.w,parameters:{layout:"fullscreen"}};var AsNextJsLink={render:function render(){return __jsx(_link_base__WEBPACK_IMPORTED_MODULE_2__.w,{href:"/"},"NextJs Link")}},AsExternalLink={render:function render(){return __jsx(_link_base__WEBPACK_IMPORTED_MODULE_2__.w,{externalLink:!0,href:"https://www.google.com/"},"External Link")}};AsNextJsLink.parameters=_objectSpread(_objectSpread({},AsNextJsLink.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AsNextJsLink$paramet=AsNextJsLink.parameters)||void 0===_AsNextJsLink$paramet?void 0:_AsNextJsLink$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => {\n    return <LinkBase href={'/'}>NextJs Link</LinkBase>;\n  }\n}"},null===(_AsNextJsLink$paramet2=AsNextJsLink.parameters)||void 0===_AsNextJsLink$paramet2||null===(_AsNextJsLink$paramet2=_AsNextJsLink$paramet2.docs)||void 0===_AsNextJsLink$paramet2?void 0:_AsNextJsLink$paramet2.source)})}),AsExternalLink.parameters=_objectSpread(_objectSpread({},AsExternalLink.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AsExternalLink$param=AsExternalLink.parameters)||void 0===_AsExternalLink$param?void 0:_AsExternalLink$param.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => {\n    return <LinkBase externalLink={true} href={'https://www.google.com/'}>\n        External Link\n      </LinkBase>;\n  }\n}"},null===(_AsExternalLink$param2=AsExternalLink.parameters)||void 0===_AsExternalLink$param2||null===(_AsExternalLink$param2=_AsExternalLink$param2.docs)||void 0===_AsExternalLink$param2?void 0:_AsExternalLink$param2.source)})})},"./src/shared/ui/link-base/link-base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>LinkBase});var _home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_excluded=["externalLink","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LinkBase=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(props,ref){if(function isExternalLink(props){return"externalLink"in props}(props)){props.externalLink;var children=props.children,rest=(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded);return __jsx("a",(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},rest,{ref}),children)}if(function isNextLink(props){return!("externalLink"in props)}(props))return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_home_runner_work_react_shared_react_shared_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},props,{ref}))}));LinkBase.displayName="Link",LinkBase.__docgenInfo={description:"",methods:[],displayName:"Link"};try{LinkBase.displayName="Link",LinkBase.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!1,type:{name:"Url"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},externalLink:{defaultValue:null,description:"",name:"externalLink",required:!1,type:{name:"true"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/link-base/link-base.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/shared/ui/link-base/link-base.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}}}]);