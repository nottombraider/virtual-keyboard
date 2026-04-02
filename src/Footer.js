const Footer = () => {
  const footerContent = {
    title: 'There are 2 ways to change the language:',
    languageInfo: [
      'You can change language only by mouse click on fn ( &#x1F310 ) button',
      'Or you can use control ( &#8963; ) for both mouse click or physical keyboard button press',
    ],
  };
  const footer = document.createElement('footer');
  const footerTitle = document.createElement('h3');
  const infoList = document.createElement('ol');

  footer.appendChild(footerTitle);
  footer.appendChild(infoList);

  footerTitle.innerText = footerContent.title;
  footerContent.languageInfo.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    infoList.appendChild(li);
  });

  return footer;
};

export default Footer;
