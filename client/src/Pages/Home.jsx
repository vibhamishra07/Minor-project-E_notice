
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import TabBar from '../Components/TabBar';
import {useDispatch} from 'react-redux';
import { allMessages } from '../Redux/features/messages/messageSlice';



const Home = () => {
  const dispatch=useDispatch();


  useEffect(() => {
    console.log("home")
    dispatch(allMessages());
  }, [])
  
  

  return (
    <div>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' ,display: 'flex', alignItems: 'center'}}> All Messages</Typography>
      <TabBar/>
      

      
    </div>
  )
}

export default Home;