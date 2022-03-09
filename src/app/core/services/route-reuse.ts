import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router'
import { Subject } from 'rxjs'

export class RouteMsg {
    constructor(public type: string, public url: string, public route: ActivatedRouteSnapshot) { }
}

export class AppReuseStrategy implements RouteReuseStrategy {

    private static routeText$ = new Subject<RouteMsg>()
    private static handlers: Map<string, DetachedRouteHandle> = new Map()
    public static routeReuseEvent = AppReuseStrategy.routeText$.asObservable()
    /**
     * 确定是否应分离此路由（及其子树）以供以后重用。若 `true` 会触发 `store
     * 离开的路由，是否储存
     * @param route 
     * @returns 
     */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (this.hasInValidRoute(route)) {
            return false
        }
        AppReuseStrategy.routeText$.next(new RouteMsg('detach', this.getUrl(route), route))
        return Boolean(route.data.keep)
    }
    /**
     * 存储分离的路线 存储“null”值应删除以前存储的值
     * 储存路由
     * @param route 
     * @param handle 
     */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        AppReuseStrategy.handlers.set(this.getUrl(route), handle)
    }
    /**
     * 确定是否应重新附着此路由（及其子树）
     * 决定是否允许应用缓存数据
     * @param route 
     * @returns 
     */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        if (this.hasInValidRoute(route)) {
            return false
        }
        AppReuseStrategy.routeText$.next(new RouteMsg('attach', this.getUrl(route), route))
        return AppReuseStrategy.handlers.has(this.getUrl(route))
    }
    /**
     * 检索以前存储的路由
     * 查询储存的路由
     * @param route 
     * @returns 
     */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        if (this.hasInValidRoute(route)) return null
        return AppReuseStrategy.handlers.get(this.getUrl(route))||null
    }
    /**
     * 确定是否应重用路由
     * 决定是否应该进行复用路由处理
     * @param future 
     * @param curr 
     * @returns 
     */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        let ret = future.routeConfig === curr.routeConfig
        if (!ret) return false
       
        const path = ((future.routeConfig && future.routeConfig.path) || '') as string
        if (path.length > 0 && ~path.indexOf(':')) {
            ret = this.getUrl(future) === this.getUrl(curr)
        }
        return ret
    }

    hasInValidRoute(route: ActivatedRouteSnapshot): boolean {
        return !route.routeConfig || !!route.routeConfig.loadChildren || !!route.routeConfig.children;
    }
    getTruthRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
        let next = route;
        while (next.firstChild) next = next.firstChild;
        return next;
    }
    /**
     * 根据快照获取URL地址
     */
    getUrl(route: ActivatedRouteSnapshot): string {
        let next = this.getTruthRoute(route);
        const segments: string[] = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent!;
        }
        const url = `/${segments
            .filter(i => i)
            .reverse()
            .join('/')}`;
        return url;
    }
    getRouteUrl(route: ActivatedRouteSnapshot) {
        const path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    }
}

//在对应组件订阅该对象
//此时组件不再重新初始化，以前放在Init和Destroy钩子里做的事情可能需要考虑找个时机来做，可以使rxjs订阅来做，修改策略代码，增加subject，
// AppReuseStrategy. getRouteText().subscrib(res => {
//     if(res.res === this.url) {
//       if(res.type === 'detach') {
//         // 组件切换出
//       } else {
//         // 组件恢复时
//       }
//     }
//   })