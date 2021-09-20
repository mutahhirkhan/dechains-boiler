import {createAsyncThunk } from "@reduxjs/toolkit";
// import { jsonToQueryString } from "../../utils/helper";

import {
  getDashboardCount as getDashboardCountAPI
} from "./service";

// moving from dashboard
export const getDashboardCount = createAsyncThunk(
  "auth/get-dashboard-count",
  async () => {
    const response = await getDashboardCountAPI();
    return response.data;
  }
);
// export const addTeamMember = createAsyncThunk(
//   "add-team-member/post",
//   async ({ payload }) => {
//     const response = await addTeamMemberAPI(payload);
//     return response.data;
//   }
// );
// export const updateTeamNote = createAsyncThunk(
//   "auth/team-note-put",
//   async ({ id, body }) => {
//     const response = await updateTeamNoteAPI(id, body);
//     return response.data;
//   }
// );