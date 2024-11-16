import Link from "next/link";

export const CallToAction1 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-end">
            <div className="mil-text-center">
              <h2 className="mil-mb-30 mil-light mil-up">
                Discover the Difference When You Switch <br></br>
                To Process Payments Now
              </h2>
              <p className="mil-text-m mil-light mil-mb-60 mil-up">
                At Process Payments Now, we empower our clients with better
                payment solutions.<br></br>
                Learn more about the power of Procss Payments Now today!
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
            <img src="img/cta/1.webp" alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CallToAction2 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div
          className="mil-out-frame mil-p-160-160"
          style={{ backgroundImage: "url(img/home-3/5.png)" }}
        >
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 mil-sm-text-center">
              <h2 className="mil-light mil-mb-30 mil-up">
                Discover the freedom <br />
                of Total Financial Control
              </h2>
              <p className="mil-text-m mil-mb-60 mil-dark-soft mil-up">
                Join Plax and take the first step towards a more <br /> balanced
                and hassle-free financial life.
              </p>
              <div className="mil-buttons-frame mil-up">
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  className="mil-btn mil-md"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  className="mil-btn mil-border mil-md"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
