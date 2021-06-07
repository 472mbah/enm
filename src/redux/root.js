/**
    @big_cover_error_type when 0 => Directed to wrong page, so check if user defined, else prompt login
    @big_cover_error_type when 1 => Need to login message
    @big_cover_error_type when 2 => User details not registered
*/
let initial = {
    page: 1,
    big_cover: false,
    big_cover_index: -1,
    big_cover_error_type: undefined,
    big_cover_role: undefined,
    mobile_menu: false
}




export const rootReducer = (state=initial, action)  => {
    
    const { type, payload } = action; 
    switch(type) {
        case "SET_PAGE":
            state.page = payload;
            return state;
        case "TOGGLE_COVER":
            if (state.to==undefined) state.big_cover  = !state.big_cover
            else {
                state.big_cover = true;
                state.big_cover_index = action.to;    
                state.big_cover_error_type = action.error_type==undefined ? undefined : action.error_type;    
                state.big_cover_role = action.cover_role==undefined ? undefined : action.cover_role;    
            }
            return state;   
        case "TOGGLE_MOBILE_MENU":
            state.mobile_menu = !state.mobile_menu
            return state;         
        default: 
            return state; 
    }

}

