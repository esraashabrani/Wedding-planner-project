import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function WishList() { 
   const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
       <div class="list-group">
         <div>
         <ul>
            <li><Link to="/homepage">Home Page</Link></li>
            </ul>
          <h5>Here are some suggestions</h5>
         </div> 
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary" >Honeymoon Trip</a>
  <button href="#" class="list-group-item list-group-item-action list-group-item-secondary"  >Cars (give a drive on your wedding day,decorations)</button>
  <button href="#" class="list-group-item list-group-item-action list-group-item-success">Home (Furniture,Electrical Tools,house decorations)</button>
  <button href="#" class="list-group-item list-group-item-action list-group-item-warning">Clothes, Flowers, Food Invitation</button>
  <button href="#" class="list-group-item list-group-item-action list-group-item-danger">Some Money</button>
  <button href="#" class="list-group-item list-group-item-action list-group-item-secondary">Bring someone special for you</button>
  <button href="#" class="list-group-item list-group-item-action list-group-item-success">Help with wedding preparations</button>
  <button href="#" class="list-group-item list-group-item-action list-group-item-warning">Arrange the wedding party for you / Making Surprise Party</button>
 <br/> 
​
        <div>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
               Know More About wish list
            </Button>
       </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <a href="https://docs.google.com/forms/d/1eClF5p5S3LbLfT_hLxyIYeaJmHPe3cQqLMA0Ly02NrE/copy" target="_blank">Make a Wish List!</a>
                        <h3>Put some of things that you wish to receive as a gift on your wedding & attach it with the card Invitation so we can send it to your friends </h3>
                        <h3>
                            Express comfortably about your wishes 
                            and give your friends a chance to help you achieve it!
                        </h3>
                        <h2>make it things that you can get!</h2>
                    </div>
                </Fade>
            </Modal>
        </div>
        );
}