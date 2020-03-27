import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostBinding,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { WidgsterTitleDirective } from './directives/widgster-title.directive';
import { WidgsterControlsDirective } from './directives/widgster-controls.directive';
import { WidgsterLoaderDirective } from './directives/widgster-loader.directive';
import { slideUpDownAnimation, SlideUpDownState } from './animations/slide-up-down.animation';
import { WidgesterTooltipPosition } from './widgster-tooltip-position.type';
import { WidgsterFooterDirective } from './directives/widgster-footer.directive';

@Component({
  selector: '[widgster]',
  templateUrl: './widgster.component.html',
  styleUrls: ['./widgster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'widgster',
  animations: [slideUpDownAnimation],
  host: { class: 'widget' }
})
export class WidgsterComponent implements OnChanges {
  @ContentChild(WidgsterTitleDirective, { static: false, read: TemplateRef }) public titleTpl: TemplateRef<any>;
  @ContentChild(WidgsterControlsDirective, { static: false, read: TemplateRef }) public controlsTpl: TemplateRef<any>;
  @ContentChild(WidgsterLoaderDirective, { static: false, read: TemplateRef }) public loaderTpl: TemplateRef<any>;
  @ContentChild(WidgsterFooterDirective, { static: false, read: TemplateRef }) public footerTpl: TemplateRef<any>;

  @Input() public title: string;
  @Input() public loading: boolean = false;
  @Input() public titleClass: string | string[];
  @Input() public bodyClass: string | string[];
  @Input() public controlsClass: string | string[];
  @Input() public footerClass: string | string[];
  @Input() public showTooltip: boolean = true;
  @Input() public tooltipPosition: WidgesterTooltipPosition = 'auto';
  @Input() public fullscreenZIndex: number = 10000;
  @Input() public hideBodyOverflow: boolean = true;

  @Input() public optionsControl: boolean = true;
  @Input() public reloadControl: boolean = true;
  @Input() public fullscreenControl: boolean = true;
  @Input() public collapseControl: boolean = true;
  @Input() public closeControl: boolean = true;

  @Input() @HostBinding('class.collapsed') public collapsed: boolean = false;
  @Input() @HostBinding('class.fullscreened') public fullscreened: boolean = false;

  @HostBinding('style.position') public position: string = this.fullscreened ? 'fixed' : null;
  @HostBinding('style.top') public top: string = this.fullscreened ? '0' : null;
  @HostBinding('style.right') public right: string = this.fullscreened ? '0' : null;
  @HostBinding('style.bottom') public bottom: string = this.fullscreened ? '0' : null;
  @HostBinding('style.left') public left: string = this.fullscreened ? '0' : null;
  @HostBinding('style.margin') public margin: string = this.fullscreened ? '0' : null;
  @HostBinding('style.z-index') public zIndex: string = this.fullscreened ? this.fullscreenZIndex.toString() : null;
  @HostBinding('style.display') public display: string;

  @Output() public options: EventEmitter<void> = new EventEmitter();
  @Output() public reload: EventEmitter<void> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();
  @Output() public collapseModeChange: EventEmitter<boolean> = new EventEmitter();
  @Output() public fullscreenModeChange: EventEmitter<boolean> = new EventEmitter();

  public closed: boolean = false;
  public collapseAnimationState: SlideUpDownState;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (Boolean(changes.collapsed)) {
      if (this.collapsed) {
        this.onCollapse();
      } else {
        this.onExpand();
      }
    }
    if (Boolean(changes.fullscreened)) {
      if (this.fullscreened) {
        if (this.hideBodyOverflow) {
          this.document.body.style.overflow = 'hidden';
        } else {
          this.document.body.style.overflow = 'initial';
        }
      }
    }
  }

  public onOptions(): void {
    this.options.emit();
  }

  public onClose(): void {
    this.closed = true;
    this.onExitFullscreenMode();
    this.display = 'none';
    this.close.emit();
  }

  public onReload(): void {
    this.reload.emit();
  }

  public onCollapse(): void {
    this.collapsed = true;
    this.collapseAnimationState = SlideUpDownState.collapsed;
    this.collapseModeChange.next(true);
  }

  public onExpand(): void {
    this.collapsed = false;
    this.collapseAnimationState = SlideUpDownState.expanded;
    this.collapseModeChange.next(false);
  }

  public onFullscreenMode(): void {
    this.fullscreened = true;
    this.position = 'fixed';
    this.top = '0';
    this.right = '0';
    this.bottom = '0';
    this.left = '0';
    this.margin = 'initial';
    this.zIndex = this.fullscreenZIndex.toString();
    if (this.hideBodyOverflow) {
      this.document.body.style.overflow = 'hidden';
    }
    this.fullscreenModeChange.emit(true);
  }

  public onExitFullscreenMode(): void {
    this.fullscreened = false;
    this.position = null;
    this.top = null;
    this.right = null;
    this.bottom = null;
    this.left = null;
    this.margin = null;
    this.zIndex = null;
    this.document.body.style.overflow = null;
    this.fullscreenModeChange.emit(false);
  }
}
