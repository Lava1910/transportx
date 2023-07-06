const reducer = (state,action)=>{ // action: {type:.. payload:..}
    switch(action.type){
        case "AUTH_LOGIN": return {...state,token:action.payload,isLoading:true};
        default: return state;
    }
}
export default reducer;