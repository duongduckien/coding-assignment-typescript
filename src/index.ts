class App {

  public static bootstrap(): App {
    return new App();
  }

  constructor() {
    console.log('Running project');
  }

}

App.bootstrap();