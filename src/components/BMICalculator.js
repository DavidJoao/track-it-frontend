import { Form, Button } from 'react-bootstrap'

function BMICalculator(){
    return(
        <div style={{width:'95%', height:'90vh'}} className="d-flex flex-column">
            <div style={{width:'100%', height:"100%", padding:'2%'}}>
                <div style={{border:"1px solid #51A3A3", width:'100%', height:"50%", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:"center", margin:"1%", borderRadius:"10px", boxShadow:' -2px 7px 40px -11px rgba(0,0,0,0.75)'}}>
                    <Form>
                        <Form.Group>
                            <Form.Text>Feet</Form.Text>
                            <Form.Control />
                            <Form.Text>Inches</Form.Text>
                            <Form.Control />
                            <Form.Text>Weight</Form.Text>
                            <Form.Control />
                            <Button style={{border:'none', backgroundColor:"#51A3A3", width:'100%', marginTop:"3%"}} type='submit'>Calculate BMI</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div style={{width:'100%', height:"50%"}} className="d-flex flex-column flex-md-row align-self-center">
                    <div style={{border:"1px solid #51A3A3", width:"100%", height:"100%", display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"1%", borderRadius:'10px', boxShadow:' -2px 7px 40px -11px rgba(0,0,0,0.75)'}}>
                        <h2>BMI Categories:</h2>
                        <h6>BMI Categories:</h6>
                        <h6>BMI Categories:</h6>
                        <h6>BMI Categories:</h6>
                        <h6>BMI Categories:</h6>
                        <h6>BMI Categories:</h6>
                    </div>
                    <div style={{border:'1px solid #51A3A3', width:'100%', height:'100%', display:'flex', justifyContent:"center", alignItems:"center", flexDirection:'column', margin:"1%", borderRadius:'10px', boxShadow:' -2px 7px 40px -11px rgba(0,0,0,0.75)'}}>
                        <h1>Your BMI</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BMICalculator