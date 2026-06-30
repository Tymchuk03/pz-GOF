export function runSingleton(): void {
  class AppConfig {
    private static instance: AppConfig;
    public readonly appName = 'GOF Patterns Project';

    private constructor() {}

    static getInstance(): AppConfig {
      if (!AppConfig.instance) {
        AppConfig.instance = new AppConfig();
      }
      return AppConfig.instance;
    }
  }

  const config1 = AppConfig.getInstance();
  const config2 = AppConfig.getInstance();

  console.log('Singleton:', config1.appName);
  console.log('Singleton: same instance =', config1 === config2);
}
