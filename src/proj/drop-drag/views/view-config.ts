import { Drag1Component } from "../views/drag1/drag1.component";
import { Drag2Component } from "../views/drag2/drag2.component";


export const viewMap = new Map<string, any>();
viewMap.set('Drag1',Drag1Component)
viewMap.set('Drag2',Drag2Component)

// const views=viewMap