import React from "react"
import ContentLoader from "react-content-loader"

const CountLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={50}
    height={40}
    viewBox="0 0 50 40"
    backgroundColor="#bfbfbf"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <circle cx="35" cy="25" r="12" />
  </ContentLoader>
)

export default CountLoader