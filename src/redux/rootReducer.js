import { combineReducers } from "redux";
import authSlice from "../modules/auth/core/reducer"
import categorySlice from "../modules/pages/cms/pages/category/core/reducer";
import postSlice from "../modules/pages/cms/pages/post/core/reducer"
import userSlice from "../modules/pages/cms/pages/users/core/reducer";
import mediaSlice from "../modules/pages/cms/pages/media/core/reducer";
import commentSlice from "../modules/pages/cms/pages/comment/core/reducer"
import dsSlice from "../modules/pages/cms/pages/home/core/reducer"
import settingSlice from "../modules/pages/cms/pages/setting/core/reducer"

const rootReducers = combineReducers({
  auth: authSlice,
  category: categorySlice,
  post: postSlice,
  user: userSlice,
  media: mediaSlice,
  comment: commentSlice,
  ds: dsSlice,
  setting: settingSlice
});

export default rootReducers;
