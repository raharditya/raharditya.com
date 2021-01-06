function StackItem(props) {
  return (
    <div className="stack-item">
      <div className="backdrop w-16 h-16 flex items-center px-2 mx-auto mt-6 mb-3 rounded-xl">
        <img src={props.img} alt="" className="inline w-full" />
      </div>
      <p className="text-black">{props.children}</p>
    </div>
  );
}

export default StackItem;
