import "./Business.css";
export const BusinessInsight = () => {
  return (
    <div className="businessInsightDiv ">
      <div className="flex justify-center">
        <div
          className="serviceHeading  "
        >
          Types Of Services
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-16">
        <div className="serviceImage">
          <img src="Services_1.png" alt="" />
        </div>
        <div className="serviceImage">
          <img src="Services_2.png" alt="" />
        </div>
        <div className="serviceImage">
          <img src="Services_3.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5">
        <div className="serviceImage">
          <img src="Services_4.png" alt="" />
        </div>
        <div className="serviceImage">
          <img src="Services_5.png" alt="" />
        </div>
      </div>
    </div>
  );
};
