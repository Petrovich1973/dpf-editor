import axios from "axios";

export function setChangeParameter(newlist) {
    return {
        type: 'SET_CHANGE_PARAMETER',
        payload: newlist
    };
}

export function setChangeMaterial(newlist) {
    return {
        type: 'SET_CHANGE_MATERIAL',
        payload: newlist
    };
}

export function fetchCalculation() {
    return function (dispatch) {
        dispatch({ type: "FETCH_CALCULATION" });
        axios.get("/calculation")
            .then((response) => {
                dispatch({ type: "FETCH_CALCULATION_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_CALCULATION_REJECTED", payload: err });
            });
    };
}