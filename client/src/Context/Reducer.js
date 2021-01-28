import { GET__DATA, ADD__DATA, DELETE__DATA, UPDATE__DATA } from "./action.type";

export default (state, action) => {
    switch (action.type) {
        case GET__DATA:
            return { ...state, data: action.payload };
        case ADD__DATA:
            return action.payload == null ? { ...state, data: [] } : { ...state, data: action.payload };
        case DELETE__DATA:
            return;
        case UPDATE__DATA:
            return;
        default:
            return state;
    }
}