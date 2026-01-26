
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 846, hash: '5ddb1ea83ec0f358d6740292bd193ec00af11994892bdcb0c3930ee9d3146faa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1052, hash: '4cfcad183be3a88e07d26fa6d7ae622810b5f5a44dd13cfc2ba34ed8179924fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13974, hash: 'f0bace880241d90ed43ace6de6c745d3353656c58c293f22502e20da94252c08', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AHGEH5LC.css': {size: 182, hash: 'lKzg+elY7pc', text: () => import('./assets-chunks/styles-AHGEH5LC_css.mjs').then(m => m.default)}
  },
};
