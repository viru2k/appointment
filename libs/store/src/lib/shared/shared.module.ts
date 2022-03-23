// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';

// Store

import { sharedsReducers } from './reducers/reducer-map';
import { loaderReducerFunction } from './reducers/shared.reducers';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', loaderReducerFunction),
  ],

  providers: [],
})
export class SharedStoreModule {}
