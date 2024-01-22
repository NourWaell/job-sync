import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            quickly <span>track</span> jobs
          </h1>
          <p>
            Are you tired of the chaos that comes with juggling multiple job
            applications, their statuses, and the countless hours spent tracking
            your progress? Look no further! JobSync is here to revolutionize the
            way you manage your job applications
          </p>
          <Link to="/register" className="btn btn-hero">
            Get Started
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
