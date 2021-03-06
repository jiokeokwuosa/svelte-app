'use strict';

var index = require('./index-7460d1f3.js');
require('./index-4169654c.js');
require('cookie-universal');
require('./api-9d8f7f34.js');
require('./app-19cb53d9.js');
require('./index-91c4af8b.js');
require('./index-eb724975.js');
var Header = require('./Header-8a9931f8.js');
require('./auth-c7f15797.js');
require('./cart-d14f702b.js');
var _AccountMenu = require('./_AccountMenu-a4377a53.js');

/* src\routes\my\_layout.svelte generated by Svelte v3.16.4 */

const Layout = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	return `<main>
  ${index.validate_component(Header.Header, "Header").$$render($$result, {}, {}, {})}
  <div class="${"flex flex-wrap lg:flex-no-wrap justify-center bg-gray-100 lg:p-5\r\n    lg:mt-10"}" style="${"min-height:84vh;"}">
    <div class="${"hidden lg:block lg:w-1/5 text-center bg-white shadow rounded"}">
      ${index.validate_component(_AccountMenu.AccountMenu, "AccountMenu").$$render($$result, { segment }, {}, {})}
    </div>
    <div class="${"w-full bg-white shadow rounded lg:ml-5 p-2 "}">
      ${$$slots.default ? $$slots.default({}) : ``}
    </div>
  </div>
</main>`;
});

exports.default = Layout;
