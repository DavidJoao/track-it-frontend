import { Container, Nav, Offcanvas } from "react-bootstrap"
import History from "../components/History"
import { useState, useEffect, useReducer, useContext } from 'react'
import BMICalculator from "../components/BMICalculator.js"
import { getAll, axiosReducer } from '../functions/getAll'
import { Context } from '../App' 


function MyProfile(){
    const { loggedInUser } = useContext(Context)
    const [profile, dispatch] = useReducer(axiosReducer, loggedInUser)
    const [ reload, setReload ] = useState(true)
    const [show, setShow] = useState(false);
    const [view, setView ] = useState(<History/>)
    let quoteArray = ['Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day.','You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season.', ' By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer.', 'Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats.', 'WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.', 'The preferable unsaturated fats are found in fish, avocado and nuts, and in sunflower, soybean, canola and olive oils; saturated fats are found in fatty meat, butter, palm and coconut oil, cream, cheese, ghee and lard', 'There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases']
    const [quote, setQuote] = useState(quoteArray[0])


    
    useEffect(() => {
        profile.response && dispatch({
            key:'loadProfile',
            value:{
                username: profile.response.username,
                feet: profile.response.feet,
                inches: profile.response.inches,
                initialWeight: profile.response.initialWeight,
                currentWeight: profile.response.currentWeight,
                goal: profile.response.goal
            }
        })
    }, [profile.response])
    
    //////////
    useEffect(() => {
        getAll('GET', `/users/username/${loggedInUser.username}`, loggedInUser.token, dispatch)
    },[reload])
    
    //
    
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setQuote(quoteArray[random])
    };
    const random = Math.floor(Math.random() * ((quoteArray.length-1) + 1))
    
    const handleHistory = () => {
        setView(<History />)
    }

    const handleBMICalculator = () => {
        setView(<BMICalculator />)
    }

    console.log(loggedInUser)

    return(
        <div style={{width:'100%', height:'auto', display:"flex", flexDirection:"column", justifyContent:'center', alignItems:'center', fontFamily:"'Nunito', sans-serif"}}>
            {/* <h1 style={{marginTop:'5%'}}>Hello</h1> */}
            <Container style={{width:'85%', border:'5px solid #51A3A3', borderRadius:'10px', boxShadow:'-2px 7px 27px 0px rgba(0,0,0,0.75)'}}>
                    <Nav className="justify-content-center" activeKey="/home">
                        <div style={{display:'flex', justifyContent:'space-around', width:"100%"}}>
                            <Nav.Item>
                            <Nav.Link style={{padding:'1%', marginLeft:'1%', marginRight:'1%', borderRadius:'10px', border:'1px solid #51A3A3', color:'black', width:'110%', marginTop:'2rem', textAlign:"center", backgroundColor:'rgba(81, 163, 163, 0.3)'}} onClick={handleHistory}>Weight History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link style={{padding:'1%', marginLeft:'1%', marginRight:'1%', borderRadius:'10px', border:'1px solid #51A3A3', color:'black', width:'110%', marginTop:'2rem', textAlign:"center", backgroundColor:'rgba(81, 163, 163, 0.3)'}} onClick={handleBMICalculator}>BMI Calculator</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link style={{padding:'1%', marginLeft:'1%', marginRight:'1%', borderRadius:'10px', border:'1px solid #51A3A3', color:'black', width:'110%', marginTop:'2rem', textAlign:"center", backgroundColor:'rgba(81, 163, 163, 0.3)'}} onClick={handleShow}>Want a healthy tip?</Nav.Link>
                            <Offcanvas style={{border:'5px solid #51A3A3', marginLeft:'4%', marginRight:'4%', fontFamily:"'Nunito', sans-serif"}} placement="bottom" show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Did you know?</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                {quote}
                                </Offcanvas.Body>
                            </Offcanvas>
                            </Nav.Item>
                        </div>
                    </Nav>
                    <div style={{display:"flex", justifyContent:'center', padding:'2%'}}>
                        {view}
                    </div>
            </Container>
        </div>
    )
}

export default MyProfile