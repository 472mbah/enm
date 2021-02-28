
let initial = {
    page: 1,
    big_cover: false,
    sticky_header: true,
}


export const rootReducer = (state=initial, action)  => {
    
    const { type, payload } = action; 
    switch(type) {
        case "SET_PAGE":
            state.page = payload;
            return state;
        case "TOGGLE_COVER":
            state.big_cover = !state.big_cover;
            return state;            
        default: 
            return state; 
    }

}

