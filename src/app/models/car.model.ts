import { Pilot } from "./pilot.model";

export interface Car {
    numCar: number;
    color: string;
    pilot?: Pilot;
    distanceTraveled: number;
    motionState: boolean;
}

function run(c1: Car): void{
    c1.motionState = true;       
}

function currentDistance(c1: Car): void {
    c1.distanceTraveled = 50;
}

function stopCar (c1: Car): void {
    c1.motionState = false;
}
