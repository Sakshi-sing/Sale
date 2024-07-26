import React from 'react'
import 
{ BsFillBarChartFill, BsBoxArrowLeft, BsBoxArrowRight, BsTrophy}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'January',
          Recevied: 4000,
          sent: 320,
          
        },
        {
          name: 'February',
          Recevied: 5158,
          sent: 0,
        
        },
        {
          name: 'March',
          Recevied: 0,
          sent: 0,
        
        },
        {
          name: 'April',
          Recevied: 0,
          sent: 0,
        
        },
        {
          name: 'May',
          Recevied: 7006,
          sent: 5100,
          amt: 2181,
        },
        {
          name: 'June',
          Recevied: 0,
          sent: 0,
        
        },
        {
          name: 'July',
          Recevied: 0,
          sent: 0,
         
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Welcome <b>Admin</b></h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Revenue</h3>
                    <BsFillBarChartFill className='card_icon'/>
                </div>
                <h1>0.00</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Sale Return</h3>
                    <BsBoxArrowLeft className='card_icon'/>
                </div>
                <h1>0.00</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Purchase Return</h3>
                    <BsBoxArrowRight className='card_icon'/>
                </div>
                <h1>0.00</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Profit</h3>
                    <BsTrophy className='card_icon'/>
                </div>
                <h1>0.00</h1>
            </div>
        </div>

        <div className='charts'>
          

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sent" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Recevied" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home