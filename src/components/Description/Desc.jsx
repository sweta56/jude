import React from 'react'
import "./Desc.scss";
import { Link } from "react-router-dom";

const Desc = () => {
  return (
    <div className="desc">
      <h1>JUDE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere auctor magna, eu tincidunt est blandit ut.
        Mauris a nunc id turpis rutrum convallis. Ut at consectetur nibh, eu facilisis quam. Sed eget orci aliquam,
        laoreet mauris in, ullamcorper massa. Maecenas bibendum, sapien id mattis vulputate, dui magna tincidunt odio,
        id pharetra orci tellus ut ex. Sed eu luctus odio. Aliquam dignissim lorem vel ex bibendum, quis facilisis leo
        vestibulum.
      </p>
      <button>
                <Link to="/products/1" className="link">
                  Explore More
                </Link>
              </button>
    </div>
  )
}

export default Desc