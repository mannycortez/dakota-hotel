import React from 'react'
import { Button, Container, Grid, Paper } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

const AdminDashboard = () => {
    return (
        <Container maxWidth="md">
          <div>
            <h1>Admin Dashboard</h1>
            <Grid container spacing={2}
                            direction="row"
                            justify="center"
                            alignItems="center" fluid >

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Room 801
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Room 802
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Room 803
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Room 804
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="elevation2">
                    <Button size="large" style={{
                              fontSize: 44,
                              color: "white", 
                              backgroundColor: "#333",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Floor 8
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Room 805
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Room 806
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='outlined'>
                        Room 807
                    </Button>
                </Paper>
            </Grid>

            <Grid item>
                <Paper variant="outlined">
                    <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green",
                              margin: 20
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained'>
                        Room 808
                    </Button>
                </Paper>
            </Grid>
            </Grid>
          </div>
        </Container>
    )
}

export default AdminDashboard
