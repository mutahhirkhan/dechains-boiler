import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectTasks } from "./slice";
import { getTasks } from "./thunk";

function TestApi() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div style={{ fontSize: 100, background: "red" }}>
      TestApi <div></div>{" "}
    </div>
  );
}
export default TestApi;
