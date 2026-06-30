import { runFactoryMethod } from '../creational/factory-method';
import { runBuilder } from '../creational/builder';
import { runSingleton } from '../creational/singleton';
import { runAdapter } from '../structural/adapter';
import { runFacade } from '../structural/facade';
import { runDecorator } from '../structural/decorator';
import { runStrategy } from '../behavioral/strategy';
import { runObserver } from '../behavioral/observer';

function runSection(title: string, callback: () => void): void {
  console.log(`\n===== ${title} =====`);
  callback();
}

runSection('Creational: Factory Method', runFactoryMethod);
runSection('Creational: Builder', runBuilder);
runSection('Creational: Singleton', runSingleton);
runSection('Structural: Adapter', runAdapter);
runSection('Structural: Facade', runFacade);
runSection('Structural: Decorator', runDecorator);
runSection('Behavioral: Strategy', runStrategy);
runSection('Behavioral: Observer', runObserver);
