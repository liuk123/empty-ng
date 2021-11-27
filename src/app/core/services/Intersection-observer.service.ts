import { Injectable, Renderer2 } from '@angular/core';

@Injectable({providedIn: 'root'})
export class IntersectionObserverService {
  constructor() {}

  load(){
    return new IntersectionObserver((items, observer)=>{
      items.forEach(item=>{
        if(item.isIntersecting) {
          // if(item.target.hasAttribute('data-intersrc')){
          //   item.target.setAttribute('src', item.target.getAttribute('data-intersrc'))
          //   item.target.removeAttribute('data-intersrc')
          // }
          if(item.target.hasAttribute('data-type')){
            let tem = item.target.getAttribute('data-type')
            if(tem=='attr'){
              item.target.setAttribute(
                item.target.getAttribute('data-attrname'),
                item.target.getAttribute('data-source'))
            }else if(tem == 'className'){
              item.target.classList.add(item.target.getAttribute('data-source'))
            }
            item.target.removeAttribute('data-source')
          }
          observer.unobserve(item.target)
        }
      })
    })
  }
}
