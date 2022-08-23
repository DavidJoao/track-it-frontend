import { Button } from 'react-bootstrap'

function Home(){
    return(
        <div style={{width:'100%', height:'100vh', backgroundColor:'#E4EEEE', display:'flex', justifyContent:'center', alignItems:"center"}}>
            <div style={{border:'3px solid #51A3A3', height:'60vh', width:'50%', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:"center", boxShadow:'2px 6px 28px -2px rgba(0,0,0,0.75)', padding:'2%'}}>
                <h1 style={{fontSize:'55px', padding:'3%', borderRadius:'10px', border:'5px solid #51A3A3', backgroundColor:'#C8DDDD'}}>Track It!</h1>
                <h5 style={{textAlign:'center'}}>Start tracking your weight loss Journey</h5>
                <div style={{width:'14rem', display:'flex', flexDirection:"column", justifyContent:'space-around', alignItems:'center'}}>
                    <Button style={{marginBottom:'2%', border:'none', backgroundColor:"#51A3A3"}}>Create an account</Button>
                    <h5 style={{textAlign:'center', borderBottom:'1px solid gray', borderTop:'1px solid gray', width:'50%', margin:'5% 0 5% 0', padding:'3%'}}>or</h5>
                    <Button style={{border:"none", backgroundColor:'#51A3A3', width:'70%'}} >Log In</Button>
                </div>

            </div>
        </div>
    )
}

export default Home