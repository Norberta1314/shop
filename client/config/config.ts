import { IConfig, IPlugin } from "umi-types";
import defaultSettings from "./defaultSettings"; // https://umijs.org/config/
import slash from "slash2";
import themePluginConfig from "./themePluginConfig";

const {pwa} = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

export const imgUrlBase = "http://shopimage.norberta.me";

const {ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION} = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === "site";
const plugins: IPlugin[] = [
  [
    "umi-plugin-react",
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: false,
      dynamicImport: {
        loadingComponent: ".\u002Fcomponents\u002FPageLoading\u002Findex",
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
          workboxPluginMode: "InjectManifest",
          workboxOptions: {
            importWorkboxFrom: "local",
          },
        }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    "umi-plugin-pro-block",
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    "umi-plugin-ga",
    {
      code: "UA-72788897-6",
    },
  ]);
  plugins.push(["umi-plugin-antd-theme", themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      name: "空白页面",
      icon: "smile",
      path: "/page/edit",
      component: "./page/edit",
    },
    {
      path: "/user",
      component: "../layouts/UserLayout",
      routes: [
        {
          name: "login",
          path: "/user/login",
          component: "./user/login",
        },
      ],
    },
    {
      path: "/",
      component: "../layouts/SecurityLayout",
      routes: [
        {
          path: "/",
          component: "../layouts/BasicLayout",
          authority: ["admin", "user"],
          routes: [
            {
              path: "/",
              redirect: "/welcome",
            },
            {
              path: "/welcome",
              name: "welcome",
              icon: `${imgUrlBase}/home.png`,
              component: "./Welcome",
            },
            {
              path: "/admin",
              name: "admin",
              icon: "crown",
              component: "./Admin",
              authority: ["admin"],
            },
            {
              name: "店铺装修",
              icon: `${imgUrlBase}/page.png`,
              path: "/page/manage",
              component: "./page/manage",
            }, {
              name: "商品管理",
              icon: `${imgUrlBase}/good.png`,
              path: "/good/manage",
              component: "./good/manage",
            },
            {
              component: "./404",
            },
          ],
        },
        {
          component: "./404",
        },
      ],
    },
    {
      component: "./404",
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    "primary-color": "#ffa161",
    "link-color": "#ffa161",
    "font-size-base": "12px",
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || "", // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string
    ) => {
      if (
        context.resourcePath.includes("node_modules") ||
        context.resourcePath.includes("ant.design.pro.less") ||
        context.resourcePath.includes("global.less")
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace(".less", "");
        const arr = slash(antdProPath)
          .split("/")
          .map((a: string) => a.replace(/([A-Z])/g, "-$1"))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join("-")}-${localName}`.replace(/--/g, "-");
      }

      return localName;
    },
  },
  manifest: {
    basePath: "/",
  },
  // chainWebpack: webpackPlugin(webpackConfig),
  proxy: {
    "/server/api/": {
      target: "https://preview.pro.ant.design/",
      changeOrigin: true,
      pathRewrite: {"^/server": ""},
    },
    "/api/": {
      target: "http://localhost:9000",
      changeOrigin: true,
    }
  },
} as IConfig;

