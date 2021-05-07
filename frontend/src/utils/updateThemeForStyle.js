const UpdateThemeForStyle = (themeOptions) => {
  const html = document.getElementsByTagName('html')[0];
  Object.keys(themeOptions).forEach((property) => {
    if (property === 'name') {
      return;
    }
    html.style.setProperty(property, themeOptions[property]);
  });
};

export default UpdateThemeForStyle;
