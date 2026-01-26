
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
    'index.csr.html': {size: 859, hash: '01f05d882031e204bcf327d5e96ead64291a2460272b4744a2fcdd7c746d4282', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: '13893ddb7025d9b935690d2aebe40032b9492a00958315c56461358f2ff8e098', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13987, hash: '5f232bc7788df7f17e3973efa8498eb4f354470cbf26e46125c2a08911f8ee49', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AHGEH5LC.css': {size: 182, hash: 'lKzg+elY7pc', text: () => import('./assets-chunks/styles-AHGEH5LC_css.mjs').then(m => m.default)}
  },
};
