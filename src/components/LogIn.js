import { Card, Form, FormGroup, Button } from 'react-bootstrap'
import { useContext, useEffect, useReducer } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Context } from '../App'
import { getAll, axiosReducer } from '../functions/getAll'

function LogIn(){
//
    const [loginInfo, dispatch ] = useReducer(axiosReducer, { username: '', password: ''})
    const { loggedInUser, dispatchUser } = useContext(Context)
    const navigate = useNavigate()

//handlers
    const handleChange = (e) => {
        dispatch({
            key: e.target.classList[0],
            value: e.target.value
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        getAll('POST', `/users/login`, null, dispatchUser, loginInfo)
        dispatchUser({ key: 'username', value: loginInfo.username })
        navigate('/myprofile')
    }

    useEffect(() => {
        dispatchUser({ key: 'username', value: loginInfo.username })
        loggedInUser.token && navigate('/myprofile')
      },[loggedInUser.token])

    return(
        <div className='fade-animation' style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', fontFamily:"'Nunito', sans-serif"}}>
            <Card style={{border:'1px solid #51A3A3', height:'50vh'}}>
                <Card.Header style={{textAlign:'center', backgroundColor:'#51A3A3', color:"white"}}>Log In</Card.Header>
                <Card.Body style={{}} className="d-flex flex-column">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className='d-flex flex-column'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control className='username' onChange={handleChange} value={loginInfo.username} style={{border:'1px solid #51A3A3'}} type='user' placeholder='Ex. David123'></Form.Control>
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='password' onChange={handleChange} value={loginInfo.password} style={{border:'1px solid #51A3A3'}} type='password' placeholder='Password'></Form.Control>
                            <Form.Text>Don't share your password with anyone else.</Form.Text>
                            <Button type='submit' style={{marginTop:'5%', backgroundColor:'#51A3A3', border:'1px solid #51A3A3'}}><Link style={{color:'white', textDecoration:'none'}} to="/myprofile">Log In</Link></Button>
                        </FormGroup>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LogIn