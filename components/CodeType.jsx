import React from "react";
import Typist from "react-typist";

export default function CodeType() {
  return (
    <div className="w-4/5 mx-auto flex align-center">
      <div className="w-1/2 bg-gray-900 text-white py-2 shadow-xl rounded-lg">
        {/* <Typist cursor={{ hideWhenDone: true }}>Test</Typist>
        <Typist cursor={{ hideWhenDone: true }}>
          <code>&nbsp;&nbsp;this is indented</code>
        </Typist>
        <Typist>
          <code style={{ display: "block" }}>this is</code>
          <code>multiline example</code>
        </Typist> */}
        <div className="w-full flex items-center">
          <div className="w-8  text-center text-sm">1</div>
          <code className="pl-4">{`import React from "react";`}</code>
        </div>
        <div className="w-full flex items-center">
          <div className="w-8  text-center text-sm">2</div>
          <code className="pl-4">{""}</code>
        </div>
        <div className="w-full flex items-center">
          <div className="w-8  text-center text-sm">3</div>
          <code className="pl-4">{"export default function Test() {"}</code>
        </div>
        <div className="w-full  flex items-center">
          <div className="w-8 text-center text-sm">4</div>
          <code className="pl-4">&nbsp;&nbsp;return (</code>
        </div>
        <div className="w-full bg-gray-800  flex items-center">
          <div className="w-8 text-center text-sm">5</div>
          <code className="pl-4">
            &nbsp;&nbsp;&nbsp;&nbsp;{"<h1>Hi world!</h1>"}
          </code>
        </div>
        <div className="w-full  flex items-center">
          <div className="w-8 text-center text-sm">6</div>
          <code className="pl-4">
            &nbsp;&nbsp;&nbsp;&nbsp;{"<p>This is just a test.</p>"}
          </code>
        </div>
        <div className="w-full  flex items-center">
          <div className="w-8 text-center text-sm">7</div>
          <code className="pl-4">&nbsp;&nbsp;);</code>
        </div>
        <div className="w-full  flex items-center">
          <div className="w-8 text-center text-sm">8</div>
          <code className="pl-4">{"}"}</code>
        </div>
      </div>
    </div>
  );
}
