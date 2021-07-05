const Header = () => {
  const appleSymbol = '&#63743;';
  const isMacOs = navigator.appVersion.includes('Macintosh');
  const titleContent = `MacOS Keyboard ${isMacOs ? appleSymbol : ''}`;
  const header = document.createElement('header');
  const titleH1 = document.createElement('h1');

  titleH1.innerHTML = titleContent;
  header.appendChild(titleH1);

  return header;
};

export default Header;
