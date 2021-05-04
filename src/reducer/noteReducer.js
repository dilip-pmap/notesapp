export const Constants = {
    CREATE: 'CREATE',
    UPDATE: "UPDATE",
    DELETE: 'DELETE',
}
export default function  noteReducer( state=[], action) {
    let newState = [];
    switch(action.type) {
        case Constants.CREATE:
            newState= [...state, action.data];
            return newState;
        case Constants.UPDATE:
            newState = action.data;
            return newState;
        case Constants.DELETE:
            newState = action.data;
            return newState;
        default:
            return newState;
    }
}