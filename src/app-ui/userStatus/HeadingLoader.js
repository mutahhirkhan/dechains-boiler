import React from "react"
import ContentLoader from "react-content-loader"

const HeadingLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={100}
    height={40}
    viewBox="0 0 100 40"
    backgroundColor="#bfbfbf"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="11" y="2" rx="0" ry="0" width="154" height="14" />
  </ContentLoader>
)

export default HeadingLoader