import ProjectItem from "../components/ProjectItem";

function projects(props) {
  return (
    <div className="pt-24 md:container md:mx-auto md:px-2" id="top">
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
          path="/projects/sapasampah"
        >
          Sapa
          <br />
          -sampah
        </ProjectItem>
        <ProjectItem
          img="/assets/prj1.jpg"
          category="Fullstack Javascript"
          path="/projects/kkn-covid-jogja"
        >
          KKN Covid
          <br />
          Jogja
        </ProjectItem>
        <ProjectItem
          img="/assets/prj3.jpg"
          category="Wordpress"
          path="/projects/doolan"
        >
          Doolan
        </ProjectItem>
      </div>
    </div>
  );
}

export default projects;
