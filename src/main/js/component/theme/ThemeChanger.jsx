import React from 'react';

export class ThemeChanger extends React.Component {

  constructor(props) {
    super(props);
  }

  onThemeChange(themeName) {
    console.log("THEME CHANGE TO ", themeName);
    var fileref = document.createElement("link");
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = "css/" + themeName + ".css";
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }

  render() {
    return (
      <div>
        <p>Theme changer :</p>
        <div>
          <a id="theme1" href="#" onClick={() => this.onThemeChange("theme1")}>Theme 1</a>
        </div>
        <div>
          <a id="theme2" href="#" onClick={() => this.onThemeChange("theme2")}>Theme 2</a>
        </div>
      </div>
    );
  }
}


