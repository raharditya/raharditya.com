function StackItem(props) {
  return (
    <div className="">
      <div className="mx-auto rounded-xl border backdrop w-16 h-16 md:w-20 md:h-20 p-4 flex items-center justify-center mb-4">
        <img src={props.img} alt="" className="h-full" />
      </div>

      <p>{props.title}</p>
    </div>
  );
}

export default StackItem;
