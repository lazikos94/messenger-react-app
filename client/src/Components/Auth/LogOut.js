import React from 'react';
import { signOut } from '../../Store/Actions/AuthAction';
import { connect } from 'react-redux';
//material ui
import Button from '@material-ui/core/Button';

const LogOut = (props) => {

    return (
        <div>
            <Button style={{backgroundColor: '#69f0ae',fontSize: '15px', color: 'white', marginTop: '5px'}}
          onClick={props.signOut}
         > signOut
         </Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LogOut);
