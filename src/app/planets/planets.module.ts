import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { PlanetListComponent } from './planet-list/planet-list.component';
import {RouterModule} from "@angular/router";

import {routes} from "./planets.routes";
import { InhabitantsPipe } from './inhabitants.pipe';
import { ListItemComponent } from './planet-list/list-item/list-item.component';
import { PlanetComponent } from './planet/planet.component';


@NgModule({
  declarations: [PlanetListComponent, InhabitantsPipe, ListItemComponent, PlanetComponent],
  imports: [
    CommonModule,
    CoreModule.forChild(),
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class PlanetsModule { }
