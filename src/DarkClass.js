import React, { useState } from "react";
import "./Dark2.css";

const DarkClass = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDark = () => {
        setDarkMode (!darkMode);
    }
    return (
        <div id="mode" className={'${darkMode ? "darkmode" : "lightmode"}'}>
  <div style={{ display: "flex", columnGap: 900, marginLeft: 20 }}>
    <div style={{ display: "flex", columnGap: 15 }}>
      <h3>THEPublisher</h3>
      <a href="#">Home</a>
      <a href="#">About Us</a>
    </div>
    <div style={{ display: "flex", columnGap: 10 }}>
      <button className="btn one ${darkMode ? 'btn-warning : 'btn-dark''}" onClick={toggleDark}>
        ${darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {/* <button className="two">
        Day Mode
      </button> */}
    </div>
  </div>
  <div style={{ display: "flex", marginLeft: 20, columnGap: 80 }}>
    <div>
      <img src="copywriting.jpg" alt="copywriting" width={350} height={350} />
    </div>
    <div style={{ marginTop: 25 }} id="text">
      <h1>Online Book Publishing</h1>
      <p>We bring your published books to your doorsteps</p>
      <span>
        Publishing is the ability of making information, music, software and
        other content available to the
      </span>
      <br />
      <span>
        public for sale or for free. Traditionally, the term refers to the
        creation and distribution of printed works. such as
      </span>
      <span>books</span>
      ____________________________________________________________________________________________________
      <br />
      <br />
      <span>
        Publishing is the ability of making information, music, software and
        other content available to the
      </span>
      <br />
      <span>
        public for sale or for free. Traditionally, the term refers to the
        creation and distribution of printed works. such as
      </span>
      <span>books</span>
      <br />
      <br />
      <button className="three">Buy Now</button>
    </div>
  </div>
</div>

    )
}

export default DarkClass;