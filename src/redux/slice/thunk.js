import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonToQueryString } from "../../utils/helper";

import {
  getEmployerProfle as getEmployerProfleAPI,
} from "./service";


//  moving from EMPLOYER
// export const getTeamNotes = createAsyncThunk(
//   "auth/get-team-notes",
//   async (id) => {
//     const response = await getTeamNotesAPI(id);
//     return response.data;
//   }
// );
// export const addTeamNote = createAsyncThunk(
//   "auth/add-team-note-post",
//   async ({ payload }) => {
//     const response = await addTeamNoteAPI(payload);
//     return response.data;
//   }
// );
// export const filterTeamNote = createAsyncThunk(
//   "auth/get-filtered-team-notes",
//   async ({ id, jobseekerId }) => {
//     const response = await filterTeamNoteAPI(id, jobseekerId);
//     return response.data;
//   }
// );