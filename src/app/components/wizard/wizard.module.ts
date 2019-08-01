import { NgModule } from '@angular/core';
import { BootstrapWizardDirective } from './wizard.directive';

@NgModule({
    declarations: [
        BootstrapWizardDirective
    ],
    exports: [
        BootstrapWizardDirective
    ]
})
export class BootstrapWizardModule {
}
