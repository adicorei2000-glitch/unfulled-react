import { useNavigate } from 'react-router-dom'
import LoginComp from './pages/login';
import { ButtonStyle, Mainstyle } from './contrast/genelStyle';
import { BackBtn, LoginBtn } from './contrast/button';


const HomeComponent = () => {
  const navigate = useNavigate();
  function backfunc() {
    console.log("Back")
    navigate(-1)
  }
  return (
    <Mainstyle>

      {/* <button onClick={backfunc}>Back</button> */}
      <div style={{ padding: "20px", fontSize: "larger" }}>Home-page</div>
      <ButtonStyle onClick={backfunc}>Back</ButtonStyle>
      <ButtonStyle onClick={() => navigate('/login')} style={{ boxSizing: "border-box", padding: "20px", fontSize: "small" }}>Log Out</ButtonStyle>

      <ButtonStyle />
      <LoginComp />
      <BackBtn />
      <LoginBtn />
    </Mainstyle>
  )
}

export default HomeComponent



