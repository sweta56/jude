import React from "react";
import "./Categories.scss";
import img1 from '../images/img1.JPG';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.JPG';
import img4 from '../images/img4.JPG';
import img5 from '../images/img5.JPG';
import img6 from '../images/img6.JPG';
import img7 from '../images/img7.JPG';
import { Link } from "react-router-dom";

const Categories = () => {
    const data = [img1,img2,img3,img4,img5,img6,img7]
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src={data[4]}
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src={data[2]}
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src={data[3]}
                alt=""
              />
              <button>
                <Link to="/comingsoon" className="link">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src={data[6]}
                alt=""
              />
              <button>
                <Link to="/comingsoon" className="link">
                  Coming Soon
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;