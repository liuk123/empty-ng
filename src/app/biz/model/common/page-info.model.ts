export class PageInfo<T> {

    [key: string]: any;

    constructor(
        public list?: Array<T>, // 实际数据集合
        public pageIndex?: number, // 当前页码
        public pageSize?: number, // 每页行数
        public pages?: number, // 总页数
        public total?: number, // 总行数

        public resultCode?: string,
        public resultMsg?: string,
        public loading?: boolean,
        public expandForm?: boolean,
        public selectedIds?:  Set<number>,
    ) {
        this.pageIndex = pageIndex || 1;
        this.pageSize = pageSize || 10;
        this.pages = pages || 0;
        this.list = list || [];
        this.loading = false;
        this.expandForm = false;
        this.total = total||0
    }

    reset() {
        this.pageIndex = 1;
        this.pageSize = 10;
        this.pages = 0;
        this.list = [];
        this.selectedIds.clear();
    }

}