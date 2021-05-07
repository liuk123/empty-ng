import {
  animation, trigger, animateChild, group,
  transition, animate, style, query, keyframes, state, useAnimation
} from '@angular/animations';

const TIMING = '.5s';

export const rotateAnimation = animation([
  style({
    transform: 'rotate({{x}})'
  }),
  animate(TIMING)
])
export function slideY(a, b) {
  return animation(
    animate(
      '{{ timing }} {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: TIMING, delay: 0, a, b } }
  );
}

export const slideInUp = slideY('-100%', 0);
export const slideInDown = slideY('100%', 0);
export const slideOutUp = slideY(0, '-100%');
export const slideOutDown = slideY(0, '100%');

// 飞入飞出效果
export const triggerFlyInOut = trigger('triggerFlyInOut', [
  state('out', style({ transform: 'translateY(-200%)',position: 'absolute' })),
  transition('out => left-in', [
    style({position:''}),
    useAnimation(slideInUp)
  ]),
  transition('out => right-in', [
    style({position:''}),
    useAnimation(slideInDown)
  ]),
  transition('out => bottom-in', [
    style({position:''}),
    useAnimation(slideOutUp)
  ]),
  transition('out => top-in', [
    style({position:''}),
    useAnimation(slideOutDown)
  ]),
  transition('left-in => out', [
    animate(TIMING)
  ]),
  transition('right-in => out', [
    animate(TIMING)
  ]),
  transition('bottom-in => out', [
    animate(TIMING)
  ]),
  transition('top-in => out', [
    animate(TIMING)
  ])
]);