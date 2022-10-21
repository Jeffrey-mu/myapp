import { plugin } from './plugin';
import * as Plugin_0 from '/Users/wjf/Desktop/learn/workspace/myapp/src/app.js';
import * as Plugin_1 from '@@/core/routes/runtime.js';
import * as Plugin_2 from '@@/plugin-access/runtime.js';
import * as Plugin_3 from '@@/plugin-layout/runtime.js';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/wjf/Desktop/learn/workspace/myapp/src/app.js',
  });
  plugin.register({
    apply: Plugin_1,
    path: '@@/core/routes/runtime.js',
  });
  plugin.register({
    apply: Plugin_2,
    path: '@@/plugin-access/runtime.js',
  });
  plugin.register({
    apply: Plugin_3,
    path: '@@/plugin-layout/runtime.js',
  });
