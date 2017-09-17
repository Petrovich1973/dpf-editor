import { combineReducers } from "redux";

import tweets from "./tweetsReducer";
import user from "./userReducer";
import gallery from "./galleryReducer";
import reviews from "./reviewsReducer";
import calculation from "./calculationReducer";
import articles from "./articlesReducer";

export default combineReducers({
    tweets,
    user,
    gallery,
    reviews,
    calculation,
    articles
});
