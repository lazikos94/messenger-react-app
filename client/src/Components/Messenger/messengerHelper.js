import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SmsIcon from '@material-ui/icons/Sms';
//components
import CreateChat from './createChat';
import Chat from './Chat'


export default function MessengerHelper(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const { chatroomId, userProfileImage, userFirstName } = props;

  return (
    <div>
      <Button style={{width: '92%', marginLeft: '4%', backgroundColor: '#00e676', color: 'white'}}
       onClick={handleClickOpen('paper')}> <SmsIcon style={{width: '23%'}}  />SEND MESSEGE </Button>
      <Dialog style={{position: 'absolute'}}
        fullWidth={fullWidth}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
            <DialogTitle style={{ backgroundColor: '#212121'}}>
            <Button style={{marginLeft: '90%'}}
             onClick={handleClose} color="primary">
            CLOSE
          </Button>
            <img style={{display: 'inline-block', width: '69px', height: '69px', borderRadius: '100%'}} src={userProfileImage} alt =''></img>
                <h3 style={{display: 'inline-block', color: 'white'}} >{userFirstName}</h3>
        </DialogTitle>
       

        <DialogContent dividers={scroll === 'paper'} style={{width: '92%', backgroundColor: '#141414'}}>
          <DialogContentText style={{width: '92%', backgroundColor: '#141414'}}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
         <Chat chatroomId={chatroomId}/>
          </DialogContentText>
        </DialogContent>

        <DialogTitle  style={{backgroundColor: '#212121'}} id="scroll-dialog-title">
            <CreateChat chatroomId={chatroomId} />
        </DialogTitle>
      
      </Dialog>
    </div>
  );
}
