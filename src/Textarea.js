class Textarea {
  constructor() {
    this.content = [];
    this.ref = null;
    this.cursorPosition = 0;

    this.init();
  }

  init() {
    const textArea = document.createElement('textarea');

    textArea.className = 'textarea';
    textArea.addEventListener('input', () => {
      this.content = textArea.value.split('');
      this.cursorPosition = this.content.length;
    });

    this.ref = textArea;

    return this;
  }

  addContent(content) {
    this.content.splice(this.cursorPosition, 0, content);

    this.cursorPosition += 1;

    this.update();

    return this;
  }

  handleSpecialButtonAction(actionType) {
    switch (actionType) {
      case 'Backspace':
        if (this.cursorPosition) {
          this.content.splice(this.cursorPosition - 1, 1);
          this.cursorPosition -= 1;
        }

        this.update();
        break;
      case 'Enter':
        this.addContent('\n');

        break;
      case 'ArrowLeft':
        this.ref.focus();
        this.ref.setSelectionRange(this.cursorPosition, this.cursorPosition);

        if (this.cursorPosition) this.cursorPosition -= 1;

        this.update();

        break;
      case 'ArrowRight':
        this.ref.focus();
        this.ref.setSelectionRange(this.cursorPosition, this.cursorPosition);

        if (this.content.length !== this.cursorPosition) {
          this.cursorPosition += 1;
        }

        this.update();

        break;
      case 'ArrowUp':
        this.ref.focus();
        this.ref.setSelectionRange(0, 0);

        this.cursorPosition = 0;

        break;
      case 'ArrowDown':
        this.cursorPosition = this.content.length;

        this.ref.focus();
        this.ref.setSelectionRange(this.cursorPosition, this.cursorPosition);

        break;
      default:
        break;
    }
  }

  update() {
    this.ref.value = this.content.join('');

    return this;
  }

  getRef() {
    return this.ref;
  }
}

export default new Textarea();
