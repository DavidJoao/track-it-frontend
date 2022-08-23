import { Card, Form, FormGroup, Button } from 'react-bootstrap'

function LogIn(){
    return(
        <div style={{width:'26rem'}}>
            <Card style={{border:'1px solid #51A3A3', height:'50vh'}}>
                <Card.Header style={{textAlign:'center', backgroundColor:'#51A3A3', color:"white"}}>Log In</Card.Header>
                <Card.Body style={{}} className="d-flex flex-column">
                    <Form>
                        <FormGroup className='d-flex flex-column'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control style={{border:'1px solid #51A3A3'}} type='user' placeholder='Ex. David123'></Form.Control>
                            <Form.Label>Password</Form.Label>
                            <Form.Control style={{border:'1px solid #51A3A3'}} type='password' placeholder='Password'></Form.Control>
                            <Form.Text>Don't share your password with anyone else.</Form.Text>
                            <Button style={{marginTop:'5%', backgroundColor:'#51A3A3', border:'1px solid #51A3A3'}}>Log In</Button>
                        </FormGroup>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LogIn