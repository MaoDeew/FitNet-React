import React, { Component } from 'react';
import classes from '../Profile/Profile.css';
import { makeStyles } from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonalData from './PersonalData';
import FormDialog from './FormDialog';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { Slider } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        widht: 250,
    },
    margin:{
        height: theme.spacing(3),
    },
}));

function valuetext(value){
    return `${value}Kg`;
}

const marks =[
    {
        value: 0,
        label: '0 Kg',
    },
    {
        value: 20,
        label: '20 Kg',
    },
    {
        value: 30,
        label: '30 Kg',
    },
    {
        value: 50,
        label: '50 Kg',
    },
    {
        value: 100,
        label: '100 Kg',
    },
];

class Profile extends Component {
    
    state = {
        name: this.props.name,
        surname: this.props.surname,
        email: this.props.email,
        height: this.props.height,
        weight: this.props.weight,
        avatar: this.props.avatar
    }

    renderAdvice(){
        return(
            <p>It seems that the account is new, fill the fields of height and weight to complete the registration to FitNet</p>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Your FitNet Profile</h1>
                    <div>
                        <Grid container spacing={3}>

                            <Grid className={classes.gridAvatar} item xs={5}>
                                <Paper>
                                    <img alt='profilePhoto' className={classes.avatar} src={this.state.avatar} />
                                </Paper>
                            </Grid>

                            <Grid item xs={7}>
                                <Paper>
                                    <PersonalData
                                        name={this.state.name}
                                        surname={this.state.surname}
                                        email={this.state.email}
                                        height={this.state.height}
                                        weight={this.state.weight} />
                                        <div className={classes.root} >
                                            <Typography id="track-fat" gutterBottom>
                                                Fat Track
                                            </Typography>
                                            <Slider
                                                track="inverted"
                                                aria-labelledby="track-nverted-slider"
                                                getAriaValueText={valuetext}
                                                defaultValue={30}
                                                marks={marks}
                                            />
                                        </div>        
                                </Paper>
                                <div style={{paddingTop: 7}}>
                                <Paper className={classes.paperButtons} >
                                {this.state.height === 0 && this.state.weight === 0 ? this.renderAdvice() : null}
                               
                                    <div className={classes.buttonSeparator}>
                                    <FormDialog message= {this.state.height === 0 && this.state.weight === 0 ? 'edit height and weight' : 'edit personal information'} />
                                    </div>
                                    
                                    <Button variant="contained" color="primary" >
                                        Calculate BMI
                                    </Button>
                                </Paper>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
      name : state.firebaseStore.profile.name,
      surname : state.firebaseStore.profile.surname,
      email : state.firebaseStore.profile.email,
      height : state.firebaseStore.profile.height,
      weight : state.firebaseStore.profile.weight,
      avatar : state.firebaseStore.auth.photoURL
    }
  }

export default connect(mapStateToProps)(Profile);
