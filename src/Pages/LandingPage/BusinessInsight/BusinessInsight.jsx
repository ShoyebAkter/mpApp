import "./Business.css";
export const BusinessInsight = () => {
  return (
    <div className="businessInsightDiv pb-20 pt-5 px-5 ">
      <div className="flex justify-center">
        <div
          style={{
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
            background: "#2a4e40",
            color: "#f8f8f8",
          }}
          className="py-2 px-8 font-semibold text-2xl flex justify-center mx-auto rounded-2xl "
        >
          The types of services we provide for you
        </div>
      </div>
      <div className="flex justify-center g-5 mt-16">
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
      <div className="flex justify-center g-5 mb-5">
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
