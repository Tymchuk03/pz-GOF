export function runFactoryMethod(): void {
  interface Transport {
    deliver(): void;
  }

  class Truck implements Transport {
    deliver(): void {
      console.log('Factory Method: Delivery by truck');
    }
  }

  class Ship implements Transport {
    deliver(): void {
      console.log('Factory Method: Delivery by ship');
    }
  }

  abstract class Logistics {
    abstract createTransport(): Transport;

    planDelivery(): void {
      const transport = this.createTransport();
      transport.deliver();
    }
  }

  class RoadLogistics extends Logistics {
    createTransport(): Transport {
      return new Truck();
    }
  }

  class SeaLogistics extends Logistics {
    createTransport(): Transport {
      return new Ship();
    }
  }

  new RoadLogistics().planDelivery();
  new SeaLogistics().planDelivery();
}
