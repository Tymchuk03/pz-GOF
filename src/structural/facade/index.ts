export function runFacade(): void {
  class CPU {
    start(): void {
      console.log('Facade: CPU started');
    }
  }

  class Memory {
    load(): void {
      console.log('Facade: Memory loaded');
    }
  }

  class HardDrive {
    read(): void {
      console.log('Facade: Hard drive data read');
    }
  }

  class ComputerFacade {
    private cpu = new CPU();
    private memory = new Memory();
    private hardDrive = new HardDrive();

    startComputer(): void {
      this.cpu.start();
      this.memory.load();
      this.hardDrive.read();
      console.log('Facade: Computer is ready');
    }
  }

  new ComputerFacade().startComputer();
}
