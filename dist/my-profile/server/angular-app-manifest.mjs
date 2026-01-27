
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
    'index.csr.html': {size: 961, hash: '53824a4f5c46a742a36d6b441006b40521be24036a1121847b4b2bb9ee75ff97', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1052, hash: '5e2efb163d1aa7cc34b4fc2b332f469cf0b007bd4107b32b655500442a363b0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17249, hash: '99198e75fea2e907b2dfa5a512ed929dc7b5a5a16f0bd3be4bb0fdd45462764d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-H7U2XHGY.css': {size: 342, hash: 'gYPJNkxBpU0', text: () => import('./assets-chunks/styles-H7U2XHGY_css.mjs').then(m => m.default)}
  },
};
