'use strict';

var index = require('./index-7460d1f3.js');
require('./index-4169654c.js');
require('cookie-universal');
require('./api-9d8f7f34.js');
require('./app-19cb53d9.js');
require('./index-91c4af8b.js');
require('./index-eb724975.js');
require('./Header-8a9931f8.js');
require('./auth-c7f15797.js');
require('./cart-d14f702b.js');
var _AccountMenu = require('./_AccountMenu-a4377a53.js');

/* src\routes\my\index.svelte generated by Svelte v3.16.4 */

const My = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"lg:hidden block"}">
  ${index.validate_component(_AccountMenu.AccountMenu, "AccountMenu").$$render($$result, { segment: "/" }, {}, {})}
</div>`;
});

exports.default = My;
