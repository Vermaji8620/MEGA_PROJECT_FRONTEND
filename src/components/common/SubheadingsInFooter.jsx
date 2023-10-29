import ElementInsideFooter from "./ElementInsideFooter";

const SubheadingsInFooter = ({ element }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-white font-bold">{element.title}</div>
      <div>
        {element.links.map((elementt, index) => {
          return (
            <div key={index}>
              <ElementInsideFooter elementt={elementt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubheadingsInFooter;
