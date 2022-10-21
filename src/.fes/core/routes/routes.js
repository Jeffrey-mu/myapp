import { createRouter as createVueRouter, createWebHashHistory, ApplyPluginsType } from '/Users/wjf/Desktop/learn/workspace/myapp/node_modules/@fesjs/runtime';
import { plugin } from '@@/core/plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/wjf/Desktop/learn/workspace/myapp/src/.fes/plugin-layout/index.js').default,
    "children": [
      {
        "path": "/",
        "component": require('/Users/wjf/Desktop/learn/workspace/myapp/src/pages/index.vue').default,
        "name": "index",
        "meta": {
          "name": "index",
          "title": "首页"
        },
        "count": 5
      }
    ]
  }
];
  return routes;
}

const ROUTER_BASE = '';
let router = null;
let history = null;
export const createRouter = (routes) => {
  const createHistory = plugin.applyPlugins({
    key: 'modifyCreateHistory',
    type: ApplyPluginsType.modify,
    args: {
      base: ROUTER_BASE
    },
    initialValue: createWebHashHistory,
  });
  history = createHistory(ROUTER_BASE);
  // 修改routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });
  router = createVueRouter({
    history,
    routes
  });

  plugin.applyPlugins({
    key: 'onRouterCreated',
    type: ApplyPluginsType.event,
    args: { router, history },
  });

  return router;
};

export const getRouter = ()=>{
    if(!router){
        console.warn(`[preset-build-in] router is null`)
    }
    return router;
}

export const getHistory = ()=>{
    if(!history){
        console.warn(`[preset-build-in] history is null`)
    }
    return history;
}

export const destroyRouter = ()=>{
    router = null;
    history = null;
}

export const defineRouteMeta = (param)=>{
    return param
}
