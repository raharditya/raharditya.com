import Link from "next/link";

function ProjectNext(props) {
  const { data } = props;
  return (
    <Link href={`/projects/${data.path}`}>
      <a className="ml-auto mt-10 mb-20 w-4/5 md:w-2/6 bg-white rounded-lg rounded-tr-none rounded-br-none shadow-lg p-4 flex">
        <img
          src={data.thumbnail}
          alt=""
          className="img-obj w-24 h-16 rounded-md"
        />

        <div className="ml-4">
          <small className="italic text-xs">Next project:</small>
          <h2 className="text-heading-serif text-lg">{data.title}</h2>
        </div>
      </a>
    </Link>
  );
}

export default ProjectNext;
