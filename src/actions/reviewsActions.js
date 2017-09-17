import axios from "axios";

export function setCurrentReview(newlist) {
    return {
        type: 'SET_CURRENT_REVIEW',
        payload: newlist
    };
}

export function fetchReviews() {
    return function (dispatch) {
        dispatch({ type: "FETCH_REVIEWS" });
        axios.get("/reviews")
            .then((response) => {
                dispatch({ type: "FETCH_REVIEWS_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_REVIEWS_REJECTED", payload: err });
            });
    };
}