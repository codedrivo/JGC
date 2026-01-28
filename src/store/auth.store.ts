import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  DOB: Date | null;
  maritalStatus: string;
  gender: string;
  phoneNumber: string;
  role: string;
  address: string;

  notification: boolean;
  isEmailVerified: boolean;
  isAccountVerified: boolean;
  profileimageurl: string;
  about: any;

  emailNotification: boolean;
  textNotification: boolean;
  pushNotification: boolean;
  communicationPref: string;

};

export type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
};

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logOut: (state:any) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setUser: (state:any, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: () => {},
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
