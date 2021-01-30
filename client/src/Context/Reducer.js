import { GET__DATA, ADD__DATA, DELETE__DATA, UPDATE__DATA } from "./action.type";

export default (state, action) => {
    switch (action.type) {
        case GET__DATA:
            return action.payload;
        case ADD__DATA:
            //console.log(action.payload)
            return [...state, action.payload];
        case DELETE__DATA:
            return state.filter(el => el._id !== action.payload);
        /* case UPDATE__DATA:
            return; */
        default:
            return state;
    }
}