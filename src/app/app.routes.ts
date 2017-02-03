import {Routes} from "@angular/router";
import {NotFoundComponent} from "./core/not-found/not-found.component";

export const routes:Routes = [
  {
    path: '',
    pathMatch: 'full', //que el path coincida al 100%
    redirectTo: 'planets' //hace referencia a la ruta 'planets' declarada en planets.routes
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
