import { Form, Button } from "react-bootstrap"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'
import { getAll, axiosReducer } from '../functions/getAll'
import { Context } from '../App' 
import { useState, useEffect, useReducer, useContext } from 'react'


function History(){
    let [input, setInput] = useState('')
    const { loggedInUser } = useContext(Context)
    const [profile, dispatch] = useReducer(axiosReducer, loggedInUser)
    const weightArr = []
    const [weightExample, setWeightExample] = useState([])
    const lastSeven = weightExample.slice(-7)
    const days = [1, 2, 3, 4, 5, 6, 7]
    
    const data = {
        labels: days.map(item => item),
        datasets: [{
            label:"Range",
            data: lastSeven.map(wei => wei),
            borderColor:'rgb(75, 192, 192'
        }] 
    }
    
    function handleSubmit(e){
        e.preventDefault()
        weightExample.push(input)
        setInput('')
    }
    function handleChange(e){
        let value = e.target.value
        setInput(value)
    }

    useEffect(() => {
        getAll('GET', `/users/username/${loggedInUser.username}`, loggedInUser.token, dispatch)
    },[])

    return(
        <div style={{width:'95%', height:'auto', display:"flex", alignItems:'center', flexDirection:'column', padding:'2%', fontFamily:"'Nunito', sans-serif"}}>
            <h4 style={{border:'1px solid #51A3A3', padding:"1%", borderRadius:'10px'}}>Current Weight: {lastSeven.slice(-1)}</h4>
            <h4 style={{border:'1px solid #51A3A3', padding:"1%", borderRadius:'10px'}}>Weight History</h4>
            <div style={{border:'1px solid #51A3A3', height:'auto', width:'90%', padding:"2%", borderRadius:'10px'}}>
                <Line data={data} />
            </div>
            <Form>
                <Form.Group style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Form.Control style={{border:'1px solid #51A3A3', marginBottom:'5%', marginTop:'2%'}} value={input} placeholder="Enter new weight" onChange={handleChange}/>
                    <Button style={{border:"none", backgroundColor:'#51A3A3'}} type="submit" onClick={handleSubmit}>Register New Weight</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default History