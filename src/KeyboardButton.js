class KeyboardButton {
  constructor() {
    this.char = null;
    this.code = null;
    this.classNames = [];
    this.ref = null;

    this.init();
  }

  init() {
    this.ref = document.createElement('div');
  }

  setChar(char) {
    this.char = char;
    this.ref.innerHTML = this.char;

    return this;
  }

  setCode(code) {
    this.code = code;
    this.ref.id = this.code;

    return this;
  }

  setClassNames(classNames) {
    this.classNames = this.classNames ? [...this.classNames, classNames] : [classNames];
    this.ref.className = this.classNames.join(' ');
  }

  getRef() {
    return this.ref;
  }

  clickHandler(callBack) {
    this.ref.addEventListener('click', (event) => {
      callBack({ ...event, code: this.code }, 'click', this.char);
    });
  }
}

export default KeyboardButton;
