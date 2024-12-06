import Link from "next/link";

const InputField = ({ name, type, placeholder, required, style }) => (
  <input
    className="mil-input"
    name={name}
    type={type}
    placeholder={placeholder}
    autoComplete="off"
    required={required}
    style={style}
  />
);

export const CallToAction1 = () => {
  return (
    <section className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-end">
            <div className="mil-text-center">
              <h2 className="mil-mb-30 mil-light mil-up">
                Discover the Difference When You Switch <br />
                To Process Payments Now
              </h2>
              <p className="mil-text-m mil-light mil-mb-60 mil-up">
                At Process Payments Now, we empower our clients with better
                payment solutions.
                <br />
                Learn more about the power of Process Payments Now today!
              </p>
              <div className="mil-up mil-mb-60">
                <Link
                  href="/register"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Schedule A Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="mil-illustration-absolute mil-type-2 mil-up">
            <img src="/img/cta/1.webp" alt="CTA illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const CallToAction2 = () => {
  return (
    <section className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-center justify-content-center">
            <div className="mil-text-center">
              <div className="mil-form-container">
                <h2 className="mil-mb-10 mil-light mil-up mil-header-text">
                  Get Started Today
                </h2>
                <p className="mil-text-m mil-light mil-mb-30 mil-up mil-header-text">
                  At Process Payments Now, we empower our clients with better
                  payment solutions.
                  <br />
                  Learn more about the power of Process Payments Now today!
                </p>
                <form
                  id="callbackForm"
                  className="mil-subscribe-form mil-text-center"
                >
                  <InputField
                    name="NAME"
                    type="text"
                    placeholder="Full Name"
                    required={true}
                  />
                  <InputField
                    name="BUSINESS_NAME"
                    type="text"
                    placeholder="Business Name"
                    required={true}
                  />
                  <div
                    className="mil-input-group"
                    style={{ display: "flex", gap: "15px" }}
                  >
                    <InputField
                      name="PHONE"
                      type="tel"
                      placeholder="Phone Number"
                      required={true}
                      style={{ flex: "1" }}
                    />
                    <InputField
                      name="EMAIL"
                      type="email"
                      placeholder="Email"
                      required={true}
                      style={{ flex: "1" }}
                    />
                  </div>
                  <button type="submit" className="mil-btn mil-sm">
                    Learn More
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mil-illustration-absolute mil-type-2 mil-up">
            <img src="/img/cta/1.webp" alt="CTA illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};
