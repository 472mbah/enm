
let initial = {
    page: 1,
    big_cover: false,
    big_cover_index: -1,
    mobile: undefined
}


export const rootReducer = (state=initial, action)  => {
    
    const { type, payload } = action; 
    switch(type) {
        case "SET_PAGE":
            state.page = payload;
            return state;
        case "TOGGLE_COVER":
            state.big_cover = !state.big_cover;
            state.big_cover_index = action.to;
            return state;   
        case "SET_MOBILE":
            state.mobile = action.mobile
            return state;         
        default: 
            return state; 
    }

}

