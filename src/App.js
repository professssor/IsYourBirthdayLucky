import { useState } from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import "./App.css";

function App() {
  const [birthday, setBirthday] = useState("");
  const [luckyNum, setLukyNum] = useState("");
  const [message, setMessage] = useState("");

  //function to calculate sum
  function calculateSum(date) {
    let sum = 0;

    date = date.replaceAll("-", "");
    for (let digit of date) {
      sum = sum + Number(digit);
    }
    return sum;
  }
  function checkIfNumberIsLucky(sum, luckyNo) {
    console.log(sum, luckyNo);
    if (sum % luckyNo === 0) {
      setMessage(` The number ${luckyNo}  is lucky for you`);
    } else {
      setMessage(` The number  ${luckyNo} is not lucky for you`);
    }
  }

  // click handler function
  function clickhandler() {
    if (birthday && luckyNum) {
      // fucntion to calculate sum
      const sumOfDate = calculateSum(birthday);
      checkIfNumberIsLucky(sumOfDate, luckyNum);

      // function to check if number is lucky
    } else {
      setMessage("please fill both input fields");
    }
  }

  return (
    <div className="App container">
      <section className="header-name">
        <h2>Is your birthday lucky</h2>
      </section>
      <section className="input-container">
        <h3>Enter your Date of Birth</h3>
        <input
          onChange={(e) => setBirthday(e.target.value)}
          type="date"
          id="date-of-birth"
        />
        <h3>Enter your Lucky Number</h3>
        <input
          onChange={(e) => setLukyNum(e.target.value)}
          type="number"
          id="lucky-number"
          placeholder="Enter your  number"
        />
      </section>
      <div className="button-container">
        <button onClick={clickhandler}>CHECK</button>
      </div>

      <div className="mesasge">{message}</div>

      <footer>
        <section className="footer-links">
          {/* footer link */}
          <a href="https://twitter.com/coderGent">
            {" "}
            <FaTwitter />
          </a>

          <a href="https://github.com/professssor/">
            {" "}
            <FaGithub />
          </a>
        </section>
        <h6> © | 2022 | san</h6>
        <p className="privacy-notice">Your data is secure with this website</p>
      </footer>
    </div>
  );
}

export default App;
