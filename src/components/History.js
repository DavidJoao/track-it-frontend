import { Form, Button } from "react-bootstrap"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'

function History(){
    const weightExample = [202, 198, 200, 195, 192, 196, 205]
    const days = [1, 2, 3, 4, 5, 6, 7]

    const data = {
        labels: days.map(item => item),
        datasets: [{
            label:"Range",
            data: weightExample.map(wei => wei),
        }] 
    }

    return(
        <div style={{width:'95%', height:'auto', display:"flex", alignItems:'center', flexDirection:'column', padding:'2%'}}>
            <h4 style={{border:'1px solid #51A3A3', padding:"1%", borderRadius:'10px'}}>Current Weight: </h4>
            <h4 style={{border:'1px solid #51A3A3', padding:"1%", borderRadius:'10px'}}>Weight History:</h4>
            <div style={{border:'1px solid #51A3A3', height:'auto', width:'90%', padding:"2%", borderRadius:'10px'}}>
                <Line data={data} />
            </div>
            <Form>
                <Form.Group style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Form.Text>Add new weight</Form.Text>
                    <Form.Control style={{border:'1px solid #51A3A3', marginBottom:'5%'}} placeholder="Enter new weight"/>
                    <Button style={{border:"none", backgroundColor:'#51A3A3'}} type="submit">Register New Weight</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default History