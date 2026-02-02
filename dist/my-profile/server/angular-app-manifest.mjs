
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
    'index.csr.html': {size: 1244, hash: 'cf6e18a22624031894ad423326d1bbaaaef0a2e2bc39490f5ec3135ae977c001', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1091, hash: '89253e1b306c2b900e63b1de3bcd0e677278b6b47d783c51579456f46ab679af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18517, hash: '42b5d59e1acd6f0950a9f49e75bc2fe5cccc15be3f117689c1c65447d16799be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MW5FZHQJ.css': {size: 2182, hash: 'tc7Baje1gI0', text: () => import('./assets-chunks/styles-MW5FZHQJ_css.mjs').then(m => m.default)}
  },
};
