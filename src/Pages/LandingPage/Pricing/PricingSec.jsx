import "./Pricing.css";

const PricingSec = () => {
  return (
    <section>
      <div
        style={{ fontSize: "32px", color: "#439541" }}
        className="flex justify-center font-bold  my-5"
      >
        Pricing
      </div>
      <p className="flex justify-center fs-500">plans that work for everyone</p>
      <div className="plans flow-content">
        <div className="plan plan--light">
          <h2 className="plan-title">Basic Plan</h2>
          <p className="plan-price">
            {" "}
            $30<span>/month</span>
          </p>
          <p className="plan-description">
            <span className="font-bold">Features:</span> Access to all app
            features without any limitations.
            <br />
            <span className="font-bold">Payment Options:</span> Monthly autopay,
            ensuring uninterrupted service.
          </p>
          <a href="realtime" className="btn">
            Join Now
          </a>
        </div>

        <div className="plan plan--accent">
          <h2 className="plan-title">Annual Plan</h2>
          <span className="original-price plan-price" aria-label="Original Price">
            $360
          </span>
          &nbsp;&nbsp;
          <span className="font-bold text-xl" aria-label="Sale Price ">$330/year</span>
          <p className="plan-description">
            <div>
              <span className="font-bold ">Discount:</span> Offering an annual
              plan at $330 provides a $30 discount (equivalent to one month
              free) compared to the monthly plan over a year.
            </div>
            <div>
              <span className="font-bold "> Features:</span> Same as the Basic
              Plan with annual billing.
            </div>
            <div>
              <span className="font-bold ">Payment Options:</span> One-time
              payment with automatic annual renewal reminders.
            </div>
          </p>
          <a href="#" className="btn">
            Join Now
          </a>
        </div>

        <div className="plan plan--light">
          <h2 className="plan-title">Flexi-Pass</h2>
          <p className="plan-price">
            $170 <span>for 6 months</span>
          </p>
          <p className="plan-description">
            <div>
              <span className="font-bold ">Features:</span> Designed for users
              who might not need year-round access but prefer longer than a
              month. This plan offers a middle ground with a slight discount.
            </div>
            <div>
              <span className="font-bold ">Payment Options:</span> One-time
              payment, non-renewing, with the option to upgrade to the Annual
              Plan.
            </div>
          </p>
          <a href="#" className="btn">
            Join Now
          </a>
        </div>
        <div className="plan plan--light">
          <h2 className="plan-title">Enterprise Package</h2>
          <p className="plan-price">
            <span>Custom Pricing</span>
          </p>
          <p className="plan-description">
            <div>
              <span className="font-bold ">Features:</span> Tailored for
              businesses and organizations requiring multiple accounts. Includes
              dedicated support and training sessions.
            </div>
            <div>
              <span className="font-bold ">Payment Options:</span> Custom
              billing cycles and payment terms based on the agreement.
            </div>
          </p>
          <a href="#" className="btn">
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSec;
