// 可避免报错, 但是并非标准index.d.ts文件, 后续需要优化
declare module 'dva' {
    var dva: any;
    export function connect(object): Function;
    export default dva;
}
declare module 'dva/router' {
    export class Router {};
    export class Route {};
}
declare module 'dva/routerRedux' {
    var routerRedux: any;
    export default routerRedux;
}
declare module 'dva/fetch' {
    var fetch: any;
    export default fetch;
}
