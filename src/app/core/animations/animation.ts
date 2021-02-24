import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

const IMING = 2;

export const rotateAnimation = animation([
  style({
    transform: 'rotate({{x}})'
  }),
  animate(IMING)
])