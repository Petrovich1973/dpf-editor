import { combineReducers } from "redux";

import search from "./searchReducer";
import clients from "./clientsReducer";
import accounts from "./accountsReducer";
import productNavigation from "./productNavigationReducer";

export default combineReducers({
    search,
    clients,
    accounts,
    productNavigation
});
