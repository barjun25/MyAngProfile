
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MyAngProfile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MyAngProfile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1031, hash: '8433b2418b48c71547dd78858f2193f3647bdbd3be117e88480761e66202d2e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1126, hash: '33b9d6c90d1c09cf87059e3eb9b41356af96cd3a9fd00017163078ba69aa8c37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18367, hash: '0eab53592bbac256c22a08c2f2fa56924d8e5a0a6f3ad8722b73ac2b35984845', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RQLLAF7M.css': {size: 1243, hash: 'yoPfRuexuCM', text: () => import('./assets-chunks/styles-RQLLAF7M_css.mjs').then(m => m.default)}
  },
};
