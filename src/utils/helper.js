import { useEffect, useState } from "react";
import moment from "moment";

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export const getFullName = (data) => {
  if (!data) {
    return " ";
  }
  return data.firstName + " " + data.lastName;
};

export const checkDisabledDate = (current) => {
  return current && current < moment().startOf("day");
};

export const startAndEndDate = (date) => {
  if (date) return date?.toISOString();
  else return null;
};

export const jsonToQueryString = (data) => {
  if (!data) {
    return "";
  }
  const params = Object.fromEntries(
    Object.entries(data).filter(([_, v]) => v != null)
  );
  // console.log(params);
  // if(params.length){
  //   const newId = params.map((i)=>)
  // }

  // const newId = id.map((i) => `&jobPostId=${i}`);
  // const newIDString = newId.join("");

  return "?" + new URLSearchParams(params).toString();
};