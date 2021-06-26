const isCharButton = (keyCode) => keyCode >= 65 && keyCode <= 90;
const getButtonChar = (shiftKey, capsLockKey, keyObj) => {
  const [char, modifiedChar] = keyObj.key;

  if (shiftKey) {
    return keyObj.key[1] || keyObj.key[0];
  }
  if (capsLockKey) {
    return isCharButton(keyObj.keyCode) ? modifiedChar : char;
  }
  return char;
};

export default getButtonChar;
