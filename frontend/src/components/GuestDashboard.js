import React from 'react'
import { Button, Container, Grid, Paper } from '@material-ui/core'

const GuestDashboard = () => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={4}
                            direction="row"
                            justify="center"
                            alignItems="center" fluid>
                <Grid item>
                    <Paper variant="outlined" justify="center">
                        <Button size="lg" style={{
                              fontSize: 50,
                              color: "white",
                              padding: 50,
                              backgroundColor: "gold",
                              borderRadius: 10,
                              margin: 20
                            }}>
                            Clean my room
                        </Button>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper variant="outlined" justify="center">
                        <Button size="lg" style={{
                              fontSize: 50,
                              color: "white",
                              padding: 50,
                              backgroundColor: "blue",
                              borderRadius: "50%",
                              margin: 20
                            }}>
                            What to Do
                        </Button>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper variant="outlined" justify="center">
                        <Button size="lg" style={{
                              fontSize: 50,
                              color: "white",
                              padding: 50,
                              backgroundColor: "orange",
                              borderRadius: "50%",
                              margin: 20
                            }}>
                            Feed Me
                        </Button>
                    </Paper>
                </Grid>      
            </Grid>
        </Container>
    )
}

export default GuestDashboard
