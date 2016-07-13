import { ADD_ITEM,
    DELETE_ITEM,
    DELETE_ALL,
    FILTER_ITEM,
    SHOW_LIST,
    PLAY_MOVIES
} from './actionTypes'

export function addItem(state) {
    var length = state.items.list.length;
    var page = length/4;
    if(/\./.test(page)){
        return state;
    }else {
        return dispatch => {
            fetch(`http://123.57.166.102:5000/bcs/mvideo/recommend/list?pageindex=${page}&pagesize=4`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body:null
                })
                .then(response => {
                    if (response.ok) {
                        response.json().then(function(data) {
                            return dispatch(showList(data.result.list));//dispatch
                        });
                    } else{
                        console.log(response);
                    }
                });
        }
    }
}
export function showList(json) {
    return {
        type:SHOW_LIST,
        response:json
    }
}
export function deleteItem(utc) {
    return {
        type: DELETE_ITEM,
        utc
    }
}
export function deleteAll() {
    return {
        type: DELETE_ALL
    }
}
export function filterItem(e) {
    let filterItem = e.target.value;
    return {
        type: FILTER_ITEM,
        filterItem
    }
}
export function playMovies(url){
    return {
        type: PLAY_MOVIES,
        url
    }
}