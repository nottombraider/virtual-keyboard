const cssGeneralButtonClasses = {
  cssButtonClass: 'button flex justify-center align-center',
  cssSpecialButton: 'button button-special flex',
  cssBottomRowSpecial: 'bottom-row-special',
};

const cssSpecialButtonsClassNames = {
  ArrowUp: `${cssGeneralButtonClasses.cssButtonClass} up-down-button`,
  ArrowDown: `${cssGeneralButtonClasses.cssButtonClass} up-down-button`,
  Backspace: `${cssGeneralButtonClasses.cssSpecialButton} button-special-right button-special-m`,
  Tab: `${cssGeneralButtonClasses.cssSpecialButton} button-special-m`,
  CapsLock: `${cssGeneralButtonClasses.cssSpecialButton} capsLock-button button-special-l`,
  ShiftRight: `${cssGeneralButtonClasses.cssSpecialButton} button-special-right button-special-xl`,
  ShiftLeft: `${cssGeneralButtonClasses.cssSpecialButton} button-special-s`,
  Enter: `${cssGeneralButtonClasses.cssSpecialButton} enter-button`,
  Space: `${cssGeneralButtonClasses.cssSpecialButton} space-button`,
  MetaLeft: `${cssGeneralButtonClasses.cssSpecialButton} button-special-right button-special-m ${cssGeneralButtonClasses.cssBottomRowSpecial}`,
  MetaRight: `${cssGeneralButtonClasses.cssSpecialButton} button-special-m ${cssGeneralButtonClasses.cssBottomRowSpecial}`,
  AltLeft: `${cssGeneralButtonClasses.cssSpecialButton} ${cssGeneralButtonClasses.cssBottomRowSpecial}`,
  AltRight: `${cssGeneralButtonClasses.cssSpecialButton} ${cssGeneralButtonClasses.cssBottomRowSpecial}`,
  ControlLeft: `${cssGeneralButtonClasses.cssSpecialButton} button-special-right ${cssGeneralButtonClasses.cssBottomRowSpecial}`,
};

const getCssClasses = (code) => cssSpecialButtonsClassNames[code]
|| cssGeneralButtonClasses.cssButtonClass;

export default getCssClasses;
