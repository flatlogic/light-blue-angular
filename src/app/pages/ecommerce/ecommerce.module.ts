import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TagInputModule } from 'ngx-chips';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterComponent } from './product-grid/components/filter/filter.component';
import { FilterDropdownComponent } from './product-grid/components/filterDropdown/filter-dropdown.component';
import { FilterModalComponent } from './product-grid/components/filterModal/filter-modal.component';
import { BannerComponent } from './product-detail/components/banner/banner.component';
import { BagComponent } from './product-detail/components/bag/bag.component';
import { GeneralComponent } from './product-detail/components/general/general.component';
import { SelectsComponent } from './product-detail/components/selects/selects.component';
import { PSectionComponent } from './product-detail/components/p-section/p-section.component';
import { DescriptionComponent } from './product-detail/components/description/description.component';
import { RatingComponent } from './product-detail/components/rating/rating.component';
import { SliderComponent } from './product-detail/components/slider/slider.component';
import { ManagementComponent } from './management/management';
import { ProductsService } from './products.service';
import { ProductEditComponent } from './management/components/product-edit/product-edit';
import { LoaderModule } from '../../components/loader/loader.module';
import { WidgsterModule } from '../../components/widgster/widgster.module';

export const routes = [
  { path: 'product-grid', component: ProductGridComponent, pathMatch: 'full' },
  { path: 'product', component: ProductDetailComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailComponent, pathMatch: 'full' },
  { path: 'management', component: ManagementComponent, pathMatch: 'full' },
  { path: 'management/:id', component: ProductEditComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ProductGridComponent,
    ProductDetailComponent,
    ManagementComponent,
    FilterComponent,
    FilterDropdownComponent,
    FilterModalComponent,
    BannerComponent,
    BagComponent,
    GeneralComponent,
    SelectsComponent,
    PSectionComponent,
    DescriptionComponent,
    RatingComponent,
    SliderComponent,
    ProductEditComponent
  ],
  imports: [
    FormsModule,
    Ng2CarouselamosModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    LoaderModule,
    TagInputModule,
    WidgsterModule,
    ButtonsModule,
    BsDropdownModule,
    CollapseModule,
    AlertModule,
    PopoverModule
  ],
  providers: [
    ProductsService
  ]
})
export class EcommerceModule { }
