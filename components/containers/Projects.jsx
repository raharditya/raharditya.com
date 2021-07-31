import ProjectItem from "../ProjectItem";
import { useMediaQuery } from "../useMediaQuery";

import Link from "next/link";

function Projects(props) {
  const isDesktop = useMediaQuery("(max-width: 768px)");

  return (
    <div className="px-6 pt-4 pb-12 relative">
      <div
        className="backdrop absolute left-0 z-0"
        style={{
          top: isDesktop ? "-1rem" : "2.5rem",
          width: isDesktop ? "75%" : "35%",
          height: isDesktop ? "94%" : "85%",
        }}
      ></div>

      <div className="container mx-auto md:px-6">
        <h3 className="text-heading-serif section-heading text-2xl mb-8 relative z-10">
          Projects
        </h3>

        <ProjectItem
          img="/assets/projects/pemadatan-thumb.jpg"
          category="PWA"
          path="jadwal-pemadatan"
        >
          Jadwal
          <br />
          Pemadatan
        </ProjectItem>
        <ProjectItem
          img="/assets/projects/admi-thumb.jpg"
          category="PWA"
          path="temu-admi-2019"
        >
          Temu
          <br />
          Admi 2019
        </ProjectItem>
        {/* <ProjectItem img="/assets/prj3.jpg" category="Wordpress" path="doolan">
          Doolan
        </ProjectItem> */}

        <Link href="/projects">
          <a className="block text-center underline relative z-10">MORE</a>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
