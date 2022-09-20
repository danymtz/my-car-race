import { Component } from '@angular/core';
import { Car } from './models/car.model';
import { Pilot } from './models/pilot.model';

import { Race } from './models/race.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-car-race';

  constructor(){
    console.log(this.RACE_CARS_JULY);
    console.log(this.RACE_CARS_AUGUST);
    console.log(this.RACE_CARS_SEPTEMBER);
  }

// ----- Pilotos -----

  piloto1: Pilot = {
    id: 1,
    firstname: 'Juan',
    lastname: 'Lopez',
    nationality: 'Mexican'
  }

  piloto2: Pilot = {
    id: 2,
    firstname: 'Barak',
    lastname: 'Obama',
    nationality: 'American'
  }

  piloto3: Pilot = {
    id: 3,
    firstname: 'Vladimir',
    lastname: 'Putin',
    nationality: 'Russian'
  }

  piloto4: Pilot = {
    id: 4,
    firstname: 'Alex',
    lastname: 'kozlov',
    nationality: 'Russian'
  }

  COMPETTORS: Pilot[] = [this.piloto1, this.piloto2, this.piloto3, this.piloto4]; 

  // ----- Autos -----
  car1: Car = {
    numCar: 8,
    color: 'red',
    pilot: this.piloto1,
    distanceTraveled: 0,
    motionState: false
  }

  car2: Car = {
    numCar: 52,
    color: 'blue',
    pilot: this.piloto2,
    distanceTraveled: 0,
    motionState: false
  }
  // Carro sin piloto
  car3: Car = {
    numCar: 100,
    color: 'green',
    distanceTraveled: 0,
    motionState: false
  }

  car4: Car = {
    numCar: 500,
    color: 'white',
    pilot: this.piloto3,
    distanceTraveled: 0,
    motionState: false
  }

  car5: Car = {
    numCar: 1,
    color: 'purple',
    pilot: this.piloto4,
    distanceTraveled: 0,
    motionState: false
  }

  RACE_CARS_JULY: Car[] = [this.car1, this.car2];
  RACE_CARS_AUGUST: Car[] = [this.car1, this.car2, this.car3, this.car4];
  RACE_CARS_SEPTEMBER: Car[] = [this.car1, this.car2, this.car4, this.car5];


  // Carreras

  race1: Race = {
    carCompetitor: this.RACE_CARS_JULY,
    round: 2,
    distanceKmPerRound: 100,
    status: 0
  }

  race2: Race = {
    carCompetitor: this.RACE_CARS_AUGUST,
    round: 1,
    distanceKmPerRound: 60,
    status: 0
  }

  race3: Race = {
    carCompetitor: this.RACE_CARS_SEPTEMBER,
    round: 2,
    distanceKmPerRound: 70,
    status: 0
  }

  racing: Race[] = [this.race1, this.race2, this.race3];

  initRace(racing: Race){
    racing;
  }
}