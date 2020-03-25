import { trigger, state, style, transition, animate } from '@angular/animations';

export enum SlideUpDownState {
  expanded = 'expanded',
  collapsed = 'collapsed'
}

export const slideUpDownAnimation = [
  trigger('slideUpDown', [
    state(SlideUpDownState.expanded, style({ 'height': '*' })),
    state(SlideUpDownState.collapsed, style({ 'height': '0px' })),
    transition(`${SlideUpDownState.expanded} <=> ${SlideUpDownState.collapsed}`, animate('150ms ease-in-out')),
  ])
];

