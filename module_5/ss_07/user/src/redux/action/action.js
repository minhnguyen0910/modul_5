import {DELETE_BY_ID, GET_ALL_USER} from "./types";
import {findAll,remove} from "../../service/UserService";


export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await findAll()
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}


export const deleteById = (id) => async (dispatch) => {
    try {
        await remove(id)
        // const res = await findAll()
        // dispatch({
        //     type: DELETE_BY_ID,
        //     payload: res.data
        // })
    } catch (e) {
        console.log(e)
    }
}