

const initial = {
    name: "Momodou Bah"
}


export const user_info = (state=initial, action)  => {
    const { type } = action; 
    switch(type) {
        case "SET_USER_DETAILS":
            state.name = action.payload;
            return state;
        case "RESET_USER_DETAILS":
            state.name = "";
            return state;
        default: 
            return state; 
    }

}

