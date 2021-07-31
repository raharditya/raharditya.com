import StackItem from "../StackItem";
import { useState } from "react";

function Stack(props) {
  const [stackPos, setStackPos] = useState(0);

  return (
    <div className="text-center pt-12 pb-16 md:container md:mx-auto">
      <div className="px-6 mb-16">
        <h3 className="text-heading-serif section-heading text-2xl mb-8">
          My Tech Stacks
        </h3>

        <div className="grid grid-cols-3 justify-between items-center gap-4 md:gap-8 md:w-3/5 mx-auto">
          <button
            className={`py-2 ${
              stackPos === 0
                ? "header-cta-bg shadow-lg font-bold text-white"
                : "border"
            } hover:shadow-lg rounded-lg transition duration-150 ease-in-out focus:outline-none`}
            onClick={() => setStackPos(0)}
          >
            Front-end
          </button>
          <button
            className={`py-2 ${
              stackPos === 1
                ? "header-cta-bg shadow-lg font-bold text-white"
                : "border"
            } hover:shadow-lg rounded-lg transition duration-150 ease-in-out focus:outline-none`}
            onClick={() => setStackPos(1)}
          >
            Back-end
          </button>
          <button
            className={`py-2 ${
              stackPos === 2
                ? "header-cta-bg shadow-lg font-bold text-white"
                : "border"
            } hover:shadow-lg rounded-lg transition duration-150 ease-in-out focus:outline-none`}
            onClick={() => setStackPos(2)}
          >
            UI / UX
          </button>
        </div>
      </div>

      <div className="">
        {stackPos === 0 && (
          <>
            <div className="flex items-center justify-center gap-8 md:gap-16 mt-8">
              <StackItem img="/assets/stack/react.svg" title="React" />
              <StackItem img="/assets/stack/nextjs.svg" title="NextJS" />
              <StackItem img="/assets/stack/firebase.svg" title="Firebase" />
            </div>
            <div className="flex items-center justify-center gap-8 md:gap-16 mt-8">
              <StackItem img="/assets/stack/tailwind.svg" title="Tailwind" />
              <StackItem img="/assets/stack/bootstrap.svg" title="Bootstrap" />
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
  );
}

export default Stack;
