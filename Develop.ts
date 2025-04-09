// src/Vehicle.ts
export abstract class Vehicle {
    constructor(
      public vehicleType: string,
      public make: string,
      public model: string,
      public year: number
    ) {}
  
    abstract performAction(): Promise<void>;
  }
  
  export class Car extends Vehicle {
    constructor(make: string, model: string, year: number) {
      super("Car", make, model, year);
    }
  
    async performAction(): Promise<void> {
      const inquirer = await import("inquirer");
      let exit = false;
      while (!exit) {
        const { action } = await inquirer.prompt({
          type: "list",
          name: "action",
          message: `What would you like to do with your Car?`,
          choices: ["Start engine", "Drive", "Stop engine", "Exit"]
        });
  
        switch (action) {
          case "Start engine":
            console.log("Car engine started.");
            break;
          case "Drive":
            console.log("Car is driving...");
            break;
          case "Stop engine":
            console.log("Car engine stopped.");
            break;
          case "Exit":
            exit = true;
            break;
        }
      }
    }
  }
  
  export class Truck extends Vehicle {
    constructor(
      make: string,
      model: string,
      year: number,
      public bedLength: string
    ) {
      super("Truck", make, model, year);
    }
  
    async performAction(): Promise<void> {
      const inquirer = await import("inquirer");
      let exit = false;
      while (!exit) {
        const { action } = await inquirer.prompt({
          type: "list",
          name: "action",
          message: `What would you like to do with your Truck?`,
          choices: ["Start engine", "Drive", "Stop engine", "Dump bed", "Exit"]
        });
  
        switch (action) {
          case "Start engine":
            console.log("Truck engine started.");
            break;
          case "Drive":
            console.log("Truck is driving...");
            break;
          case "Stop engine":
            console.log("Truck engine stopped.");
            break;
          case "Dump bed":
            console.log("Truck bed dumped!");
            break;
          case "Exit":
            exit = true;
            break;
        }
      }
    }
  }
  
  export class Motorbike extends Vehicle {
    constructor(
      make: string,
      model: string,
      year: number,
      public hasSidecar: boolean
    ) {
      super("Motorbike", make, model, year);
    }
  
    async performAction(): Promise<void> {
      const inquirer = await import("inquirer");
      let exit = false;
      while (!exit) {
        const { action } = await inquirer.prompt({
          type: "list",
          name: "action",
          message: `What would you like to do with your Motorbike?`,
          choices: ["Start engine", "Drive", "Stop engine", "Exit"]
        });
  
        switch (action) {
          case "Start engine":
            console.log("Motorbike engine started.");
            break;
          case "Drive":
            console.log("Motorbike is driving...");
            break;
          case "Stop engine":
            console.log("Motorbike engine stopped.");
            break;
          case "Exit":
            exit = true;
            break;
        }
      }
    }
  }
  