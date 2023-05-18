import Web_logo from "../assets/logo.png";
import Web_logo_01 from "../assets/2.png";
import Upper_bg from "../assets/BG_01.png";
import A from "../assets/Group 194.png";
import G from "../assets/right.png";
import B from "../assets/Group 195.png";
import C from "../assets/box.png";
import D from "../assets/copy.png";
import E from "../assets/msg.png";
import F from "../assets/tick.png";
import { AiOutlineArrowRight } from "react-icons/ai";
// import Home_Form from "./Home_Form";
import Upper_Footer from "../assets/upper_footer.png";
import Middle from "../assets/middle.png";
const Home = () => {
  return (
    <>
      <div>
        <img className="Web_logo" src={Web_logo} alt="logo" />
      </div>
      <div>
        <img className="Bg_01" src={Upper_bg} alt="bg" />
      </div>
      <div className="Upper_info">
        <h1>
          Take your graphics protection <br />
          to the next level with DOL <br />
          Max overlaminates
        </h1>
        <p>
          Pair with MPI 1105 wrapping film <br />
          for ramped up protection
        </p>
      </div>
      <div className="FeatureFlex">
        <div className="UpperFeautures">
          <div className="FeatureDiv">
            <div className="ico">
              <img src={A} alt="" className="abcdef" />
            </div>
            <div className="DivInfo">
              <p>
                Maximum <br /> Durability
              </p>
            </div>
          </div>
        </div>
        <div className="UpperFeautures">
          <div className="FeatureDiv">
            <div className="ico">
              <img src={B} alt="" className="abcdef" />
            </div>
            <div className="DivInfo">
              <p>
                Enhanced <br /> Appearance
              </p>
            </div>
          </div>
        </div>
        <div className="UpperFeautures">
          <div className="FeatureDiv">
            <div className="ico">
              <img src={C} alt="" className="abcdef" />
            </div>
            <div className="DivInfo">
              <p>
                High Gloss <br /> Finish
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="Home_Form">
        <Home_Form />
      </div> */}

      {/* ----------------------------------------------------- */}
      <div className="Middle_Web">
        <img src={Middle} alt="middle" className="Middle" />
        <div className="Middle_LeftContent">
          <h1>DOL Max Overlaminate Films</h1>
          <p>
            Printed graphics deserve maximum protection, DOL Max is the
            solution.
          </p>
          <br />
          <h3>Features & Benefits:</h3>
          <ul>
            <li>
              Premium vertical durability of up to 7 years and up to 2 years{" "}
              <br />
              horizontal durability protection.
            </li>{" "}
            <br />
            <li>
              The high gloss finish enhances the appearance of graphics and adds
              a <br /> special touch to help your graphics stand out.
            </li>{" "}
            <br />
            <li>
              Our digital overlaminates can be used on a variety of substrates,{" "}
              <br />
              including banners, vehicle graphics, outdoor signage, and more.
            </li>
            <br />
          </ul>
          <button
            className="hover"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Inquire Now{" "}
            <AiOutlineArrowRight
              style={{ height: "18.2px", width: "40.2px" }}
            />
          </button>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <div className="Upper_Footer">
        <img className="Footer_IMG" src={Upper_Footer} alt="foot" />
        <div className="Right_Content_Upper_Footer">
          <div className="wushy">
            <h1>Why us ?</h1>
          </div>
          <div className="UpperFooterDesc">
            <div className="classForIcon">
              <img src={G} alt="" className="MidIco" />
            </div>
            <div className="footerDesc">
              <div>
                <h6>Quality Products</h6>
                <p>
                  Our digital overlaminate films are made from the highest
                  quality materials and are <br /> designed to provide superior
                  protection and appearance to your digital prints.
                </p>
              </div>
            </div>
          </div>
          <div className="MidFlex">
            <div className="UpperFooterDesc">
              <div className="classForIcon">
                <img src={D} alt="" className="MidIco" />
              </div>
              <div className="footerDesc">
                <div>
                  <h6>Multiple Options</h6>
                  <p>
                    Multiple Options We offer DOL Max in a 2.1 mil gloss finish
                    and 1.3 mil optically clear, gloss finish. <br /> This
                    allows you to choose the perfect film thickness level for
                    your specific application, <br /> ensuring your graphics
                    look the best and stand out from the competition.
                  </p>
                </div>
              </div>
            </div>
            <div className="UpperFooterDesc">
              <div className="classForIcon">
                <img src={E} alt="" className="MidIco" />
              </div>
              <div className="footerDesc">
                <div>
                  <h6>Expertise and Support</h6>
                  <p>
                    Our team of experts are available to provide guidance and
                    support throughout the <br /> entire process, from selecting
                    the right product for your needs to installation and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="UpperFooterDesc">
              <div className="classForIcon">
                <img src={F} alt="" className="MidIco" />
              </div>
              <div className="footerDesc">
                <div>
                  <h6>Durability Assurance </h6>
                  <p>
                    Trust our products with confidence, as we offer industry
                    leading durability assurance for our overlaminate films.
                  </p>
                </div>
              </div>
              <div
                className="callback"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <button className="hover">
                  <p>
                    Request A CallBack
                    <AiOutlineArrowRight
                      style={{ height: "18.2px", width: "40.2px" }}
                    />
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="footer">
        <div className="one" style={{ color: "white" }}>
          <h6>Best Solutions From </h6>
          <img src={Web_logo_01} alt="" />
        </div>
        <div className="two" style={{ color: "white" }}>
          <p>DOL Max Overlaminate Films</p>
          <p>Why us</p>
          <p>Enquire Now</p>
        </div>
        <div className="three">
          <p>Alpha Overlaminated Films</p>
          <p>Alpha Overlaminated Films</p>
          <p>Alpha Overlaminated Films</p>
          <p>Alpha Overlaminated Films</p>
        </div>
        <div className="four">
          <p>Alpha Overlaminated Films</p>
          <p>Alpha Overlaminated Films</p>
          <p>Alpha Overlaminated Films</p>
        </div>
      </div>
    </>
  );
};

export default Home;
