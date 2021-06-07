

const initial = {}


export const user = (state=initial, action)  => {
    const { type } = action; 
    switch(type) {
        case "SET_USER":
            return action.user;

        case "REMOVE_USER":
            return {};
        default: 
            return state; 
    }

}

