import axios from "axios";

export function setCurrentArticle(newlist) {
    return {
        type: 'SET_CURRENT_ARTICLES',
        payload: newlist
    };
}

export function fetchArticles() {
    return function (dispatch) {
        dispatch({ type: "FETCH_ARTICLES" });
        axios.get("/articles")
            .then((response) => {
                dispatch({ type: "FETCH_ARTICLES_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ARTICLES_REJECTED", payload: err });
            });
    };
}