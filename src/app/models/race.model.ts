import { Car } from "./car.model";

export interface Race {
    carCompetitor : Car[]; 
    round: number;
    distanceKmPerRound: number;
    status: number;
}