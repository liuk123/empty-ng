import {
  animation, trigger,
  transition, animate, style, keyframes, state, useAnimation, query, animateChild
} from '@angular/animations';

const TIMING = '.5s';

export function fadeInX(a, b) {
  return animation(
    animate(
      '{{ timing }} {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: TIMING, delay: 0, a, b } }
  );
}
export function fadeInY(a, b) {
  return animation(
    animate(
      '{{ timing }} {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: TIMING, delay: 0, a, b } }
  );
}
export const fadeIn = fadeInX(0, 0);
export const fadeInDown = fadeInY('-100%', 0);
export const fadeInUp = fadeInY('100%', 0);
export const fadeInLeft = fadeInX('-100%', 0);
export const fadeInRight = fadeInX('100%', 0);

export function fadeOutX(a, b) {
  return animation(
    animate(
      '{{ timing }} {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: TIMING, delay: 0, a, b } }
  );
}

export function fadeOutY(a, b) {
  return animation(
    animate(
      '{{ timing }} {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: TIMING, delay: 0, a, b } }
  );
}

export const fadeOut = fadeOutX(0, 0);
export const fadeOutDown = fadeOutY(0, '-100%');
export const fadeOutUp = fadeOutY(0, '100%');
export const fadeOutLeft = fadeOutX(0, '-100%');
export const fadeOutRight = fadeOutX(0, '100%');


export function slideX(a, b) {
  return animation(
    animate(
      '{{ timing }} {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: TIMING, delay: 0, a, b } }
  );
}

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
export const slideInLeft = slideX('-100%', 0);
export const slideInRight = slideX('100%', 0);
export const slideOutUp = slideY(0, '-100%');
export const slideOutDown = slideY(0, '100%');
export const slideOutLeft = slideX(0, '-100%');
export const slideOutRight = slideX(0, '100%');

// 飞入飞出效果
export const triggerFlyInOut = trigger('flyInOut', [
  state('void', style({ opacity: 0 })),
  transition('void => left-in', [
    useAnimation(fadeInLeft)
  ]),
  transition('void => right-in', [
    useAnimation(fadeInRight)
  ]),
  transition('void => bottom-in', [
    useAnimation(fadeInUp)
  ]),
  transition('void => top-in', [
    useAnimation(fadeInDown)
  ]),
  transition('left-in => void', [
    useAnimation(fadeOutLeft)
  ]),
  transition('right-in => void', [
    useAnimation(fadeOutRight)
  ]),
  transition('bottom-in => void', [
    useAnimation(fadeOutUp)
  ]),
  transition('top-in => void', [
    useAnimation(fadeOutDown)
  ]),
]);

// 播放子组件中的动画
export const triggerNgIfAnimation = trigger('ngIfAnimation', [
  transition(':enter, :leave', [
    query('@*', animateChild(), { optional: true })
  ])
]);