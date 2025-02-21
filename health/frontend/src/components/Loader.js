import React from 'react'
import './Loader.css'
import {useNavigate} from 'react-router-dom'

export default function Loader() {
    const navigate = useNavigate();
  return (
    <div className='main-loader'>
      <div class="main-content">
        <h1 className='main-header'>HEALTH PROFILE</h1>
        <img style={{ height: '400px', borderRadius: '25px', marginTop: '20px'}} src="https://img.freepik.com/free-vector/illustration-character-healthcare-concept_53876-43966.jpg?w=996&t=st=1711717756~exp=1711718356~hmac=f80fdd67b6638a71b30a0fb72caf8517d30fd08910a45981a37f1cdc4cd0a5f3"
            alt="Health Vault"/> 
       </div>
       <button className='start-button' onClick={() => {navigate('/docs')}} >Get Started</button>
    </div>
  )
}
