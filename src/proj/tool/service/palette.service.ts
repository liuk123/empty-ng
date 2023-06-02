import { Injectable } from '@angular/core'
type PixelData = [number, number, number];
class Node {
  static leafNum = 0;
  static toReduce: Node[][] = new Array(8).fill(0).map(() => []);

  children: (Node | null)[] = new Array(8).fill(null);
  isLeaf = false;
  r = 0;
  g = 0;
  b = 0;
  childrenCount = 0;

  constructor(info?: { index: number; level: number }) {
    if (!info) return;
    if (info.level === 7) {
      this.isLeaf = true;
      Node.leafNum++;
    } else {
      Node.toReduce[info.level].push(this);
      Node.toReduce[info.level].sort(
        (a, b) => a.childrenCount - b.childrenCount
      );
    }
  }

  addColor(color: PixelData, level: number) {
    if (this.isLeaf) {
      this.childrenCount++;
      this.r += color[0];
      this.g += color[1];
      this.b += color[2];
    } else {
      let str = "";
      const r = color[0].toString(2).padStart(8, "0");
      const g = color[1].toString(2).padStart(8, "0");
      const b = color[2].toString(2).padStart(8, "0");

      str += r[level];
      str += g[level];
      str += b[level];
      const index = parseInt(str, 2);

      if (this.children[index] === null) {
        this.children[index] = new Node({
          index,
          level: level + 1,
        });
      }
      (this.children[index] as Node).addColor(color, level + 1);
    }
  }
}
@Injectable()
export class PaletteService{
  constructor() {}

  getImageData(url: string): Promise<ImageData> {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = url
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = img.width
        canvas.height = img.height
        context.drawImage(img, 0, 0)
        let imgData = context.getImageData(0, 0, canvas.width, canvas.height)
        resolve(imgData)
      }
      img.onerror = (e) => {
        reject(e)
      }
    })
  }

  private reduceTree() {
    // find the deepest level of node
    let lv = 6;

    while (lv >= 0 && Node.toReduce[lv].length === 0) lv--;
    if (lv < 0) return;

    const node = Node.toReduce[lv].pop() as Node;

    // merge children
    node.isLeaf = true;
    node.r = 0;
    node.g = 0;
    node.b = 0;
    node.childrenCount = 0;
    for (let i = 0; i < 8; i++) {
      if (node.children[i] === null) continue;
      const child = node.children[i] as Node;
      node.r += child.r;
      node.g += child.g;
      node.b += child.b;
      node.childrenCount += child.childrenCount;
      Node.leafNum--;
    }

    Node.leafNum++;
  }
  private colorsStats(node: Node, record: Record<string, number>) {
    if (node.isLeaf) {
      const r = (~~(node.r / node.childrenCount))
        .toString(16)
        .padStart(2, "0");
      const g = (~~(node.g / node.childrenCount))
        .toString(16)
        .padStart(2, "0");
      const b = (~~(node.b / node.childrenCount))
        .toString(16)
        .padStart(2, "0");

      const color = "#" + r + g + b;
      if (record[color]) record[color] += node.childrenCount;
      else record[color] = node.childrenCount;

      return;
    }

    for (let i = 0; i < 8; i++) {
      if (node.children[i] !== null) {
        this.colorsStats(node.children[i] as Node, record);
      }
    }
  }

  /**
   * 
   * @param data 
   * @param n 获取颜色数量 
   * @param ratio 精度 min=1
   * @returns 
   */
  deal(data,n=5,ratio=null) {
    const root = new Node();
    Node.toReduce = new Array(8).fill(0).map(() => []);
    Node.leafNum = 0;
    
    let len = data.length
    let r=ratio!==null?ratio:len <= 10000 ? 1 : Math.round(len / 10000)
    for (let i = 0; i <= len - 4; i = i + 4*r) {
      root.addColor([data[i], data[i + 1], data[i + 2]], 0);
    }
    while (Node.leafNum > Math.max(16,n)) this.reduceTree();
    const record: Record<string, number> = {};
    this.colorsStats(root, record);
    return Object.entries(record)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n);
  }
}
