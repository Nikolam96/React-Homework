import React, { useState, useEffect, useRef, useContext } from "react";
import { Value } from "../App";
import axios from "axios";
import PropTypes from "prop-types";

export function Test({ ime, prezime }) {
  // const { prezime, ime } = useContext(Value);
  const [backColor, setColor] = useState("");
  const [counter, setCounter] = useState(0);
  const [api, setApi] = useState();
  const [array, setarray] = useState([]);

  const ref = useRef("");
  const deleted = useRef("");

  const controller = new AbortController();

  useEffect(() => {
    document.body.style.backgroundColor = backColor ? backColor : "";
    // document.body.style.color = !backColor ? "black" : "white";
    console.log(backColor);
  }, [backColor]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random",
          {
            signal: controller.signal,
          }
        );

        setApi(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
    ref.current = api?.value || "";
    array.push(ref.current);

    return () => {
      controller.abort();
    };
  }, [counter]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission behavior
          e.target.remove();
          setColor(e.target.nikola.value); // Set backColor using input value
        }}
      >
        <input type="text" name="nikola" placeholder="Enter a color" />{" "}
        <input type="text" name="color" placeholder="Enter a color" />{" "}
        {/* Name the input field */}
        <input type="submit" value="Set Color" />
      </form>
      <button onClick={() => setCounter(() => counter + 1)}>Get joke</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>previous joke:{ref.current}</h3>
      <h3>deleted joke:{deleted.current}</h3>
      <br />
      <br />
      <br />
      <h3>{api && api.value}</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      {array &&
        array.map((v, i) => {
          return (
            <div key={i}>
              <h2>{v}</h2>
              <br />
              {v && (
                <button
                  onClick={() => {
                    const newArray = [...array];
                    deleted.current = newArray.splice(i, 1);
                    setarray(newArray);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
    </>
  );
}

Test.propTypes = {
  ime: PropTypes.string.isRequired,
  prezime: PropTypes.string.isRequired,
};
