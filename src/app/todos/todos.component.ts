import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Component } from '@angular/core';
import {
  bounceOutLeftAnimation,
  fade,
  fadeInAnimation,
  fadeWithTransform,
} from '../animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({
              transform: 'translateY(-20px)',
            }),
            animate(1000),
          ]),
          query('@todoAnimation', stagger(200, animateChild())),
        ]),
      ]),
    ]),
    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms',
          },
        }),
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation),
      ]),
    ]),
    //   trigger('fade', [
    //     state(
    //       'void',
    //       style({
    //         opacity: 0,
    //       })
    //     ),
    //     // * void => * = :enter
    //     // * * => void = :leave
    //     transition(':enter, :leave', [
    //       // style({
    //       //   backgroundColor: 'yellow',
    //       //   opacity: 0,
    //       // }),
    //       animate(
    //         2000
    //         // style({
    //         //   backgroundColor: 'white',
    //         //   opacity: 1,
    //         // })
    //       ),
    //     ]),
    //     // transition('* => void', [
    //     //   animate(
    //     //     2000
    //     //     style({
    //     //      opacity: 0,
    //     //     })
    //     //   ),
    //     // ]),
    //   ]),
  ],
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance',
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted(e) {
    console.log(e);
  }

  animationDone(e) {
    console.log(e);
  }
}
