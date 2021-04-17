import { bookingType } from '../../components/booking/guestsForm/GuestsForm';
import { supabase } from '../../SupaBase/conection';
export const STEP_CHANGE = 'STEP_CHANGE';
export const SET_BOOK_DATA = 'SET_BOOK_DATA'
export const GET_BOOKINGS = "GET_BOOKINGS"
export const GET_TYPES = "GET_TYPES";
export const GET_ROOMS = "GET_ROOMS";
export const GET_SOME_BOOKINGS="GET_SOME_BOOKINGS";
export const CATEGORIES_TO_SHOW="CATEGORIES_TO_SHOW";
export const FILTER_DATES ="FILTER_DATES";
export interface bookAction {
    type: string,
    payload: any
}

export const stepChange = (inputs:any) => {
    return {
        type: STEP_CHANGE,
        payload: inputs
    }
}

export const setBookData = (booking:bookingType) => {
    return {
        type: SET_BOOK_DATA,
        payload: { booking }
    }
}

export const getBookings= async() =>{
    let {data:bookings} = await supabase
    .from("bookings")
    .select ("*") 
    return{
        type: GET_BOOKINGS,
        payload: bookings
    }
}

export const getTypes = (paxes:number) =>{
    return async(dispatch:any) =>{
        const { data:types } = await supabase
        .from("types")
        .select("id")
        .gte("capacity",paxes)
        dispatch(saveTypes(types))
    }
}
const saveTypes = (payload:any) =>{
    return {
        type: GET_TYPES,
        payload
    }   
}

export const getRooms = (types:any) => {
   return async (dispatch:any) => {
        if( types ) {
            let resul = [];
            for (let i = 0; i < types.length; i++) {
                const { data } = await supabase
                .from("rooms")
                .select('*')
                .eq("type_id",types[i].id);
                resul.push(data);
            }
            dispatch(saveRooms(resul));
        }
   }
}
const saveRooms = (payload:any) =>{
    return{
        type: GET_ROOMS,
        payload
    }
}

export const getSomeBookings =(rooms:any)=>{
    return async (dispatch:any)=>{
        if(rooms){
            let resolved = []
            let foundBookings= []
            for(let i=0; i< rooms.length; i++){
                for(let j=0; j< rooms[i].length; j++){
                  if(rooms[i][j].id){
                    let { data: bookings } = await supabase
                    .from('bookings')
                    .select('*')
                    .eq("room_id", rooms[i][j].id)
                    console.log(bookings)
                    resolved.push({room_id: rooms[i][j].id, booked: bookings})
                    if(bookings?.length){
                        foundBookings.push(bookings.pop())
                    }
                }}
            }
            console.log(foundBookings)
            dispatch(saveSomeBookings({bookings: foundBookings, resolved:resolved}))
        }  
    }
}

const saveSomeBookings = (payload:any)=>{
    return{
        type:GET_SOME_BOOKINGS,
        payload
    }
}

export const getAvailableCategories = (rooms:any)=>{
    return async ( dispatch:any ) => {
        let result:any=[]
        let categoriesFiltered:any=[]
        if( rooms && rooms.length ){
            for(let i=0; i< rooms.length; i++){
                for(let j=0; j< rooms[i].length; j++){
                    if(!categoriesFiltered.includes(rooms[i][j].category_id)){
                          let { data: categories } = await supabase
                            .from('categories')
                            .select('*')
                            .eq("id",rooms[i][j].category_id);
                            result.push(categories?.pop()); 
                            categoriesFiltered.push(rooms[i][j].category_id)
                    }
                }
            }
        }
        dispatch(categoriesToShow(result));
    }
}

const categoriesToShow = (payload:any)=>{
    return{
        type: CATEGORIES_TO_SHOW,
        payload
    }
}

/*export const filterByDates = (availableBookings:any,userDates:any)=>{
    const [checkin,checkout]=userDates
    for(let i=0; i<availableBookings.length;i++){
    }
    return{
        type: FILTER_DATES,
        
}*/





