import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class IntersectionObserverService {
  constructor() {}

  load(){
    return new IntersectionObserver((items, observer)=>{
      items.forEach(item=>{
        if(item.isIntersecting) {
          item.target.setAttribute('src', item.target.getAttribute('alt'))
          // item.target.removeAttribute('data-src')
          // item.target.getDirectives
          observer.unobserve(item.target)
        }
      })
    })
  }
}
