import { Card, Form, FormGroup, Button, Container, Dropdown } from 'react-bootstrap'

function SignUp(){
    return(
        <div style={{width:'auto', marginLeft:'5%', marginRight:'5%', height:'auto', padding:'2%'}}>
            <Card style={{border:'1px solid #51A3A3', height:'100%'}} className="d-flex flex-column">
                <Card.Header style={{textAlign:'center', backgroundColor:'#51A3A3', color:"white"}}>Sign Up</Card.Header>
                <div style={{padding:'2%'}}>
                    <Container className='d-flex flex-column flex-md-row'>
                        <Container style={{width:'80%', height:'40vh'}}>
                            <Form style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100%'}}>
                                <FormGroup style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control style={{border:'1px solid #51A3A3'}} type='user' placeholder='Ex. David123'></Form.Control>
                                    <Form.Label style={{marginTop:'2%'}}>Password</Form.Label>
                                    <Form.Control style={{border:'1px solid #51A3A3'}} type='password' placeholder='Password'></Form.Control>
                                    <Form.Label style={{marginTop:'2%'}}>Confirm Password</Form.Label>
                                    <Form.Control style={{border:'1px solid #51A3A3'}} type='password' placeholder='Password'></Form.Control>
                                    <Form.Text>Don't share your password with anyone else.</Form.Text>
                                </FormGroup>
                            </Form>
                        </Container>
                        <Container style={{width:'80%', height:'40vh'}}>
                                <Form style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100%'}}>
                                    <FormGroup style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                        <Form.Label>Height</Form.Label>
                                        <div style={{display:'flex', width:'100%'}}>
                                            <Dropdown style={{width:'50%', display:'flex', justifyContent:'center'}} >
                                                <Dropdown.Toggle style={{width:'90%', backgroundColor:'#51A3A3', border:'none'}}>
                                                    Feet
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item>4</Dropdown.Item>
                                                    <Dropdown.Item>5</Dropdown.Item>
                                                    <Dropdown.Item>6</Dropdown.Item>
                                                    <Dropdown.Item>7</Dropdown.Item>
                                                    <Dropdown.Item>8</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            <Dropdown style={{width:'50%', display:'flex', justifyContent:'center'}}>
                                                <Dropdown.Toggle style={{width:'90%', backgroundColor:'#51A3A3', border:'none'}}>
                                                    Inches
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item>1</Dropdown.Item>
                                                    <Dropdown.Item>2</Dropdown.Item>
                                                    <Dropdown.Item>3</Dropdown.Item>
                                                    <Dropdown.Item>4</Dropdown.Item>
                                                    <Dropdown.Item>5</Dropdown.Item>
                                                    <Dropdown.Item>6</Dropdown.Item>
                                                    <Dropdown.Item>7</Dropdown.Item>
                                                    <Dropdown.Item>8</Dropdown.Item>
                                                    <Dropdown.Item>9</Dropdown.Item>
                                                    <Dropdown.Item>10</Dropdown.Item>
                                                    <Dropdown.Item>11</Dropdown.Item>
                                                    <Dropdown.Item>12</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown >
                                        </div>
                                        <Form.Text>Feet/Inches</Form.Text>
                                        <Form.Label style={{marginTop:'2%'}}>Current Weight</Form.Label>
                                        <Form.Control style={{border:'1px solid #51A3A3'}} type='number' min="90" step="0.1" placeholder=''></Form.Control>
                                        <Form.Text>In pounds (lbs) | You can use the arrows to control decimals </Form.Text>
                                        <Form.Label style={{marginTop:'2%'}}>Weight Goal:</Form.Label>
                                        <Form.Control style={{border:'1px solid #51A3A3'}} type='number' min="90" step="0.1" placeholder=''></Form.Control>
                                        <Form.Text>All information will be used to keep track of your progress</Form.Text>
                                    </FormGroup>
                                </Form>
                        </Container>
                    </Container>
                </div>
            </Card>
        </div>
    )
}

export default SignUp