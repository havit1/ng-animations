import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  animation,
  useAnimation,
} from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate(
    '1s ease-in',
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(20px)',
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
    ])
  )
);

export let fadeInAnimation = animation(
  [
    style({
      opacity: 0,
    }),
    animate('{{ duration }} {{ easing }}'),
  ],
  {
    params: {
      duration: '1s',
      easing: 'ease-out',
    },
  }
);

export let fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', [
    animate(
      2000,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export let fadeWithTransform = trigger('fadeWithTransform', [
  state(
    'void',
    style({
      opacity: 1,
    })
  ),
  transition(':enter', [
    style({
      transform: 'translateX(-20px)',
    }),
    animate('2s ease-out'),
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation)),
]);
