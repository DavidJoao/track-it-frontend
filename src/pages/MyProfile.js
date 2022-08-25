import { Container, Nav } from "react-bootstrap"
import History from "../components/History"
import { useState } from 'react'
import BMICalculator from "../components/BMICalculator.js"
import RandomTip from "../components/RandomTip"
 
function MyProfile(){

    const [view, setView ] = useState(()=>History)

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
        <div style={{width:'100%', height:'100vh', display:"flex", flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
            <h1>Hello (loggedInUser)</h1>
            <Container style={{width:'85%', border:'1px solid black'}}>
                    <Nav className="justify-content-center" activeKey="/home">
                        <div style={{display:'flex', justifyContent:'space-around', width:"100%"}}>
                            <Nav.Item>
                            <Nav.Link onClick={handleHistory}>Weight History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link onClick={handleBMICalculator}>BMI Calculator</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link onClick={handleRandomTip}>Want a healthy tip?</Nav.Link>
                            </Nav.Item>
                        </div>
                    </Nav>
                    {view}
            </Container>
        </div>
    )
}

export default MyProfile