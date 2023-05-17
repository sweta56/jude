import React,{useEffect} from 'react'
import "./ComingSoon.scss"

const ComingSoon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="coming-soon-page">
      <h1 className="coming-soon-header">More items are <br/>
      < span style={{color:"rgb(230, 204, 178)"}}>coming soon!</span></h1>
    </div>
  )
}

export default ComingSoon