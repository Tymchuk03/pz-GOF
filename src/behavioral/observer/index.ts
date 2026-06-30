export function runObserver(): void {
  interface Observer {
    update(message: string): void;
  }

  class User implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
      console.log(`Observer: ${this.name} received message: ${message}`);
    }
  }

  class NewsChannel {
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
      this.observers.push(observer);
    }

    notify(message: string): void {
      this.observers.forEach((observer) => observer.update(message));
    }
  }

  const channel = new NewsChannel();
  channel.subscribe(new User('User 1'));
  channel.subscribe(new User('User 2'));
  channel.notify('New lesson is available');
}
