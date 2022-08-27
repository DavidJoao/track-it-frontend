import axios from 'axios'

export async function getAll(method, path, authToken, dispatch, body ) {
    const headers = {
        headers:{
            'Authorization': `Bearer ${authToken}`
        }
    }

    let res
    switch(method){
    case 'GET':
        res = await axios.get(`http://localhost:8000${path}`, headers)
            dispatch({
                key:'response',
                value: res.data
            })
        break


    case 'PUT':
        res = await axios.put(`http://localhost:8000${path}`, body, headers)
        break

    case 'POST':
        res = await axios.post(`http://localhost:8000${path}`, body, headers)
        !authToken ? dispatch({ key:'token', value: res.data.token})
            : dispatch({ key:'response', value: res.data})
        break

    case 'DELETE':
        res = await axios.delete(`http://localhost:8000${path}`, headers)
        break
    
    default:
        break
    }
}

export function axiosReducer (state, object) {
    switch(object.key){
        case 'response':
            return {...state, response: object.value}
        case 'username':
            return {...state, username: object.value}
        case 'password':
            return {...state, password: object.value}
        case 'initialWeight':
            return {...state, initialWeight: object.value}
        case 'currentWeight':
            return {...state, currentWeight: object.value}
        case 'goal':
            return {...state, goal: object.value}
        case 'inches':
            return {...state, inches: object.value}
        case 'feet':
            return{...state, feet: object.value}
        case 'token':
            return {...state, token: object.value}
        case 'loadProfile':
            return {...state,
            username: object.value.username,
            initialWeight: object.value.initialWeight,
            currentWeight: object.value.currentWeight,
            goal: object.value.goal,
            feet: object.value.feet,
            inches: object.value.inches
        }

        default:
            return state
    }
}