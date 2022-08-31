import { DOCUMENT } from "@angular/common";
import { inject, InjectionToken } from "@angular/core";
import { fromEvent } from "rxjs";


export const MOUSE_MOVE = new InjectionToken('MOUSE_MOVE123',{
  factory: ()=>{
    const documentRef = inject(DOCUMENT);
    const windowRef = documentRef.defaultView;
    const mousemove$ = fromEvent(windowRef, 'mousemove')
    return mousemove$
  }
})

export const MOUSE_UP = new InjectionToken('MOUSE_UP123',{
  factory: ()=>{
    const documentRef = inject(DOCUMENT);
    const windowRef = documentRef.defaultView;
    const mouseup$ = fromEvent(windowRef, 'mouseup')
    return mouseup$
  }
})

// export const MOUSE_DOWN = new InjectionToken('MOUSE_DOWN123',{
//   factory: ()=>{
//     const documentRef = inject(DOCUMENT);
//     const windowRef = documentRef.defaultView;
//     const mouseup$ = fromEvent(windowRef, 'mousedown')
//     return mouseup$
//   }
// })