import Head from "next/head";
import ProjectItem from "../components/ProjectItem";
import projectsData from "../data";

function projects(props) {
  return (
    <div className="pt-24 md:container md:mx-auto md:px-2" id="top">
      <Head>
        <title>Projects - Adit Raharditya</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Adit Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FCFCFD" />
        <meta property="og:url" content="https://raharditya.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects - Adit Raharditya" />
        <meta
          property="og:description"
          content="Adit Raharditya is a full-stack web developer based in Yogyakarta, Indonesia."
        />
        {/* <meta
          property="og:image"
          content={`https://raharditya.com${currentProject?.thumbnail}`}
        /> */}
      </Head>

      <div className="relative px-6 mb-12">
        {/* <div className="relative px-6 mb-40 md:mb-56"> */}
        <h2 className="relative z-10 text-heading-serif font-bold text-4xl">
          Projects
        </h2>

        {/* <div
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
        ></div> */}
      </div>

      <div className="px-6">
        {projectsData.map((prj, idx) => {
          const titleFormat = prj.titleFormat.split("/");

          return (
            <ProjectItem
              img={prj.thumbnail}
              category={prj.category}
              path={prj.path}
              key={idx * 5}
            >
              {titleFormat.map((title, idx) => {
                if (idx === titleFormat.length) {
                  return <h2 key={idx * 3}>{title}</h2>;
                } else {
                  return (
                    <h2 key={idx * 3}>
                      {title}
                      <br />
                    </h2>
                  );
                }
              })}
            </ProjectItem>
          );
        })}

        {/* <ProjectItem img="/assets/prj.jpg" category="PWA" path="sapasampah">
          Sapa
          <br />
          -sampah
        </ProjectItem>
        <ProjectItem
          img="/assets/prj1.jpg"
          category="Fullstack Javascript"
          path="kkn-covid-jogja"
        >
          KKN Covid
          <br />
          Jogja
        </ProjectItem>
        <ProjectItem img="/assets/prj3.jpg" category="Wordpress" path="doolan">
          Doolan
        </ProjectItem> */}
      </div>
    </div>
  );
}

export default projects;
