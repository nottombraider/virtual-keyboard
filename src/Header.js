const Header = () => {
  const appleSymbol = '&#63743;';
  const floralHeartSymbol = '&#10086;';
  const isMacOs = navigator.appVersion.includes('Macintosh');
  const titleContent = `MacOS Keyboard ${isMacOs ? appleSymbol : floralHeartSymbol}`;
  const header = document.createElement('header');
  const titleH1 = document.createElement('h1');

  titleH1.innerHTML = titleContent;
  header.appendChild(titleH1);

  return header;
};

export default Header;
