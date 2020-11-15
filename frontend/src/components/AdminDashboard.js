import React from 'react'
import { Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

const AdminDashboard = () => {
    return (
        <div>
            <h1>Hello from Dashboard</h1>
            <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green"
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained' >
        Room 805
      </Button>
        </div>
    )
}

export default AdminDashboard
