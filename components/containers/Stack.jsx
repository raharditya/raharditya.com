import StackItem from "../StackItem";
import { useState } from "react";

function Stack(props) {
  const [stackPos, setStackPos] = useState(0);

  return (
    <div className="text-center pt-12 pb-16 md:container md:mx-auto">
      <div className="px-6">
        <h3 className="text-heading-serif section-heading text-2xl mb-8">
          My Tech Stacks
        </h3>

        <div className="grid grid-cols-3 justify-between items-center gap-4 md:gap-8 md:w-3/5 mx-auto">
          <button
            className={`py-2 ${
              stackPos === 0
                ? "bg-green-400 shadow-lg font-bold text-white"
                : ""
            } hover:shadow-lg rounded-lg transition duration-150 ease-in-out focus:outline-none`}
            onClick={() => setStackPos(0)}
          >
            Front-end
          </button>
          <button
            className={`py-2 ${
              stackPos === 1
                ? "bg-green-400 shadow-lg font-bold text-white"
                : ""
            } hover:shadow-lg rounded-lg transition duration-150 ease-in-out focus:outline-none`}
            onClick={() => setStackPos(1)}
          >
            Back-end
          </button>
          <button
            className={`py-2 ${
              stackPos === 2
                ? "bg-green-400 shadow-lg font-bold text-white"
                : ""
            } hover:shadow-lg rounded-lg transition duration-150 ease-in-out focus:outline-none`}
            onClick={() => setStackPos(2)}
          >
            UI / UX
          </button>
        </div>
      </div>

      <div className="stack-container flex mt-8 overflow-x-scroll ml-6 pb-4">
        <StackItem />
        <StackItem />
        <StackItem />
      </div>

      {/* <div className="md:flex md:justify-center md:items-center md:gap-32">
        <StackItem img="/assets/stack/pwa.svg">
          Progressive
          <br />
          Web Apps
        </StackItem>
        <StackItem img="/assets/stack/uiux.svg">
          UI/UX
          <br /> Designing
        </StackItem>
        <StackItem img="/assets/stack/js.svg">
          Fullstack
          <br /> Javascript
        </StackItem>
      </div> */}
    </div>
  );
}

export default Stack;
