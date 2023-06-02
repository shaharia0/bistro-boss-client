
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="md:w-3/12 text-center mx-auto my-4">
      <p className="text-yellow-500 mb-3">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;