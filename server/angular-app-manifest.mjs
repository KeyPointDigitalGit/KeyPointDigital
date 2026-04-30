
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/KeyPointDigital/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MFDYGFL5.js"
    ],
    "route": "/KeyPointDigital"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ARILFFHC.js"
    ],
    "route": "/KeyPointDigital/servizi"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LXZO3CKK.js"
    ],
    "route": "/KeyPointDigital/chi-siamo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y3U6LRIG.js"
    ],
    "route": "/KeyPointDigital/clienti"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TH4JRUNA.js"
    ],
    "route": "/KeyPointDigital/contatti"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G77XCE4J.js"
    ],
    "route": "/KeyPointDigital/privacy"
  },
  {
    "renderMode": 2,
    "redirectTo": "/KeyPointDigital",
    "route": "/KeyPointDigital/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16817, hash: '672251977e6342289de76d3ad2c0cf9fb46c3ae5711698e26d9d5d6ff6c48ec1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16812, hash: 'c1bc08bc0fdf0dcec7c1ab5e55bff1b27ffb7608ce41437bafb7915c8742fe05', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'servizi/index.html': {size: 32731, hash: '7020bd2cc2fa19626ddf3fcec7f858a1a8a5ef808490a136626cc838c2cef50a', text: () => import('./assets-chunks/servizi_index_html.mjs').then(m => m.default)},
    'contatti/index.html': {size: 37370, hash: '424368a96c5e79c11d2c3b16097ebecb86d97710a2aeb96f931917ac8c10cb70', text: () => import('./assets-chunks/contatti_index_html.mjs').then(m => m.default)},
    'index.html': {size: 51346, hash: 'b2f0dd9a3cffd81bdac54cfb36bf35cefa84d7a592f04a7c228b65d013c53c35', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'clienti/index.html': {size: 33381, hash: '6cfca228db9102efd6cc705e41fe54bdc00d92d3662a51d98a5cc020087bbb8a', text: () => import('./assets-chunks/clienti_index_html.mjs').then(m => m.default)},
    'chi-siamo/index.html': {size: 34368, hash: '5b359328f28013fed5c27a0319c9b8549c458124c1cc62f5f6482c90878b49f3', text: () => import('./assets-chunks/chi-siamo_index_html.mjs').then(m => m.default)},
    'privacy/index.html': {size: 31992, hash: 'c8279a07c5c7dae3618ec72d1c89d719bdfd2f01082bad728d87b3e2899fed8e', text: () => import('./assets-chunks/privacy_index_html.mjs').then(m => m.default)},
    'styles-4HD3WDG4.css': {size: 403, hash: 'zJz1q94Bw5I', text: () => import('./assets-chunks/styles-4HD3WDG4_css.mjs').then(m => m.default)}
  },
};
