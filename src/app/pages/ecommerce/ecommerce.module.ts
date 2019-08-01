import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsModule, BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

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

export const routes = [
  {path: 'product-grid', component: ProductGridComponent, pathMatch: 'full'},
  {path: 'product-detail', component: ProductDetailComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    ProductGridComponent,
    ProductDetailComponent,
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
    SliderComponent
  ],
  imports: [
    Ng2CarouselamosModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EcommerceModule {
  public static routes = routes;
}
