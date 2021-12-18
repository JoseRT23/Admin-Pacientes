export const PatientsReducer = (state, action) => {

    switch (action.type) {
        case "add":
            return [...state, action.payload];
    
        case "delete":
            return state.filter(actual => actual.id !== action.payload); //verifica si es id que estoy obteniendo es diferente a los demas para borrarlo

        default:
            return state;
    }

}