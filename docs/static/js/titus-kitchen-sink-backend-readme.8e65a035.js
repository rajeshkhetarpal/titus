(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"../titus-kitchen-sink-backend/README.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,i(n).call(this,e))).layout=null,t}var t,a,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"titus-backend"}},"Titus Backend"),o.a.createElement(r.MDXTag,{name:"p",components:n},"A starter Hapi and PostgreSQL setup running in Docker."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"features"}},"Features"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Docker compose config to start database and Hapi"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Uses host filesystem, so no need to restart containers on code change"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Hot reloading Hapi server"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Web-based Postgresql ui using ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://www.adminer.org/"}},"Adminer")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Graphql with sample schema and associated db migrations and seed"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Postgresql Hapi plugin with transaction control"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Sample source structure for organising Hapi and Graphql components"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Sample test setup using Jest"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Linting using eslint/Standard")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"getting-started"}},"Getting started"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run start"),", this will build and run all the necessary docker containers. "),o.a.createElement(r.MDXTag,{name:"p",components:n},"Verify it works with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"curl http://127.0.0.1:5000/hello/random")),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can tail the server logs with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker logs -f docker_api_1"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"api-documentation"}},"API documentation"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Setting the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NODE_ENV")," to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"development"),", you will be able to access the API ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"swagger")," documentation at ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://127.0.0.1:5000/documentation"}},"http://127.0.0.1:5000/documentation"),". This is set by default when you use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run start")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"developing"}},"Developing"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run start")," will run everything in local development mode. Any code changes you make will automatically restart the server. "),o.a.createElement(r.MDXTag,{name:"p",components:n},"Titus uses Docker Compose, see ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"docker/docker-compose-dev.yml"}},"docker/docker-compose-dev.yml"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"docker"}},"Docker"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker:dev:start")," - start the db, api and web db ui in Docker for local development.  This will also migrate and seed the db.\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker:dev:stop")," - stop all development Docker containers"),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"other-useful-script"}},"Other useful script"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker:dev:migrate")," - migrate the db\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker:dev:seed")," - seed the db with dev data\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker:dev:rmi")," - remove all development Docker images\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker:dev:logs")," - show and follow all development Docker logs\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docker:dev:exec")," - execute a command in the dev api Docker container, e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run docker:dev:exec -- ls")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"api"}},"API"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dev:start")," - start the Hapi server on the host machine (used inside the Docker container)\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dev:cleandb")," - deletes the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pgdata")," directory containing the database data. THIS WILL DELETE YOUR DATABASE!"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"linting"}},"Linting"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lint")," - uses eslint / prettier\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lint:fix")," - uses eslint / prettier (with autofix flag)"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"testing"}},"Testing"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"test")," - run tests using Jest"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"adminer"}},"Adminer"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.adminer.org/"}},"Adminer")," provides a handy web ui for the postgres db which you can access by opening ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:8080"}},"http://localhost:8080"),"."),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Change 'System' to be 'PostgreSQL'."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"You can then log in with: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"titus")," as user, password and database.")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"trail"}},"Trail"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Audit trails are available using ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/nearform/trail"}},"nearForm's Trail service"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can navigate to ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:5000/hello"}},"http://localhost:5000/hello")," in your browser to add an audit trail item to the database."),o.a.createElement(r.MDXTag,{name:"p",components:n},"To view audit trail items navigate to ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:5000/trails?from=%3Cdate-from%3E&to=%3Cdate-to%3E"}}),", where ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<date-from>")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<date-to>")," are ISO 8601 formatted dates, e.g. ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://localhost:5000/trails?from=2017-07-06T12%3A34%3A56.123&to=2018-07-06T12%3A34%3A56.123"}},"http://localhost:5000/trails?from=2017-07-06T12%3A34%3A56.123&to=2018-07-06T12%3A34%3A56.123")))}}])&&c(t.prototype,a),m&&c(t,m),n}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=titus-kitchen-sink-backend-readme.e845dc2428bcb4525ec0.js.map