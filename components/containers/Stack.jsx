import StackItem from "../StackItem";

function Stack(props) {
  return (
    <div className="text-center pt-12 pb-16 px-6">
      <h3 className="text-heading-serif section-heading text-xl mb-8">
        What I do
      </h3>

      <div className="md:flex md:justify-around md:items-center">
        <StackItem img="/assets/stack/pwa.svg">
          Progressive
          <br />
          Web Apps
        </StackItem>
        <StackItem img="/assets/stack/uiux.svg">
          UI/UX
          <br /> Designing
        </StackItem>
        <StackItem img="/assets/stack/js.svg">
          Fullstack
          <br /> Javascript
        </StackItem>
      </div>
    </div>
  );
}

export default Stack;
