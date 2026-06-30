export function runDecorator(): void {
  interface Coffee {
    cost(): number;
    description(): string;
  }

  class SimpleCoffee implements Coffee {
    cost(): number {
      return 20;
    }

    description(): string {
      return 'Simple coffee';
    }
  }

  class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}

    cost(): number {
      return this.coffee.cost() + 5;
    }

    description(): string {
      return `${this.coffee.description()} + milk`;
    }
  }

  const coffee = new MilkDecorator(new SimpleCoffee());
  console.log(`Decorator: ${coffee.description()}, cost = ${coffee.cost()}`);
}
