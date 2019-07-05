import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function seive(n) {
  if (n < 1) return null;

  const primes = [
    false, // 0
    false, // 1
    true, // 2
    ...Array.from(Array(n - 2), (e, i) => {
      return true;
    })
  ];

  for (let i = 2; i < primes.length ** 0.5; i++) {
    // start at index 2
    // no need to loop past sqrt n (length)
    if (primes[i]) {
      // remove every multiple above the current prime number
      for (let j = i * i; j < primes.length; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

function App() {
  const primes = seive(10000); // list of all primes and none primes under 10,000
  const [interactedPrime, setInteractedPrime] = useState(2);

  return (
    <div className="App">
      <h1>Fun with Primes</h1>
      <p>{interactedPrime ? `Prime: ${interactedPrime}` : ""}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          border: "solid 1px black"
        }}
      >
        {primes.map((n, i) => (
          <div
            key={i}
            onClick={() => n && setInteractedPrime(i)}
            style={{
              background: n ? "red" : "",
              width: "10px",
              height: "10px"
            }}
          />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
