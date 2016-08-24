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
