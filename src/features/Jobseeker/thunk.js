import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConsistentData } from "../../utils/helper";

import { getTasks as getTasksAPI } from "./service";

export const getTasks = createAsyncThunk("tasks/get", async () => {
  const response = await getTasksAPI();
  return response.data;
});
