import ProjectItem from "../ProjectItem";

import Link from "next/link";

function Projects(props) {
  return (
    <div className="px-6 pt-4 pb-12 relative">
      <div
        className="backdrop absolute left-0 z-0"
        style={{ top: "-1rem", width: "75%", height: "94%" }}
      ></div>

      <h3 className="text-heading-serif section-heading text-xl mb-8 relative z-10">
        Projects
      </h3>

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

      <Link href="/projects">
        <a className="block text-center underline relative z-10">MORE</a>
      </Link>
    </div>
  );
}

export default Projects;
