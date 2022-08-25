import React, { useReducer, useState } from 'react'
import { Card, Form, FormGroup, Button, Container, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { axiosReducer, getAll } from '../functions/getAll'

function SignUp(){

    const initialState = {
        username: '',
        password: '',
        confirmPassword: '',
        feet: '',
        inches: '',
        currentWeight:'',
        initialWeight:'',
        goal:'',
    }

    
    const [signupInfo, dispatch] = useReducer(axiosReducer, initialState)
    const navigate = useNavigate()
    const [ feet, setFeet ] = useState('')
    const [ inches, setInches ] = useState('')
    
    function handleChange(e) {
        dispatch({
            key: e.target.classList[0],
            value: e.target.value
          })
          console.log(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        signupInfo.password === signupInfo.confirmPassword && getAll('POST', `/users/signup`, null, dispatch, signupInfo)
        navigate('/login')
    }

    const handleFeet = (e) => {
        console.log(e)
        setFeet(e)
    }

    const handleInches = (e) => {
        console.log(e)
        setInches(e)
    }

    return(
        <div style={{width:'auto', marginLeft:'5%', marginRight:'5%', height:'auto', padding:'2%'}}>
            <Card style={{border:'1px solid #51A3A3', height:'auto', width:'80%', margin:'0 auto'}} className="d-flex flex-column">
                <Card.Header style={{textAlign:'center', backgroundColor:'#51A3A3', color:"white"}}>Sign Up</Card.Header>
                <div style={{padding:'2%'}}>
                    <Container className='d-flex flex-column flex-lg-row'>
                        <Container style={{width:'80%', height:'auto'}}>
                            <Form action='' onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'auto'}}>
                                <FormGroup style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control style={{border:'1px solid #51A3A3'}} type='text' placeholder='Ex. David123' onChange={handleChange} defaultValue={signupInfo.username}></Form.Control>
                                    <Form.Label style={{marginTop:'2%'}}>Password</Form.Label>
                                    <Form.Control defaultValue={signupInfo.password} onChange={handleChange} style={{border:'1px solid #51A3A3'}} type='password' placeholder='Password'></Form.Control>
                                    <Form.Label style={{marginTop:'2%'}}>Confirm Password</Form.Label>
                                    <Form.Control defaultValue={signupInfo.confirmPassword} onChange={handleChange} style={{border:'1px solid #51A3A3'}} type='password' placeholder='Password'></Form.Control>
                                    <Form.Text>Don't share your password with anyone else.</Form.Text>
                                    <Form.Label>Height</Form.Label>
                                      <div style={{display:'flex', width:'100%'}}>
                                           <Dropdown defaultValue={signupInfo.feet} id='dropdown-basic' onSelect={handleFeet} style={{width:'50%', display:'flex', justifyContent:'center'}} >
                                            <Dropdown.Toggle style={{width:'90%', backgroundColor:'#51A3A3', border:'none'}}>
                                                {feet || 'Feet'}
                                            </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item eventKey='4' value="4">4</Dropdown.Item>
                                                    <Dropdown.Item eventKey='5' value='5'>5</Dropdown.Item>
                                                    <Dropdown.Item eventKey='6' value='6'>6</Dropdown.Item>
                                                    <Dropdown.Item eventKey='7' value='7'>7</Dropdown.Item>
                                                    <Dropdown.Item eventKey='8' value='8'>8</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            <Dropdown defaultValue={signupInfo.inches} onSelect={handleInches} style={{width:'50%', display:'flex', justifyContent:'center'}}>
                                               <Dropdown.Toggle style={{width:'90%', backgroundColor:'#51A3A3', border:'none'}}>
                                                    {inches || 'Inches'}
                                                </Dropdown.Toggle>

                                             <Dropdown.Menu>
                                                <Dropdown.Item eventKey='1' value='1'>1</Dropdown.Item>
                                                <Dropdown.Item eventKey='2' value='2'>2</Dropdown.Item>
                                                <Dropdown.Item eventKey='3' value='3'>3</Dropdown.Item>
                                                <Dropdown.Item eventKey='4' value='4'>4</Dropdown.Item>
                                                <Dropdown.Item eventKey='5' value='5'>5</Dropdown.Item>
                                                <Dropdown.Item eventKey='6' value='6'>6</Dropdown.Item>
                                                <Dropdown.Item eventKey='7' value='7'>7</Dropdown.Item>
                                                <Dropdown.Item eventKey='8' value='8'>8</Dropdown.Item>
                                                <Dropdown.Item eventKey='9' value='9'>9</Dropdown.Item>
                                                <Dropdown.Item eventKey='10' value='10'>10</Dropdown.Item>
                                                <Dropdown.Item eventKey='11' value='11'>11</Dropdown.Item>
                                                <Dropdown.Item eventKey='12' value='12'>12</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown >
                                    </div>
                                    <Form.Text>Feet/Inches</Form.Text>
                                    <Form.Label style={{marginTop:'2%'}}>Current Weight</Form.Label>
                                    <Form.Control defaultValue={signupInfo.currentWeight} onChange={handleChange} style={{border:'1px solid #51A3A3'}} type='number' min="90" step="0.1" placeholder=''></Form.Control>
                                    <Form.Text>In pounds (lbs) | You can use the arrows to control decimals </Form.Text>
                                    <Form.Label style={{marginTop:'2%'}}>Weight Goal:</Form.Label>
                                    <Form.Control defaultValue={signupInfo.goal} onChange={handleChange} style={{border:'1px solid #51A3A3'}} type='number' min="90" step="0.1" placeholder=''></Form.Control>
                                    <Form.Text>All information will be used to keep track of your progress</Form.Text>
                                        <Button type='submit' style={{width:'50%', border:'none', backgroundColor:'#51A3A3', margin:'5%', alignSelf:'center'}}>Sign Up</Button>
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