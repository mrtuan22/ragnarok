import { HeaderCarouselReducer } from "./reducer/HeaderCarouselReducer";
import { JobReducer } from "./reducer/JobReducer";

const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers({
    HeaderCarouselReducer,
    JobReducer
})

const store = createStore(rootReducer);
export default store;