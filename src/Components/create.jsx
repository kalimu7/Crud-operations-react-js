import React, { useState } from 'react'
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


function Create() {

    
    const [FisrtName,setFirstName] = useState(''); 
    const [LastName,setLastName] = useState(''); 
    
    const handlesubmit = (e) =>{
            e.preventDefault();
            axios.post('https://622df5628d943bae348af735.mockapi.io/crud',{
                FisrtName,
                LastName
            })
    }
    
  return (
    <div>
        <Container>
            <Container_form>
                <form  >
                <Form_container>
                    <label>First Name:</label>
                    <Input placeholder='first name' onChange={(e)=>setFirstName(e.target.value)} />
                </Form_container>
                <Form_container>
                    <label>Last Name:</label>
                    <Input placeholder='last name'  onChange={(e)=>setLastName(e.target.value)}  />
                </Form_container>
                 <button  onClick={handlesubmit} type='submit' >Submit</button>
                </form>
            </Container_form>
            
        </Container>
    </div>
  )
}

export default Create