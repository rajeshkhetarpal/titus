(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"../titus-components/src/autocomplete/autocomplete.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),l=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js"),u=n("./node_modules/docz/dist/index.m.js"),i=n("../titus-components/node_modules/downshift/dist/downshift.esm.js"),o=n("../titus-components/node_modules/@material-ui/core/styles/index.js"),s=n("../titus-components/node_modules/@material-ui/core/TextField/index.js"),y=n.n(s),v=n("../titus-components/node_modules/@material-ui/core/Paper/index.js"),c=n.n(v),p=n("../titus-components/node_modules/@material-ui/core/MenuItem/index.js"),d=n.n(p),k=n("../titus-components/node_modules/@material-ui/core/LinearProgress/index.js"),m=n.n(k);function g(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function f(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h=function(e){var a=e.inputProps,n=e.classes,t=e.ref,r=f(e,["inputProps","classes","ref"]);return l.a.createElement("div",{className:n.inputRoot},l.a.createElement(y.a,Object.assign({InputProps:function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){g(e,a,n[a])})}return e}({inputRef:t},a)},r)),r.loading&&l.a.createElement(m.a,null))},b=function(e){var a=e.getInputProps,n=e.getItemProps,t=e.isOpen,r=e.selectedItem,u=e.highlightedIndex,i=e.classes,o=e.placeholder,s=e.id,y=e.items,v=e.onInputChange,p=e.loading;return l.a.createElement("div",{className:i.root},l.a.createElement("div",{className:i.container},h({fullWidth:!0,loading:p,classes:i,inputProps:a({onChange:v,placeholder:o,id:s})}),t&&y&&l.a.createElement(c.a,{className:i.paper,square:!0},y.map(function(e,a){return function(e){var a=e.suggestion,n=e.index,t=e.itemProps,r=e.highlightedIndex,u=e.selectedItem;return l.a.createElement(d.a,Object.assign({},t,{key:a.key,selected:r===n,component:"div",style:{fontWeight:u&&u.value===a.value?500:400}}),a.value)}({suggestion:e,index:a,itemProps:n({key:e.key,item:e}),highlightedIndex:u,selectedItem:r})}))))},S=Object(o.withStyles)(function(e){return{root:{flexGrow:1},container:{flexGrow:1,position:"relative"},paper:{position:"absolute",zIndex:1,marginTop:e.spacing.unit,left:0,right:0},inputRoot:{position:"relative",flexWrap:"wrap"}}})(b);function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,a){return(C=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}b.__docgenInfo={description:"",methods:[],displayName:"MaterialDownshift",props:{classes:{type:{name:"object"},required:!0,description:""},getInputProps:{type:{name:"any"},required:!1,description:""},getItemProps:{type:{name:"any"},required:!1,description:""},isOpen:{type:{name:"bool"},required:!1,description:""},selectedItem:{type:{name:"object"},required:!1,description:""},highlightedIndex:{type:{name:"number"},required:!1,description:""},placeholder:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},loading:{type:{name:"any"},required:!1,description:""},onInputChange:{type:{name:"func"},required:!1,description:""},items:{type:{name:"array"},required:!1,description:""}}};var A=function(e){function a(e){var n,t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),t=this,r=T(a).call(this,e),(n=!r||"object"!==I(r)&&"function"!==typeof r?P(t):r).renderMaterial=function(e){var a=P(P(n)),t=a.props,r=t.placeholder,u=t.id,i=t.items,o=t.loading,s=t.onInputChange,y=a.state.internalItems,v=a.handleInputChange;return l.a.createElement("div",null,l.a.createElement(S,Object.assign({},e,{items:s?i:y,loading:o?"true":void 0,placeholder:r,id:u,onInputChange:v})))},n.handleInputChange=function(e){var a=e.target.value,t=n.props,l=t.data,r=t.filterType,u=void 0===r?"startsWith":r,i=t.maxResults,o=void 0===i?5:i,s=t.onInputChange;if(s)s({value:a,filterType:u,maxResults:o});else{var y=null;if(n.setState({internalItems:y}),!a||!l)return;var v=a.toLowerCase();y=("contains"===u.toLowerCase()?l.filter(function(e){return e.value.toLowerCase().indexOf(v)>-1}):l.filter(function(e){return e.value.toLowerCase().startsWith(v)})).sort(function(e,a){return e.value.length-a.value.length}).splice(0,o),n.setState({internalItems:y})}},n.itemToString=function(e){return e?e.value:""},n.state={internalItems:null},n}var n,t,r;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&C(e,a)}(a,l.a.Component),n=a,(t=[{key:"render",value:function(){var e=this.props.onChange,a=this.renderMaterial,n=this.itemToString;return l.a.createElement(i.a,{onChange:e,itemToString:n},a)}}])&&M(n.prototype,t),r&&M(n,r),a}(),E=A;A.__docgenInfo={description:"",methods:[{name:"renderMaterial",docblock:null,modifiers:[],params:[{name:"props",type:null}],returns:null},{name:"handleInputChange",docblock:null,modifiers:[],params:[{name:"{ target: { value } }",type:null}],returns:null},{name:"itemToString",docblock:null,modifiers:[],params:[{name:"item",type:null}],returns:null}],displayName:"Autocomplete",props:{data:{type:{name:"array"},required:!1,description:""},onInputChange:{type:{name:"func"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""},inputValue:{type:{name:"string"},required:!1,description:""},placeholder:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},filterType:{type:{name:"string"},required:!1,description:""},maxResults:{type:{name:"number"},required:!1,description:""},loading:{type:{name:"any"},required:!1,description:""},items:{type:{name:"array"},required:!1,description:""}}};var O=[{value:"Afghanistan",key:"AF"},{value:"\xc5land Islands",key:"AX"},{value:"Albania",key:"AL"},{value:"Algeria",key:"DZ"},{value:"American Samoa",key:"AS"},{value:"AndorrA",key:"AD"},{value:"Angola",key:"AO"},{value:"Anguilla",key:"AI"},{value:"Antarctica",key:"AQ"},{value:"Antigua and Barbuda",key:"AG"},{value:"Argentina",key:"AR"},{value:"Armenia",key:"AM"},{value:"Aruba",key:"AW"},{value:"Australia",key:"AU"},{value:"Austria",key:"AT"},{value:"Azerbaijan",key:"AZ"},{value:"Bahamas",key:"BS"},{value:"Bahrain",key:"BH"},{value:"Bangladesh",key:"BD"},{value:"Barbados",key:"BB"},{value:"Belarus",key:"BY"},{value:"Belgium",key:"BE"},{value:"Belize",key:"BZ"},{value:"Benin",key:"BJ"},{value:"Bermuda",key:"BM"},{value:"Bhutan",key:"BT"},{value:"Bolivia",key:"BO"},{value:"Bosnia and Herzegovina",key:"BA"},{value:"Botswana",key:"BW"},{value:"Bouvet Island",key:"BV"},{value:"Brazil",key:"BR"},{value:"British Indian Ocean Territory",key:"IO"},{value:"Brunei Darussalam",key:"BN"},{value:"Bulgaria",key:"BG"},{value:"Burkina Faso",key:"BF"},{value:"Burundi",key:"BI"},{value:"Cambodia",key:"KH"},{value:"Cameroon",key:"CM"},{value:"Canada",key:"CA"},{value:"Cape Verde",key:"CV"},{value:"Cayman Islands",key:"KY"},{value:"Central African Republic",key:"CF"},{value:"Chad",key:"TD"},{value:"Chile",key:"CL"},{value:"China",key:"CN"},{value:"Christmas Island",key:"CX"},{value:"Cocos (Keeling) Islands",key:"CC"},{value:"Colombia",key:"CO"},{value:"Comoros",key:"KM"},{value:"Congo",key:"CG"},{value:"Congo, The Democratic Republic of the",key:"CD"},{value:"Cook Islands",key:"CK"},{value:"Costa Rica",key:"CR"},{value:"Cote D'Ivoire",key:"CI"},{value:"Croatia",key:"HR"},{value:"Cuba",key:"CU"},{value:"Cyprus",key:"CY"},{value:"Czech Republic",key:"CZ"},{value:"Denmark",key:"DK"},{value:"Djibouti",key:"DJ"},{value:"Dominica",key:"DM"},{value:"Dominican Republic",key:"DO"},{value:"Ecuador",key:"EC"},{value:"Egypt",key:"EG"},{value:"El Salvador",key:"SV"},{value:"Equatorial Guinea",key:"GQ"},{value:"Eritrea",key:"ER"},{value:"Estonia",key:"EE"},{value:"Ethiopia",key:"ET"},{value:"Falkland Islands (Malvinas)",key:"FK"},{value:"Faroe Islands",key:"FO"},{value:"Fiji",key:"FJ"},{value:"Finland",key:"FI"},{value:"France",key:"FR"},{value:"French Guiana",key:"GF"},{value:"French Polynesia",key:"PF"},{value:"French Southern Territories",key:"TF"},{value:"Gabon",key:"GA"},{value:"Gambia",key:"GM"},{value:"Georgia",key:"GE"},{value:"Germany",key:"DE"},{value:"Ghana",key:"GH"},{value:"Gibraltar",key:"GI"},{value:"Greece",key:"GR"},{value:"Greenland",key:"GL"},{value:"Grenada",key:"GD"},{value:"Guadeloupe",key:"GP"},{value:"Guam",key:"GU"},{value:"Guatemala",key:"GT"},{value:"Guernsey",key:"GG"},{value:"Guinea",key:"GN"},{value:"Guinea-Bissau",key:"GW"},{value:"Guyana",key:"GY"},{value:"Haiti",key:"HT"},{value:"Heard Island and Mcdonald Islands",key:"HM"},{value:"Holy See (Vatican City State)",key:"VA"},{value:"Honduras",key:"HN"},{value:"Hong Kong",key:"HK"},{value:"Hungary",key:"HU"},{value:"Iceland",key:"IS"},{value:"India",key:"IN"},{value:"Indonesia",key:"ID"},{value:"Iran, Islamic Republic Of",key:"IR"},{value:"Iraq",key:"IQ"},{value:"Ireland",key:"IE"},{value:"Isle of Man",key:"IM"},{value:"Israel",key:"IL"},{value:"Italy",key:"IT"},{value:"Jamaica",key:"JM"},{value:"Japan",key:"JP"},{value:"Jersey",key:"JE"},{value:"Jordan",key:"JO"},{value:"Kazakhstan",key:"KZ"},{value:"Kenya",key:"KE"},{value:"Kiribati",key:"KI"},{value:"Korea, Democratic People'S Republic of",key:"KP"},{value:"Korea, Republic of",key:"KR"},{value:"Kuwait",key:"KW"},{value:"Kyrgyzstan",key:"KG"},{value:"Lao People'S Democratic Republic",key:"LA"},{value:"Latvia",key:"LV"},{value:"Lebanon",key:"LB"},{value:"Lesotho",key:"LS"},{value:"Liberia",key:"LR"},{value:"Libyan Arab Jamahiriya",key:"LY"},{value:"Liechtenstein",key:"LI"},{value:"Lithuania",key:"LT"},{value:"Luxembourg",key:"LU"},{value:"Macao",key:"MO"},{value:"Macedonia, The Former Yugoslav Republic of",key:"MK"},{value:"Madagascar",key:"MG"},{value:"Malawi",key:"MW"},{value:"Malaysia",key:"MY"},{value:"Maldives",key:"MV"},{value:"Mali",key:"ML"},{value:"Malta",key:"MT"},{value:"Marshall Islands",key:"MH"},{value:"Martinique",key:"MQ"},{value:"Mauritania",key:"MR"},{value:"Mauritius",key:"MU"},{value:"Mayotte",key:"YT"},{value:"Mexico",key:"MX"},{value:"Micronesia, Federated States of",key:"FM"},{value:"Moldova, Republic of",key:"MD"},{value:"Monaco",key:"MC"},{value:"Mongolia",key:"MN"},{value:"Montserrat",key:"MS"},{value:"Morocco",key:"MA"},{value:"Mozambique",key:"MZ"},{value:"Myanmar",key:"MM"},{value:"Namibia",key:"NA"},{value:"Nauru",key:"NR"},{value:"Nepal",key:"NP"},{value:"Netherlands",key:"NL"},{value:"Netherlands Antilles",key:"AN"},{value:"New Caledonia",key:"NC"},{value:"New Zealand",key:"NZ"},{value:"Nicaragua",key:"NI"},{value:"Niger",key:"NE"},{value:"Nigeria",key:"NG"},{value:"Niue",key:"NU"},{value:"Norfolk Island",key:"NF"},{value:"Northern Mariana Islands",key:"MP"},{value:"Norway",key:"NO"},{value:"Oman",key:"OM"},{value:"Pakistan",key:"PK"},{value:"Palau",key:"PW"},{value:"Palestinian Territory, Occupied",key:"PS"},{value:"Panama",key:"PA"},{value:"Papua New Guinea",key:"PG"},{value:"Paraguay",key:"PY"},{value:"Peru",key:"PE"},{value:"Philippines",key:"PH"},{value:"Pitcairn",key:"PN"},{value:"Poland",key:"PL"},{value:"Portugal",key:"PT"},{value:"Puerto Rico",key:"PR"},{value:"Qatar",key:"QA"},{value:"Reunion",key:"RE"},{value:"Romania",key:"RO"},{value:"Russian Federation",key:"RU"},{value:"RWANDA",key:"RW"},{value:"Saint Helena",key:"SH"},{value:"Saint Kitts and Nevis",key:"KN"},{value:"Saint Lucia",key:"LC"},{value:"Saint Pierre and Miquelon",key:"PM"},{value:"Saint Vincent and the Grenadines",key:"VC"},{value:"Samoa",key:"WS"},{value:"San Marino",key:"SM"},{value:"Sao Tome and Principe",key:"ST"},{value:"Saudi Arabia",key:"SA"},{value:"Senegal",key:"SN"},{value:"Serbia and Montenegro",key:"CS"},{value:"Seychelles",key:"SC"},{value:"Sierra Leone",key:"SL"},{value:"Singapore",key:"SG"},{value:"Slovakia",key:"SK"},{value:"Slovenia",key:"SI"},{value:"Solomon Islands",key:"SB"},{value:"Somalia",key:"SO"},{value:"South Africa",key:"ZA"},{value:"South Georgia and the South Sandwich Islands",key:"GS"},{value:"Spain",key:"ES"},{value:"Sri Lanka",key:"LK"},{value:"Sudan",key:"SD"},{value:"Suriname",key:"SR"},{value:"Svalbard and Jan Mayen",key:"SJ"},{value:"Swaziland",key:"SZ"},{value:"Sweden",key:"SE"},{value:"Switzerland",key:"CH"},{value:"Syrian Arab Republic",key:"SY"},{value:"Taiwan, Province of China",key:"TW"},{value:"Tajikistan",key:"TJ"},{value:"Tanzania, United Republic of",key:"TZ"},{value:"Thailand",key:"TH"},{value:"Timor-Leste",key:"TL"},{value:"Togo",key:"TG"},{value:"Tokelau",key:"TK"},{value:"Tonga",key:"TO"},{value:"Trinidad and Tobago",key:"TT"},{value:"Tunisia",key:"TN"},{value:"Turkey",key:"TR"},{value:"Turkmenistan",key:"TM"},{value:"Turks and Caicos Islands",key:"TC"},{value:"Tuvalu",key:"TV"},{value:"Uganda",key:"UG"},{value:"Ukraine",key:"UA"},{value:"United Arab Emirates",key:"AE"},{value:"United Kingdom",key:"GB"},{value:"United States",key:"US"},{value:"United States Minor Outlying Islands",key:"UM"},{value:"Uruguay",key:"UY"},{value:"Uzbekistan",key:"UZ"},{value:"Vanuatu",key:"VU"},{value:"Venezuela",key:"VE"},{value:"Viet Nam",key:"VN"},{value:"Virgin Islands, British",key:"VG"},{value:"Virgin Islands, U.S.",key:"VI"},{value:"Wallis and Futuna",key:"WF"},{value:"Western Sahara",key:"EH"},{value:"Yemen",key:"YE"},{value:"Zambia",key:"ZM"},{value:"Zimbabwe",key:"ZW"}];function G(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}a.default=function(e){var a=e.components,n=G(e,["components"]);return l.a.createElement(r.MDXTag,{name:"wrapper",components:a},l.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"autocomplete"}},"Autocomplete"),l.a.createElement(r.MDXTag,{name:"p",components:a},"The Autocomplete component provides typical autocompletion features using ",l.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://material-ui.com/"}},"Material UI")," and ",l.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/paypal/downshift"}},"downshift"),"."),l.a.createElement(r.MDXTag,{name:"p",components:a},"It supports synchronous and asynchronous loading of list items."),l.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"properties"}},"Properties"),l.a.createElement(u.PropsTable,{of:E}),l.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"typings-definitions"}},"Typings Definitions"),l.a.createElement(r.MDXTag,{name:"pre",components:a},l.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-ts",metaString:""}},"type DataItem = {\n  value: string\n  key: string\n}\n\nexport interface AutocompleteProps {\n  data?: Array<DataItem>\n  inputValue?: string\n  placeholder?: string\n  id?: string\n  filterType?: string\n  maxResults?: number\n  loading?: any\n  items?: Array<DataItem>\n  onInputChange?: (e: any) => void\n  onChange?: (item: DataItem) => void\n}\n")),l.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"usage"}},"Usage"),l.a.createElement(r.MDXTag,{name:"p",components:a},"This section shows how to use the Autocomplete component."),l.a.createElement(u.Playground,{__position:1,__code:'<Autocomplete\n  placeholder="I am a placeholder"\n  data={countries}\n  onChange={console.log}\n/>',__scope:{props:n,Autocomplete:E,countries:O}},l.a.createElement(E,{placeholder:"I am a placeholder",data:O,onChange:console.log})))}}}]);