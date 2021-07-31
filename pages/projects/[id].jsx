import { useRouter } from "next/router";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectNext from "../../components/ProjectNext";
import ProjectSection from "../../components/ProjectSection";
import Invitation from "../../components/Invitation";
import projectsData from "../../data";
import Head from "next/head";

function ProjectPage(props) {
  const router = useRouter();
  const { id } = router.query;

  const currentProject = props.projects.find((prj) => {
    return prj.path === id;
  });

  let nextProject;

  if (props.projects[currentProject?.id + 1]) {
    nextProject = props.projects[currentProject.id + 1];
  } else {
    nextProject = props.projects[0];
  }

  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>{`${
          currentProject?.title ? currentProject.title : "Project Not Found"
        } - Adit Raharditya`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="description" content={currentProject?.shortDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FCFCFD" />
        <meta
          property="og:url"
          content={`https://raharditya.com/projects/${currentProject?.path}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${
            currentProject?.title ? currentProject.title : "Project Not Found"
          } - Adit Raharditya`}
        />
        <meta
          property="og:description"
          content={currentProject?.shortDescription}
        />
        <meta
          property="og:image"
          content={`https://raharditya.com${currentProject?.thumbnail}`}
        />
      </Head>

      {currentProject ? (
        <>
          <ProjectHeader data={currentProject} />

          <div className="px-6 py-8 mt-6 backdrop">
            {currentProject.content.map((section, index) => (
              <ProjectSection
                title={section.section}
                highlight={section.sectionDescription}
                key={index * 4}
              >
                {section.body.map((bodyItem, idx) => {
                  if (bodyItem.type === "p") {
                    return (
                      <p className="mb-4 text-black" key={idx * 7}>
                        {bodyItem.content}
                      </p>
                    );
                  }
                })}
              </ProjectSection>
            ))}
          </div>

          <ProjectNext data={nextProject} />

          <Invitation />
        </>
      ) : (
        <div className="pt-24 mb-32 text-center font-bold">
          <h1>Project Not Found</h1>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      projects: [...projectsData],
    },
  };
}

export default ProjectPage;
