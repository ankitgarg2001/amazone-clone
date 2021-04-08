export const initialState ={
    basket: [],
};

//Selector
export const getBasketTotal = (basket)=>  
    basket?.reduce((amount, item) => item.price*item.quantity + amount, 0);

export const getTotalItems = (basket)=>  
    basket?.reduce((amount, item) => item.quantity + amount, 0);

const reducer = (state , action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET': 
            const ind = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
            );
            let newBaskt = [...state.basket];
            if(ind>=0){
                newBaskt[ind].quantity+=1;
                return {...state, basket: newBaskt}
            }
            else{
                return{
                    ...state,basket:[...state.basket,action.item]};
            }
        case 'REMOVE_FROM_BASKET' :
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            
            if(index>=0){
                newBasket[index].quantity-=1;
                if(newBasket[index].quantity===0)
                    newBasket.splice(index, 1);
            }else{
                console.warn('Cant remove the product (id: ${action.id}) as its not in the basket! ')
            }
            return {...state,basket: newBasket}
        default: 
            return state;
    }
}

export default reducer;