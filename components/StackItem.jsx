function StackItem(props) {
  return (
    <div className="stack-item flex-shrink-0 rounded-lg overflow-hidden shadow-lg w-3/5 md:w-64 mr-6">
      <div className="bg-green-500 h-32"></div>
      <div className="p-4  text-left">
        <h4 className="font-bold mb-4 text-lg">React JS</h4>
        <p>
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting.
        </p>
      </div>
    </div>
  );
}

export default StackItem;
