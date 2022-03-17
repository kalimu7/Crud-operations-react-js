import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Container_form = styled.div`
    width: 200px;
    height: 300px;
`
const  Form_container = styled.div`
    
`

const Input = styled.input`
    margin: 10px 0px;

`

function Update() {

    

    const [FisrtName,setFirstName] = useState(''); 
    const [LastName,setLastName] = useState(''); 
    const [id,setid]=useState(null);
    const handlesubmit = (e) =>{
            e.preventDefault();
            axios.put(`https://622df5628d943bae348af735.mockapi.io/crud/${id}`,{
                FisrtName,
                LastName
            })
    }
    useEffect(()=>{
      setFirstName(localStorage.getItem('FisrtName'));
      setLastName(localStorage.getItem('LastName'));
      setid(localStorage.getItem('ID'));
    },[])
    
  return (
    <div>
        <Container>
            <Container_form>
                <form  >
                <Form_container>
                    <label>First Name:</label>
                    <Input value={FisrtName} placeholder='first name' onChange={(e)=>setFirstName(e.target.value)} />
                </Form_container>
                <Form_container>
                    <label>Last Name:</label>
                    <Input value={LastName} placeholder='last name'  onChange={(e)=>setLastName(e.target.value)}  />
                </Form_container>
                <Link to='/read'> <button  onClick={handlesubmit} type='submit' >Update</button> </Link> 
                </form>
            </Container_form>
            
        </Container>
    </div>
  )
}

export default Update