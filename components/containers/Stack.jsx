import StackItem from "../StackItem";
import { useState } from "react";

function Stack(props) {
  const [stackPos, setStackPos] = useState(0);

  return (
    <div style={{ backgroundColor: "#DBC4F8" }}>
      <div className="text-center pt-20 md:pt-12 pb-24 md:container md:mx-auto">
        <div className="px-6 mb-12 md:mb-16">
          <h3 className="text-left milliard-bold leading-none text-white text-3xl md:text-4xl mb-8">
            My Tech
            <br />
            Stacks
          </h3>

          <div className="grid grid-cols-3 justify-between items-center gap-4 md:gap-8 md:w-3/5 mx-auto">
            <button
              className={`py-2 ${
                stackPos === 0
                  ? "bg-white shadow-lg font-bold text-blue-900"
                  : "border border-blue-400 text-blue-900 opacity-75"
              } hover:shadow-lg rounded-xl transition duration-150 ease-in-out focus:outline-none`}
              onClick={() => setStackPos(0)}
            >
              Front-end
            </button>
            <button
              className={`py-2 ${
                stackPos === 1
                  ? "bg-white shadow-lg font-bold text-blue-900"
                  : "border border-blue-400 text-blue-900 opacity-75"
              } hover:shadow-lg rounded-xl transition duration-150 ease-in-out focus:outline-none`}
              onClick={() => setStackPos(1)}
            >
              Back-end
            </button>
            <button
              className={`py-2 ${
                stackPos === 2
                  ? "bg-white shadow-lg font-bold text-blue-900"
                  : "border border-blue-400 text-blue-900 opacity-75"
              } hover:shadow-lg rounded-xl transition duration-150 ease-in-out focus:outline-none`}
              onClick={() => setStackPos(2)}
            >
              UI / UX
            </button>
          </div>
        </div>

        <div
          className=""
          style={{
            height: stackPos === 0 ? 272 : 120,
            transition: "all 150ms ease-in-out",
          }}
        >
          {stackPos === 0 && (
            <>
              <div className="flex items-center justify-center gap-8 md:gap-16 mt-8">
                <StackItem img="/assets/stack/react.svg" title="React" />
                <StackItem img="/assets/stack/nextjs.svg" title="NextJS" />
                <StackItem img="/assets/stack/firebase.svg" title="Firebase" />
              </div>
              <div className="flex items-center justify-center gap-8 md:gap-16 mt-8">
                <StackItem img="/assets/stack/tailwind.svg" title="Tailwind" />
                <StackItem
                  img="/assets/stack/bootstrap.svg"
                  title="Bootstrap"
                />
              </div>
            </>
          )}
          {stackPos === 1 && (
            <>
              <div className="flex items-center justify-center gap-8 md:gap-16 mt-8">
                <StackItem img="/assets/stack/nodejs.svg" title="NodeJS" />
                <StackItem img="/assets/stack/express.svg" title="Express" />
                <StackItem img="/assets/stack/mongodb.svg" title="MongoDB" />
              </div>
            </>
          )}
          {stackPos === 2 && (
            <>
              <div className="flex items-center justify-center gap-8 md:gap-16 mt-8">
                <StackItem img="/assets/stack/figma.svg" title="Figma" />
                <StackItem img="/assets/stack/adobexd.svg" title="Adobe XD" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stack;
