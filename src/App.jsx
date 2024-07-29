import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [value, setValue] = useState("");

  const toggleDark = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  const change = () => {
    console.log("hello");
  };

  return (
    <>
      <ChakraProvider>
        <div className="h-screen w-screen bg-white flex flex-col justify-center items-center dark:bg-[rgb(29,41,57)] text-xl transition delay-75">
          <div className="switch flex w-full md:w-96 justify-end">
            <Switch id="email-alerts" className="" onChange={toggleDark} />
          </div>
          <div className="calculator border dark:bg-[rgb(14,23,40)] w-full md:w-96 grid grid-cols-3 grid-rows-7 p-4 gap-2">
            <div className="input bg-white col-span-3">
              <input
                type="text"
                className="bg-slate-50 w-full h-full shadow-sm dark:bg-[rgb(29,41,57)] text-right text-4xl font-bold dark:text-white px-2"
                placeholder="0"
                value={value}
              />
            </div>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              onClick={(e) => {
                setValue("");
              }}
            >
              AC
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={"+"}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              +
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={"-"}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              -
            </button>

            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={"*"}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              x
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={"/"}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              /
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={"."}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              .
            </button>

            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={7}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              7
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={8}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              8
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={9}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              9
            </button>

            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={4}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              4
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={5}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              5
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={6}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              6
            </button>

            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={1}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              1
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={2}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              2
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={3}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              3
            </button>

            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={0}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              0
            </button>
            <button
              className="button bg-slate-50 dark:bg-[rgb(29,41,57)] dark:text-white"
              value={"00"}
              onClick={(e) => {
                setValue(value + e.target.value);
              }}
            >
              00
            </button>
            <button
              className="button bg-red-500"
              onClick={(e) => {
                setValue(eval(value));
              }}
            >
              =
            </button>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
