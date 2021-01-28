import ProjectItem from "../components/ProjectItem";

function projects(props) {
  if (process.browser) {
    console.log(props.isMobile);
  }
  return (
    <div className="pt-24 md:container md:mx-auto md:px-2">
      <div className="relative px-6 mb-40 md:mb-56">
        <h2 className="relative z-10 text-heading-serif page-heading font-bold text-4xl">
          Projects
        </h2>

        <div
          className="absolute z-0 bg-gray-400 w-8/12 rounded-xl"
          style={
            props.isMobile
              ? {
                  left: "5rem",
                  right: "auto",
                  top: "-0.5rem",
                  height: "9rem",
                }
              : {
                  left: "auto",
                  right: "0px",
                  top: "-0.5rem",
                  height: "14rem",
                  width: "90%",
                }
          }
        ></div>
      </div>

      <div className="px-6">
        <ProjectItem
          img="/assets/prj.jpg"
          category="PWA"
          path="/project/sapasampah"
        >
          Sapa
          <br />
          -sampah
        </ProjectItem>
        <ProjectItem
          img="/assets/prj1.jpg"
          category="Fullstack Javascript"
          path="/project/kkn-covid-jogja"
        >
          KKN Covid
          <br />
          Jogja
        </ProjectItem>
        <ProjectItem
          img="/assets/prj3.jpg"
          category="Wordpress"
          path="/project/doolan"
        >
          Doolan
        </ProjectItem>
      </div>
    </div>
  );
}

export default projects;
