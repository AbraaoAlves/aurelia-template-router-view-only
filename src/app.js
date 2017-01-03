
export class App {

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';

    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home.html' },
      { route: 'about', name: 'about', moduleId: './about.html' }
    ]);
  }
}
