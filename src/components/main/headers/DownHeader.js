import React from "react";
import "./DownHeader.scss";
import Scroll from "react-scroll";
import SponsorshipFile from "../../../files/Sponsorluk_Dosyası.pdf";
const ScrollLink = Scroll.Link;

export default function DownHeader(props) {
  return (
    <>
      <div className="down-header">
        <section>
          <div className="down-container">
            <h2 className="title-down">
              {props.lang ? (
                <>We need sponsors</>
              ) : (
                <>Sponsorlara ihtiyacımız var</>
              )}
            </h2>
            <p className="paragraph">
              {props.lang ? (
                <>
                  We need some sponsors who would fund us for robotic
                  competations.
                </>
              ) : (
                <>
                  Bizi robotik yarışmalarında fonlaması için sponsorlara
                  ihtiyacımız var.
                </>
              )}
            </p>
            <a
              download="true"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              href={SponsorshipFile}
            >
              {props.lang ? <>Sponsorship file</> : <>Sponsorluk Dosyası</>}
            </a>
            <ScrollLink
              to="contact-us"
              className="link"
              spy={true}
              smooth={true}
              duration={1000}
              delay={250}
            >
              {props.lang ? <>Let's get in touch</> : <>İletişime geçelim</>}
            </ScrollLink>
          </div>
        </section>
      </div>
    </>
  );
}
