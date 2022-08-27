import { Container, Nav, Offcanvas } from "react-bootstrap"
import History from "../components/History"
import { useState } from 'react'
import BMICalculator from "../components/BMICalculator.js"
import RandomTip from "../components/RandomTip"
 
function MyProfile(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [view, setView ] = useState(History)

    const handleHistory = () => {
        setView(History)
    }

    const handleBMICalculator = () => {
        setView(BMICalculator)
    }

    const handleRandomTip = () => {
        setView(RandomTip)
    }

    return(
        <div style={{width:'100%', height:'auto', display:"flex", flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
            <h1 style={{marginTop:'5%'}}>Hello (loggedInUser)</h1>
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
                            <Offcanvas placement="bottom" show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                Some text as placeholder. In real life you can have the elements you
                                have chosen. Like, text, images, lists, etc.
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