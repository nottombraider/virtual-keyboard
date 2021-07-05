import keyboardMacOsEN from './keyboardMacOsEN';
import keyboardMacOsRU from './keyboardMacOsRU';
import textarea from './Textarea';
import KeyboardButton from './KeyboardButton';
import getCssClasses from './cssHandlers';
import getButtonChar from './buttonHandlers';

class Keyboard {
  constructor() {
    this.shiftKey = false;
    this.capsLockKey = false;
    this.language = localStorage.getItem('language') || 'en';
    this.keyboardMacOS = this.getKeyboardLanguage();
    this.ref = null;
    this.arrowContainer = null;
    this.buttonClickHandler = this.buttonClickHandler.bind(this);

    this.init();
  }

  init() {
    this.arrowContainer = document.createElement('div');
    this.ref = document.createElement('div');
    this.ref.className = 'keyboard-container';

    localStorage.setItem('language', this.language);

    document.addEventListener('keydown', (event) => {
      textarea.getRef().focus();

      const buttonRef = document.getElementById(event.code);
      let char = '';

      if (buttonRef) {
        char = buttonRef.innerHTML;
        buttonRef.className += ' button-active';

        setTimeout(() => {
          const buttonCssClasses = buttonRef.className.split(' ');
          buttonCssClasses.pop();
          buttonRef.className = buttonCssClasses.join(' ');
        }, 200);
      }

      this.buttonClickHandler(event, 'keydown', char);
    });

    document.addEventListener('keyup', (event) => {
      if (event.code === 'CapsLock') {
        this.buttonClickHandler(event, 'keyup');
      }
    });

    return this;
  }

  getKeyboardLanguage() { return this.language === 'en' ? keyboardMacOsEN : keyboardMacOsRU; }

  getRef() { return this.ref; }

  reRender() {
    this.ref.innerHTML = '';
    this.arrowContainer.innerHTML = '';

    this.render();
  }

  buttonClickHandler(event, eventType, char = '') {
    const { code } = event;

    switch (code) {
      case 'Tab':
        if (eventType === 'keydown') event.preventDefault();

        textarea.getRef().focus();
        textarea.addContent(' '.repeat(3)).update();
        break;
      case 'Backspace':
      case 'Enter':
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowRight':
        if (eventType === 'click') textarea.handleSpecialButtonAction(code);

        if (eventType === 'keydown' && code === 'Enter') {
          const enterButtonRef = document.getElementById(code);
          enterButtonRef.className += ' enter-button-active-after';

          setTimeout(() => {
            const buttonCssClasses = enterButtonRef.className.split(' ');
            buttonCssClasses.pop();
            enterButtonRef.className = buttonCssClasses.join(' ');
          }, 190);
        }
        break;
      case 'CapsLock':
        this.capsLockKey = !this.capsLockKey;

        this.reRender();
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.shiftKey = true;

        setTimeout(() => {
          this.shiftKey = false;

          this.reRender();
        }, 500);

        this.reRender();
        break;
      case 'fn':
      case 'ControlLeft':
        this.changeLanguage();
        break;
      case 'AltLeft':
      case 'AltRight':
      case 'MetaLeft':
      case 'MetaRight':
        break;
      default:
        if (eventType === 'click') {
          textarea.addContent(char).update();
        }
        break;
    }
  }

  changeLanguage() {
    this.language = this.language === 'en' ? 'ru' : 'en';

    localStorage.removeItem('language');
    localStorage.setItem('language', this.language);

    this.keyboardMacOS = this.getKeyboardLanguage();

    this.reRender();
  }

  render() {
    this.keyboardMacOS.forEach((row1) => {
      const keyboardRow = document.createElement('div');

      keyboardRow.className = 'keyboard-row';

      row1.forEach((keyObj) => {
        const keyButton = new KeyboardButton();
        const buttonChar = getButtonChar(this.shiftKey, this.capsLockKey, keyObj);
        let keyButtonCssClasses = getCssClasses(keyObj.code);

        if (this.capsLockKey && keyObj.code === 'CapsLock') keyButtonCssClasses += ' caps-shift-active';
        if (this.shiftKey && keyObj.code.includes('Shift')) keyButtonCssClasses += ' caps-shift-active';

        keyButton.setChar(buttonChar).setCode(keyObj.code);
        keyButton.setClassNames(keyButtonCssClasses);
        keyButton.clickHandler(this.buttonClickHandler);

        if (keyObj.code === 'ArrowUp' || keyObj.code === 'ArrowDown') {
          this.arrowContainer.appendChild(keyButton.getRef());
          keyboardRow.appendChild(this.arrowContainer);
        } else {
          keyboardRow.appendChild(keyButton.getRef());
        }
      });

      this.ref.appendChild(keyboardRow);
    });
  }
}

export default new Keyboard();
