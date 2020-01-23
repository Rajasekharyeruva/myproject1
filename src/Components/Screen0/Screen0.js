import React from 'react'
import { CardContent } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



class Screen0 extends React.Component{
    
    render(){
         const {classes,handleBackScreenChange} = this.props
        return(
          <div className={classes.mainContainer}>

              <div className={classes.mainHeadingLocation}>
                  <Typography variant="h4" className={classes.mainHeading}>
                   WHAT'S YOUR TRADE-IN  WORTH?
                   </Typography>
              </div>
              <div  className={classes.subHeadingLocation}>
                  <Typography className ={classes.subHeading} variant="caption">
                  Get more  than an estimate - get a virtual appraisal and the confidence that comes <br/> from knowing and the end valuation is backed by the Ford.
                  Valuation  is appliable towards <br/> the purchase of a New or Certified Pre-Owned Ford or Lincoln vehicle.
                  </Typography>
              </div>
             
              
              <Card className={classes.leftCard}>
              <CardActionArea>
              <CardContent>
                    <div >
                     <Typography className ={classes.CardContentHeading} variant="h5"> I OWN IT</Typography>   
                    </div>
                    <div className={classes.CardContentSubHeadingLocation}>
                       <Typography className={classes.CardContentSubHeading} variant="caption"> My vehicle is fully paid off. </Typography>
                    </div>
                  <div className={classes.buttonLeftLocation}>
                  <Button  variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} onClick={()=>handleBackScreenChange('Screen1')} >Select</Button>
                  </div>

              </CardContent> 
              </CardActionArea>
              </Card>

              <Card className={classes.rightCard}>
              <CardActionArea>
              <CardContent>
                    <div  >
                     <Typography className ={classes.CardContentHeading} variant="h5">I AM FINANCING </Typography>   
                    </div>
                    <div className={classes.CardContentSubHeadingLocation}>
                       <Typography className={classes.CardContentSubHeading} variant="caption"> I am financing through Ford Credit,another bank or credit union. </Typography>
                    </div>
                  <div className={classes.buttonRightLocation}>
                  <Button  variant="contained" type="submit" color="primary" className={`${classes.button} ${classes.next}`} onClick={()=>handleBackScreenChange('Screen1')} >Select</Button>
                  </div>

              </CardContent> 
              </CardActionArea>
              </Card>
              
              


              


              <div className={classes.bottomText} >
                 <Typography variant="contained"> If you have a current lease,please  <Link className={`  ${classes.ContactYourDealer}`}  type="submit" variant="contained" onClick={()=>handleBackScreenChange('dealerpage')}>Contact Your Dealer</Link>
                 <t></t>  for more <br/> information about trading in your vehicle.</Typography>

              </div>

              <div >
                  <Typography className={classes.policy}>See Trade-in Terms & Conditions for eligibility details and restrictions.</Typography>
              </div>

          </div>

        )
    }
}

const styles = theme => (
    {
        mainContainer: {
            height:'920px',
            [theme.breakpoints.down('sm')]: { 
                padding: '20px'
              },
            },
        mainHeading: {
                //fontFamily
                  fontSize: '60px',
                   height:'70px',
                  lineHeight: '1.4',
                  [theme.breakpoints.down('sm')]: { 
                    fontSize: '30px',
                    lineHeight: '1.2',
                  },
                  fontWeight: '200',
                  letterSpacing: '2px',
                  fontFamily:'FordAntennaCond',
                  color: '#4d4d4d',
              },
              mainHeadingLocation:{
                padding:'50px 0px 50px 0px'
               },
        subHeading: {
                width: '10px',
                height: '27px',
                fontFamily: 'FordAntenna',
                fontSize: '17px',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.93',
                letterSpacing: '1px',
                textAlign: 'center',
                color: '#4d4d4d',
                
                },
        subHeadingLocation:{
                    padding:'0px 0px 50px 0px'
                    },
        
        leftCard: {
                maxWidth: '325px',
                height:'275px',
                margin: '10px auto',
                boxShadow: '0 20px 20px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.1)',
                borderRadius: '3px',
                align:'left',
                backgroundColor: '#ffffff',
                marginLeft:'275px',    
                float:'left',    
                      },
        CardContentHeading:{
            
                width: '291px',
                height: '36px',
                fontFamily: 'FordAntennaCond',
                fontSize: '25px',
                fontWeight: '300',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.8',
                letterSpacing: '2.67px',
                textAlign: 'center',
                color: '#102b4e',
                float:'right',
                marginBottom:'25px',
               
              
                },
        CardContentSubHeading:{
           
                width: '240px',
                height: '50px',
                padding:'20px 20px 0px 0px',
                fontFamily: 'FordAntenna',
                fontSize: '16px',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.3',
                letterSpacing: '1px',
                textAlign: 'center',
                color: '#4d4d4d',
                

        },
        CardContentSubHeadingLocation:{
            marginTop:'25px',
            textAlign:'center',
        },

        rightCard: {
            maxWidth: '325px',
                height:'275px',
                margin: '10px auto',
                boxShadow: '0 20px 20px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.1)',
                borderRadius: '3px',
                align:'right',
                backgroundColor: '#ffffff',
                marginRight:'275px',
                  },
        next: {
            width: '150px',
            height: '45px',
            fontFamily: 'FordAntennaCond',
            fontSize: '18px',
            margin: '15px 0 28px',
            objectFit: 'contain',
            borderRadius: '20px',
            lineHeight: '0.72',
            boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 20px 20px 0 rgba(0, 0, 0, 0.1)',
          //  backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, #102b4e, #102b4e)',
        },
        buttonLeftLocation:{
            marginTop:'75px',
            marginBottom:'25px',
        },
        buttonRightLocation:{
            padding:'55px 5px 35px 5px',
        },
       
        bottomText:{
            marginTop:'100px',
            textAlign:'center',
            fontFamily:'FordAntennaCond',
            fontSize:'18px',
            fontStretch:'normal',
            letterSpacing:'1px',
            color:'#4d4d4d',
            lineHeight:1.93

        },
        policy:{
          
          marginTop:'100px',
          textAlign:'center',
          fontFamily:'FordAntennaCond',
          fontSize:'13px',
          fontStretch:'normal',
          letterSpacing:'1px',
          color:'#4d4d4d',
          lineHeight:1.93
        }

}
)

export default withStyles (styles)(Screen0)