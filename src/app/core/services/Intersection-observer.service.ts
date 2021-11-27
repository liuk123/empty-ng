import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class IntersectionObserverService {
  constructor() {}

  load(){
    return new IntersectionObserver((items, observer)=>{
      items.forEach(item=>{
        if(item.isIntersecting) {
          if(item.target.hasAttribute('data-src')){
            item.target.setAttribute('src', item.target.getAttribute('data-src'))
            item.target.removeAttribute('data-src')
          }
          observer.unobserve(item.target)
        }
      })
    })
  }
}
