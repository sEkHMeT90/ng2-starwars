import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../core/swapi.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets = [];

  constructor(
    private swapiService:SwapiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.swapiService
      .getPlanets()
      .then((data) => {
        this.planets = data.results;
      });
  }

  goToPlanetDetail(planet:any) {
    // console.log('He recibido', planet);

    const splittedUrl = planet.url.split('/');
    splittedUrl.pop();
    const id = splittedUrl.pop();

    const commands = ['planets', id]; //Ruta
    const navigationExtras = {}
    console.log('navigating to: ', id);

    this.router.navigate(commands, navigationExtras);
  }

}
