import axios from 'axios'
import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import './read.css';
import { Link } from 'react-router-dom';
const Container = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Sub_Container = styled.div`
    
`
const Butong = styled.button`
    background-color: green;
    color: #fff;
    font-size: 15px;
    padding:5px;
    border-radius: 9px;
    border: none;
    cursor: pointer;
`

const Butonr = styled.button`
    background-color: red;
    color: #fff;
    font-size: 15px;
    padding:5px;
    outline: none;
    border-radius: 9px;
    border: none;
    cursor: pointer;
`

function Read() {

    const [apiData,setapiData] = useState([]); 

    useEffect(()=>{
        axios.get('https://622df5628d943bae348af735.mockapi.io/crud').then(
            (getdata)=>{
                setapiData(getdata.data);
            }
        )
    })
   
    const sendid = (id,FisrtName,LastName)=>{
        console.log(id,FisrtName,LastName);
        localStorage.setItem('ID',id);
        localStorage.setItem('FisrtName',FisrtName);
        localStorage.setItem('LastName',LastName);
    } 

    const getdata = () =>{
        axios.get('https://622df5628d943bae348af735.mockapi.io/crud').then(
            (getdata)=>{
                setapiData(getdata.data);
            }
        )
    }

    const ondelete = (id) =>{
            axios.delete(`https://622df5628d943bae348af735.mockapi.io/crud/${id}`).then(
                ()=>{
                    getdata();
                }
            )
    }

  return (
    <div>
        <Container>
            <Sub_Container>
                <tr>
                    <th>UserID</th>
                    <th>Fisrt Name</th>
                    <th>Last Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {apiData.map((members)=>{
                    return(
                        <tr>
                        <td>{members.id}</td>
                        <td>{members.FisrtName}</td>
                        <td>{members.LastName}</td>
                        <td>  <Link to='/update' > <Butong onClick={()=>sendid(members.id,members.FisrtName,members.LastName)} >Update</Butong> </Link>  </td>
                        <td> <Link to='/read'><Butonr onClick={()=>ondelete(members.id)} >Delete</Butonr></Link> </td>
                    </tr>
                    )
                })}
                
            </Sub_Container>
        </Container>
        
    </div>
  )
}

export default Read