import React from "react";
import { Card } from "../components";

import otisImg from "../images/otis.png";
import tcdImg from "../images/thecleandivorce.png";
import fdfImg from "../images/funnyduckfarms.png";
import mvmbImg from "../images/maidenvoyagebar.png";
import mvcImg from "../images/maidenvoyagecocktails.png"
import bbtsImg from "../images/belmontetrophyshop.png";

const Work = () => {
  return (
    <>
      <h1 className="text-left mt-3 mb-5">Work</h1>
      <h3 className="text-left mt-5 mb-3">Resolute Forest Products</h3>
      <h5 className="text-left text-muted mb-4">Software Engineer</h5>
      <div className="row justify-content-start">
        <div className="col-lg-6 d-flex">
          <Card
            title="OTIS Application"
            image={otisImg}
            description="A document management application for pulp and paper mill operators. Built using Electron, React, and Material-UI."
            btnText="Private Code"
            btnLink="#"
            btnDeactivate
          />
        </div>
      </div>
      <h3 className="text-left mt-5">Invest Ottawa</h3>
      <h5 className="text-left text-muted mb-4">Web Developer</h5>
      <div className="row justify-content-start">
        <div className="col-lg-6 d-flex">
          <Card
            title="Funny Duck Farms"
            image={fdfImg}
            subtitle="On Local Line Sites"
            description="Major UI changes implemented. Added integration with Payhip."
            btnText="View Website"
            btnLink="https://www.funnyduckfarms.com/"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="The Clean Divorce"
            image={tcdImg}
            subtitle="On Wix"
            description="Complete UI redesign and added custom e-commerce functionality."
            btnText="View Website"
            btnLink="https://www.thecleandivorce.com/"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="Maiden Voyage Mobile Bar"
            image={mvmbImg}
            subtitle="On Wix"
            description="Implemented minor UI improvements and improved SEO."
            btnText="View Website"
            btnLink="https://www.maidenvoyagemobilebarco.com/"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="Maiden Voyage Cocktails"
            image={mvcImg}
            subtitle="On Shopify"
            description="Implemented minor UI improvements."
            btnText="View Website"
            btnLink="https://www.maidenvoyagecocktails.ca/"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="Belmonte Boys Trophy Shop"
            image={bbtsImg}
            subtitle="On Wix"
            description="Major UI changes implemented and added custom e-commerce functionality."
            btnText="View Website"
            btnLink="https://www.belmonteboystrophyshop.com/"
          />
        </div>
      </div>
    </>
  );
};

export default Work;
