import textarea from './Textarea';
import keyboard from './Keyboard';

class Main {
  constructor() {
    this.ref = null;

    this.init();
  }

  init() {
    const main = document.createElement('main');

    keyboard.render();

    main.appendChild(textarea.getRef());
    main.appendChild(keyboard.getRef());

    this.ref = main;
  }

  getRef() {
    return this.ref;
  }
}

export default new Main();
