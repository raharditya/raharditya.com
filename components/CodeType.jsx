import React from "react";
import Typist from "react-typist";
import CodeLine from "./CodeLine";

export default function CodeType() {
  const lines = [
    { content: `import React from "react";` },
    { content: `` },
    { content: `export default function Test() {` },
    { content: `return (`, indent: 1 },
    { content: `<h1>Hi world!</h1>`, indent: 2 },
    { content: `<p>This comes from the array.</p>`, indent: 2 },
    { content: `);`, indent: 1 },
    { content: `}` },
  ];

  return (
    <div className="w-4/5 mx-auto flex align-center">
      <div className="w-1/2 bg-gray-900 text-white py-2 shadow-xl rounded-lg">
        <Typist cursor={{ hideWhenDone: true }}>
          {lines.map((line, idx) => {
            return (
              <CodeLine indent={line.indent} line={idx + 1} key={idx}>
                {line.content}
              </CodeLine>
            );
          })}
        </Typist>
      </div>
    </div>
  );
}
