import Menu from '../Menu';

const Content = () => {
  return (
    <div className="overflow-y-scroll">
      {/* Description section */}
      <div className="md: grid grid-cols-12 gap-8 py-8">
        <div className="col-span-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                {/* TODO: Tooltip on hover */}
                <div className="h-8 w-8 rounded-lg bg-gray-300"></div>
                <div className="h-8 w-8 rounded-lg bg-gray-300"></div>
                <div className="h-8 w-8 rounded-lg bg-gray-300"></div>
              </div>

              <Menu
                button={
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary-dark">
                    <i className="fi fi-rr-menu-dots-vertical flex h-6 w-6 items-center justify-center" />
                  </button>
                }
                items={[<a href="/">Buka GitHub</a>]}
              />
            </div>

            <p className="leading-7 opacity-75">
              This is a description of the project. It can be as long as needed. This is a description of the project.
              It can be as long as needed. This is a description of the project. It can be as long as needed. This is a
              description of the project. It can be as long as needed. This is a description of the project. It can be
              as long as needed. This is a description of the project. It can be as long as needed.
            </p>

            <p className="leading-7 opacity-75">
              This is a description of the project. It can be as long as needed. This is a description of the project.
              It can be as long as needed. This is a description of the project. It can be as long as needed. This is a
              description of the project. It can be as long as needed. This is a description of the project. It can be
              as long as needed. This is a description of the project. It can be as long as needed.
            </p>
          </div>
        </div>

        <div className="col-span-4">
          <div className="h-[300px] rounded-lg bg-gray-300"></div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-bold">Highlights</h3>

        <div className="grid grid-cols-12 gap-8 py-8 pt-6">
          <div className="col-span-6">
            <div className="h-[300px] rounded-lg bg-gray-300"></div>
          </div>
          <div className="col-span-6 space-y-4">
            <h4 className="text-lg font-bold">Dynamic Response Caching</h4>
            <p className="leading-7 opacity-75">
              This is a description of the project. It can be as long as needed. This is a description of the project.
              It can be as long as needed. This is a description of the project. It can be as long as needed. This is a
              description of the project. It can be as long as needed. This is a description of the project. It can be
              as long as needed. This is a description of the project. It can be as long as needed.
            </p>
          </div>

          <div className="col-span-6">
            <div className="h-[300px] rounded-lg bg-gray-300"></div>
          </div>
          <div className="col-span-6">
            <div className="h-[300px] rounded-lg bg-gray-300"></div>
          </div>

          <div className="col-span-4 space-y-4">
            <h4 className="text-lg font-bold">Dynamic Response Caching</h4>
            <p className="leading-7 opacity-75">
              This is a description of the project. It can be as long as needed. This is a description of the project.
              It can be as long as needed. This is a description of the project. It can be as long as needed. This is a
              description of the project. It can be as long as needed. This is a description of the project. It can be
              as long as needed. This is a description of the project. It can be as long as needed.
            </p>
          </div>
          <div className="col-span-8">
            <div className="h-[300px] rounded-lg bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
