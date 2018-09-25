(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"../titus-components/src/uploader/images/baseline-cloud_upload-24px.svg":function(e,t,n){e.exports=n.p+"static/img/baseline-cloud_upload-24px.0c8a0359.svg"},"../titus-components/src/uploader/services/UploaderService.js":function(e,t,n){"use strict";var o=n("../titus-components/node_modules/aws-sdk/lib/core.js"),r=n.n(o),a=(n("../titus-components/node_modules/aws-sdk/clients/s3.js"),n("../titus-components/node_modules/aws-sdk/lib/s3/managed_upload.js")),i=n.n(a);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var p={},d=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"/",WEBPACK_SERVE_OVERLAY_WS_URL:"undefined",npm_package_scripts_docz_build:"docz build",npm_package_scripts_docz_dev:"docz dev"}).REACT_APP_S3_UPLOADER_PART_SIZE,10)||5242880,u=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"/",WEBPACK_SERVE_OVERLAY_WS_URL:"undefined",npm_package_scripts_docz_build:"docz build",npm_package_scripts_docz_dev:"docz dev"}).REACT_APP_S3_UPLOADER_QUEUE_SIZE,10)||4,m=function(){function e(t,n,o,r){l(this,e);var a={partSize:d,queueSize:u,params:Object.assign({},{Bucket:n},o)};r&&(a.tags=r),this.s3Upload=new i.a(a),this.file=o.Body,this.uploadId=t}return c(e,[{key:"uploadFile",value:function(e,t,n){var o=this;return this.s3Upload.on("httpUploadProgress",function(t){var n=t&&t.part>1;n||(n=t.total>d),e(Math.round(t.loaded/t.total*100),o.uploadId,n)}).send(function(e){e?t(e,o.file):n(o.file)})}},{key:"abortUpload",value:function(){return this.s3Upload.abort()}}]),e}(),f=function(){function e(t){l(this,e),this.bucket=t.bucket,this.getParams=t.getParams||this.getDefaultParams,this.getTags=t.getTags,t.awsConfig&&"undefined"!==typeof r.a&&r.a.config.update(t.awsConfig)}return c(e,[{key:"getDefaultParams",value:function(e){return{Key:e.name,Body:e.orig,ContentType:e.type}}},{key:"clear",value:function(){return p={},this}},{key:"startUpload",value:function(e,t,n,o){var r=new m(e.id,this.bucket,this.getParams(e),this.getTags?this.getTags(e):null);p[r.uploadId]=r.abortUpload.bind(r),r.uploadFile(t,n,o)}},{key:"abortUpload",value:function(e,t){try{var n=p[e.id];"function"===typeof n&&n(),t(null,e)}catch(n){t(n,e)}}}]),e}();t.a=f},"../titus-components/src/uploader/stories/uploader.story.js":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return c});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("../titus-components/node_modules/@storybook/react/dist/client/index.js"),i=n("../titus-components/node_modules/@storybook/addon-actions/dist/index.js"),l=n("../titus-components/node_modules/@storybook/addon-knobs/react.js"),s=n("../titus-components/src/uploader/uploader.js");var c=new(n("../titus-components/src/uploader/services/UploaderService.js").a)({awsConfig:{accessKeyId:"ignored",secretAccessKey:"ignored",region:"ignored",computeChecksums:!1,sslEnabled:!1,s3ForcePathStyle:!0,s3:{endpoint:"http://localhost:4569",s3BucketEndpoint:!1,computeChecksums:!1}},bucket:"titus-uploader-471234098732409871234",getParams:function(e){return{Key:e.id,Body:e.orig,ContentType:e.type,Metadata:{"original-name":e.name}}},getTags:function(e){return[{Key:"OriginalName",Value:e.name}]}});Object(a.storiesOf)("Uploader",e).addDecorator(l.withKnobs).add("default",function(){return r.a.createElement(s.b,{maxItems:Object(l.number)("Max items",1),service:c,onUploadDone:Object(i.action)("OnUploadDone"),onUploadError:Object(i.action)("OnUploadError")})})}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"../titus-components/src/uploader/uploader.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("../titus-components/node_modules/react-dnd-html5-backend-filedrop/lib/index.js"),i=n.n(a),l=n("../titus-components/node_modules/react-dnd/lib/index.js"),s=r.a.createContext("file-uploader");function c(e){return function(t){return r.a.createElement(s.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{fileUploader:n}))})}}var p=n("../titus-components/node_modules/@material-ui/core/styles/index.js"),d=n("../titus-components/node_modules/@material-ui/core/GridList/index.js"),u=n.n(d);function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,h(t).call(this,e))).handleRemove=function(){n.props.fileUploader.removeFile(n.props.file.id)},n.state={error:null,done:!1},n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e,t=this;if(this.props&&this.props.file){var n=function(e,n){t.props.fileUploader.onUploadError(e,t.props.file),t.setState({error:e.message})};(e=this.props.file,new Promise(function(t){if(!e.type.includes("image"))return t(void 0);var n=new FileReader;n.addEventListener("load",function(){return t(n.result)},!1),n.readAsDataURL(e.orig||e)})).then(function(e){t.setState({mediaImage:e})}).catch(n),this.props.fileUploader.service.startUpload(this.props.file,function(e,n,o){t.setState({uploadProgress:e,isMultipart:o})},n,function(e){t.props.fileUploader.onUploadDone(t.props.file),t.setState({done:!0})}),this.abortUpload=this.props.fileUploader.service.abortUpload.bind(this,this.props.file,this.props.fileUploader.onUploadCancel)}}},{key:"componentWillUnmount",value:function(){!this.state.done&&this.abortUpload&&this.abortUpload()}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.file,o=e.DisplayCardComponent,a=this.state,i=a.uploadProgress,l=a.mediaImage;return r.a.createElement(o,{uploadProgress:i,title:t,id:n.id,name:n.name,mediaImage:l,size:n.orig.size,onAbortUpload:this.abortUpload,error:this.state.error,done:this.state.done,onRemove:this.handleRemove})}}])&&f(n.prototype,o),a&&f(n,a),t}(),v=g;g.__docgenInfo={description:"",methods:[{name:"handleRemove",docblock:null,modifiers:[],params:[],returns:null}],displayName:"UploadDisplayCard",props:{title:{type:{name:"string"},required:!1,description:""},file:{type:{name:"object"},required:!1,description:""},fileUploader:{type:{name:"object"},required:!1,description:""},DisplayCardComponent:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!0,description:""}}};var E=n("./node_modules/uuid/index.js");function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _=function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id="file-".concat(n,"-").concat(Object(E.v4)()),this.name=t.name,this.type=t.type,this.orig=t,this.isDirectory=o},j=function(e,t){return Promise.resolve().then(function(){if(!e||!e.files||0===e.files.length)return[];for(var n,o=[],r=0;r<e.files.length;r++){var a=e.files[r];o.push(new _(a,r,!t&&(n=e.items[r],n.getAsEntry?n.getAsEntry():n.webkitGetAsEntry?n.webkitGetAsEntry():null).isDirectory))}return Promise.all(o).then(function(e){var t;return(t=[]).concat.apply(t,U(e))})})},O={drop:function(e,t,n){if(!t.didDrop()){var o=t.getItem();return j(o.dataTransfer).then(function(e){n.handleFilesUpdate(e)}).catch(console.error),{moved:!0}}},canDrop:function(){return!0}};var w=Object(l.DropTarget)([a.NativeTypes.FILE],O,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),isOverCurrent:t.isOver({shallow:!0}),canDrop:t.canDrop(),itemType:t.getItemType()}});function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var P=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=x(t).call(this,e))||"object"!==D(a)&&"function"!==typeof a?C(o):a).inputFile=r.a.createRef(),n.handleFilesUpdate=n.handleFilesUpdate.bind(C(C(n))),n.handleSelectFile=n.handleSelectFile.bind(C(C(n))),n.handleClick=n.handleClick.bind(C(C(n))),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o["Component"]),n=t,(a=[{key:"handleSelectFile",value:function(e){var t=this;j(e.target,!0).then(function(e){t.handleFilesUpdate(e)}).catch(this.props.fileUploader.logger)}},{key:"handleClick",value:function(){this.inputFile.current.click()}},{key:"handleFilesUpdate",value:function(e){this.props.fileUploader.addFiles(e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.text,o=e.connectDropTarget,a=e.DropAreaComponent,i=e.fileUploader;return o(r.a.createElement("div",{onClick:this.handleClick},r.a.createElement(a,{text:n,title:t,error:i.dragOnUploadError}),r.a.createElement("div",{style:{display:"none"}},r.a.createElement("input",{ref:this.inputFile,type:"file",id:"uploadfile",onChange:this.handleSelectFile,multiple:i.maxItems-i.files.length>1}))))}}])&&k(n.prototype,a),i&&k(n,i),t}(),I=c(w(P));P.__docgenInfo={description:"",methods:[{name:"handleSelectFile",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleFilesUpdate",docblock:null,modifiers:[],params:[{name:"files",type:null}],returns:null}],displayName:"UploadCard",props:{title:{type:{name:"string"},required:!1,description:""},text:{type:{name:"string"},required:!1,description:""},fileUploader:{type:{name:"object"},required:!1,description:""},connectDropTarget:{type:{name:"func"},required:!1,description:""},DropAreaComponent:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!0,description:""}}};var T=n("../titus-components/node_modules/@material-ui/core/GridListTile/index.js"),A=n.n(T),q=n("../titus-components/node_modules/@material-ui/core/GridListTileBar/index.js"),F=n.n(q),R=n("../titus-components/src/uploader/images/baseline-cloud_upload-24px.svg"),N=n.n(R),M={tile:{width:245,height:300,border:"2px dotted ".concat("#DDDDDD")},media:{width:"120px",height:"120px",marginTop:"60px"},bar:{padding:"2px",backgroundColor:"#DDDDDD",color:"black"},error:{color:"#ff090a",marginTop:"3px"}},z={titleWrap:{color:"#333"},actionIcon:{color:"white"}},B=Object(p.withStyles)(z)(F.a),L=function(e){var t=e.classes,n=e.text,o=e.error,a=e.title;return r.a.createElement(A.a,{className:t.tile},r.a.createElement("img",{className:t.media,title:"Upload",src:N.a,alt:"uploaded"}),r.a.createElement(B,{className:t.bar,title:a,subtitle:r.a.createElement("div",null,r.a.createElement("div",null,n),o&&r.a.createElement("div",{className:t.error},o))}))};L.defaultProps={title:"Upload",text:"Drag here your file"};var X=Object(p.withStyles)(M)(L);L.__docgenInfo={description:"",methods:[],displayName:"DropAreaBase",props:{title:{defaultValue:{value:"'Upload'",computed:!1},type:{name:"string"},required:!1,description:""},text:{defaultValue:{value:"'Drag here your file'",computed:!1},type:{name:"string"},required:!1,description:""},classes:{type:{name:"object"},required:!1,description:""},error:{type:{name:"string"},required:!1,description:""}}};var V=n("../titus-components/node_modules/@material-ui/icons/Delete.js"),K=n.n(V),W=n("../titus-components/node_modules/@material-ui/core/Typography/index.js"),G=n.n(W),J=["Bits","KB","MB","GB","TB"],Y=function(e){var t=e.bits;return r.a.createElement("span",null,function(e){var t=Math.floor(Math.log(e)/Math.log(1024));return e?(e/Math.pow(1024,t)).toFixed(2)+" ".concat(J[t]):"0"}(t))},Z=Y;Y.__docgenInfo={description:"",methods:[],displayName:"FileSize",props:{bits:{type:{name:"number"},required:!1,description:""}}};var H=function(e){return 100===e.progress&&e.done?r.a.createElement("span",{"data-testid":"upload-status"},"Size: ",r.a.createElement(Z,{bits:e.size}),", Upload Complete"):r.a.createElement("span",{"data-testid":"upload-status"},"Uploaded:"," ",r.a.createElement(Z,{bits:Math.floor(e.size/100*e.progress)})," /"," ",r.a.createElement(Z,{bits:e.size}))},Q=H;H.__docgenInfo={description:"",methods:[],displayName:"UploadStatus",props:{size:{type:{name:"number"},required:!1,description:""},done:{type:{name:"bool"},required:!1,description:""},progress:{type:{name:"number"},required:!1,description:""}}};var $={tile:{width:245,height:300,border:"2px solid ".concat("#222222ef")},complete:{border:"2px solid ".concat("#737072ef")},media:{objectFit:"cover",width:"245px",height:"300px"},bar:{padding:"2px"}},ee=Object(p.withStyles)({titleWrapActionPosRight:{marginLeft:"2px"},actionIcon:{color:"white"}})(F.a),te=Object(p.withStyles)({root:{height:"240px",display:"flex",justifyContent:"center",alignItems:"center"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root,"data-testid":"display-card-no-preview"},r.a.createElement(G.a,{variant:"title"},"No Preview Available"))}),ne=function(e){var t=e.classes,n=e.uploadProgress,o=e.title,a=e.name,i=e.size,l=e.mediaImage,s=e.error,c=e.done,p=e.onRemove;return r.a.createElement(A.a,{className:"".concat(t.tile," ").concat(100===n?t.complete:"")},l&&r.a.createElement("img",{className:t.media,title:o||a,src:l,alt:"media"}),!l&&r.a.createElement(te,null),r.a.createElement(ee,Object.assign({className:t.bar,title:o||a,subtitle:s||r.a.createElement(Q,{size:i,progress:n,done:c}),style:{background:s?"#FF0000dd":c?"#238F2Cef":"linear-gradient(to right, ".concat("#737072ef"," ").concat(n,"%, ").concat("#222222ef"," ").concat(n,"%, ").concat("#222222ef"," ").concat(100-n,"%)")}},s?{actionIcon:r.a.createElement(K.a,{onClick:p})}:{})))},oe=Object(p.withStyles)($)(ne);ne.__docgenInfo={description:"",methods:[],displayName:"DisplayCard",props:{classes:{type:{name:"object"},required:!1,description:""},uploadProgress:{type:{name:"any"},required:!1,description:""},title:{type:{name:"any"},required:!1,description:""},name:{type:{name:"any"},required:!1,description:""},mediaImage:{type:{name:"any"},required:!1,description:""},size:{type:{name:"number"},required:!1,description:""},done:{type:{name:"bool"},required:!1,description:""},error:{type:{name:"string"},required:!1,description:""},onRemove:{type:{name:"func"},required:!1,description:""}}};var re=function(e){var t=e.children;return r.a.createElement("div",{style:{marginBottom:"10px",marginRight:"10px"}},t)},ae=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{cellHeight:180,className:e.classes.gridList},e.fileUploader.files.map(function(t){return r.a.createElement(re,{key:t.id},r.a.createElement(v,{fileUploader:e.fileUploader,file:t,DisplayCardComponent:oe}))}),e.fileUploader.files.length<e.maxItems&&r.a.createElement(re,null,r.a.createElement(I,{fileUploader:e.fileUploader,title:(t=e.maxItems,e.fileUploader.files.length,"To upload drag your file".concat(t>1?"s":"")),text:function(e,t){return e>1?"Uploaded ".concat(t," of ").concat(e):""}(e.maxItems,e.fileUploader.files.length),DropAreaComponent:X}))));var t},ie=Object(p.withStyles)({gridList:{width:"100%"}})(c(ae));function le(e){return(le="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}ae.__docgenInfo={description:"",methods:[],displayName:"UploaderContainerBase",props:{classes:{type:{name:"object"},required:!1,description:""},fileUploader:{type:{name:"object"},required:!1,description:""},maxItems:{type:{name:"number"},required:!1,description:""}}},n.d(t,"a",function(){return me});var me=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=pe(t).call(this,e))||"object"!==le(r)&&"function"!==typeof r?ue(o):r).state={files:[],maxItems:n.props.maxItems,addFiles:n.handleAddFile.bind(ue(ue(n))),removeFile:n.handleRemovefile.bind(ue(ue(n))),service:n.props.service,dragOnUploadError:null,logger:n.props.logger||console,onUploadError:n.handleUploadError.bind(ue(ue(n))),onUploadDone:n.handleUploadDone.bind(ue(ue(n))),onUploadCancel:n.handleUploadCancel.bind(ue(ue(n)))},n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(t,r.a.Component),n=t,(o=[{key:"handleUploadCancel",value:function(e){this.state.logger.log("Cancel",e)}},{key:"handleUploadDone",value:function(e){this.props.onUploadDone&&this.props.onUploadDone(e)}},{key:"handleUploadError",value:function(e,t){this.props.onUploadError&&this.props.onUploadError(e,t)}},{key:"handleRemovefile",value:function(e){this.setState({files:this.state.files.filter(function(t){return t.id!==e})})}},{key:"handleAddFile",value:function(e){e.find(function(e){return e.isDirectory})?this.setState({dragOnUploadError:"Directory are not allowed"}):1===this.props.maxItems&&e.length>1?this.setState({dragOnUploadError:"Only one file allowed"}):e.length+this.state.files.length>this.props.maxItems?this.setState({dragOnUploadError:"Too many files added"}):this.setState({files:se(this.state.files).concat(se(e)),dragOnUploadError:null})}},{key:"render",value:function(){return r.a.createElement(s.Provider,{value:this.state},r.a.createElement(l.DragDropContextProvider,{backend:i.a},r.a.createElement(ie,{maxItems:this.props.maxItems})))}}])&&ce(n.prototype,o),a&&ce(n,a),t}();me.defaultProps={maxItems:1};t.b=Object(l.DragDropContext)(i.a)(me);me.__docgenInfo={description:"",methods:[{name:"handleUploadCancel",docblock:null,modifiers:[],params:[{name:"file",type:null}],returns:null},{name:"handleUploadDone",docblock:null,modifiers:[],params:[{name:"file",type:null}],returns:null},{name:"handleUploadError",docblock:null,modifiers:[],params:[{name:"err",type:null},{name:"file",type:null}],returns:null},{name:"handleRemovefile",docblock:null,modifiers:[],params:[{name:"fileId",type:null}],returns:null},{name:"handleAddFile",docblock:null,modifiers:[],params:[{name:"files",type:null}],returns:null}],displayName:"Uploader",props:{maxItems:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},service:{type:{name:"object"},required:!1,description:""},logger:{type:{name:"object"},required:!1,description:""},onUploadDone:{type:{name:"func"},required:!1,description:""},onUploadError:{type:{name:"func"},required:!1,description:""}}}},"../titus-components/src/uploader/uploader.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("../titus-components/src/uploader/uploader.js"),s=n("../titus-components/src/uploader/stories/uploader.story.js");function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=c(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"uploader"}},"Uploader"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The Uploader component provides and easy to use way to upload files to a backend by pulling together the ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/react-dnd/react-dnd"}},"react-dnd")," library and ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://material-ui.com/"}},"Material UI")," components."),r.a.createElement(a.MDXTag,{name:"p",components:t},"In order to use this component, you must first initialize an ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/titus-components/uploader-service"}},"UploaderService"),"."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(i.PropsTable,{of:l.a}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"typings-definitions"}},"Typings definitions"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-ts",metaString:""}},"export interface UploaderProps {\n  maxItems?: number\n  service?: object\n  logger?: object\n  onUploadDone?: (file: object) => void\n  onUploadError?: (error: any, file: object) => void\n}\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),r.a.createElement(i.Playground,{__position:1,__code:"<Uploader\n  maxItems={1}\n  service={service}\n  onUploadDone={console.log}\n  onUploadError={console.log}\n/>",__scope:{props:n,Uploader:l.b,UploaderBase:l.a,service:s.a}},r.a.createElement(l.b,{maxItems:1,service:s.a,onUploadDone:console.log,onUploadError:console.log})))}},1:function(e,t){}}]);