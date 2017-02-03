import {Routes} from "@angular/router";
import {PlanetListComponent} from "./planet-list/planet-list.component";
import {PlanetComponent} from "./planet/planet.component";

export const routes:Routes = [
  {
    path: 'planets',
    children: [{
      path: '',
      component: PlanetListComponent
    },
    {
      path: '',
      component: PlanetComponent

    }]
  }
]

