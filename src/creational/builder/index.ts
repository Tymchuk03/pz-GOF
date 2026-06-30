export function runBuilder(): void {
  class Computer {
    private parts: string[] = [];

    addPart(part: string): void {
      this.parts.push(part);
    }

    show(): void {
      console.log('Builder: Computer parts:', this.parts.join(', '));
    }
  }

  class ComputerBuilder {
    private computer = new Computer();

    addCPU(): ComputerBuilder {
      this.computer.addPart('CPU');
      return this;
    }

    addRAM(): ComputerBuilder {
      this.computer.addPart('RAM');
      return this;
    }

    addSSD(): ComputerBuilder {
      this.computer.addPart('SSD');
      return this;
    }

    build(): Computer {
      return this.computer;
    }
  }

  const computer = new ComputerBuilder().addCPU().addRAM().addSSD().build();
  computer.show();
}
