import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@Banvien/single-spa-demo-page-1",
  app: () => System.import<LifeCycles>("@Banvien/single-spa-demo-page-1"),
  activeWhen: ["/page1"],
});
registerApplication({
  name: "@Banvien/single-spa-demo-nav",
  app: () => System.import<LifeCycles>("@Banvien/single-spa-demo-nav"),
  activeWhen: ["/nav"],
});
start({
  urlRerouteOnly: true,
});
