import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function BMICalculator(){

    const [feet, setFeet] = useState('')
    const [feetVal, setFeetVal] = useState('')
    const [inches, setInches] = useState('')
    const [pounds, setPounds] = useState('')
    const [results, setResults] = useState('')
    const [resultText, setResultText] = useState('')
    

    function handleFeet(e){
        let value = (parseInt(e.target.value) * 12)
        setFeet(value)
        setFeetVal(e.target.value)
    }

    function handleInches(e){
        let value = parseInt(e.target.value)
        setInches(value)
    }

    function handlePounds(e){
        let value = parseInt(e.target.value)
        setPounds(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const bmi = (703 * pounds)/Math.pow((feet+inches), 2)
        setResults(bmi.toFixed(2))
        if (bmi < 18.5){
            setResultText("You are underweight!")
        } else if( 18.5 < bmi && bmi < 24.9){
            setResultText("You are in a healthy weight range")
        } else if( 25 < bmi && bmi < 29.9 ){
            setResultText("You are overweight")
        } else if ( bmi > 30){
            setResultText("ALERT, YOU ARE IN THE OBESE RANGE")
        }
        setPounds('')
        setInches('')
        setFeetVal('')

    }

    return(
        <div style={{width:'95%', height:'90vh', fontFamily:"'Nunito', sans-serif"}} className="fade-animation d-flex flex-column">
            <div style={{width:'100%', height:"100%", padding:'2%'}}>
                <div style={{border:"1px solid #51A3A3", width:'100%', height:"50%", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:"center", margin:"1%", borderRadius:"10px", boxShadow:' -2px 7px 40px -11px rgba(0,0,0,0.75)'}}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Text>Feet</Form.Text>
                            <Form.Control type='number' value={feetVal} onChange={handleFeet} />
                            <Form.Text>Inches</Form.Text>
                            <Form.Control type='number' value={inches} onChange={handleInches} />
                            <Form.Text>Weight</Form.Text>
                            <Form.Control type='number' value={pounds} onChange={handlePounds}/>
                            <Button style={{border:'none', backgroundColor:"#51A3A3", width:'100%', marginTop:"3%"}} type='submit'>Calculate BMI</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div style={{width:'100%', height:"50%"}} className="d-flex flex-column flex-md-row align-self-center">
                    <div style={{border:"1px solid #51A3A3", width:"100%", height:"100%", display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"1%", borderRadius:'10px', boxShadow:' -2px 7px 40px -11px rgba(0,0,0,0.75)'}}>
                        <h2>BMI Categories:</h2>
                        <h6>Below 18.5 - underweight</h6>
                        <h6>18.5 to 24.9 - healthy weight</h6>
                        <h6>25 to 29.9 - overweight</h6>
                        <h6>30 or greater - obese</h6>
                    </div>
                    <div style={{border:'1px solid #51A3A3', width:'100%', height:'100%', display:'flex', justifyContent:"center", alignItems:"center", flexDirection:'column', margin:"1%", borderRadius:'10px', boxShadow:' -2px 7px 40px -11px rgba(0,0,0,0.75)'}}>
                        <h1>Your BMI</h1>
                        <h2>{results}</h2>
                        <h2>{resultText}</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BMICalculator