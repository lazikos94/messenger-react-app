import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../Store/Actions/AuthAction';
//material ui
import Input from '@material-ui/core/Input';
import Form from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';




class Login extends Component {
    state = { 
        email: '',
        password: ''
     }

     handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value
         })
     }

     handleSubmit =(e) => {
         e.preventDefault();
         console.log(this.state);
         this.props.signIn(this.state)
     }

    render() { 

        return (  <div>
        <Form  onSubmit={this.handleSubmit}
            style={{ height: '23px', width:'100%',  borderRadius:'23px', color:'white'}}
        >
            <h3 style={{ marginTop: '10px'}}>Login</h3>
        <Input 
            style={{ width:'33%', backgroundColor: '#69f0ae',  marginTop:'10px', borderRadius:'10px'}}
            id="email"
            placeholder='email'
            label="email"
            type="email"
            size='small'
            onChange={this.handleChange}
        />
    
        <Input 
            style={{  width:'33%', backgroundColor: '#69f0ae',  marginTop:'10px', borderRadius:'10px'}}
            id="password"
            placeholder='password'
            label="password"
            type="password"
            size='small'         
            onChange={this.handleChange}
         />  
         <Button style={{backgroundColor: '#69f0ae', marginTop:'10px', borderRadius:'10px' }}
         size='small'
          onClick={this.handleSubmit}
         > Login 
         </Button>
         
        </Form>
      
        
        </div>
          );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials)),
    }
}

export default connect(null, mapDispatchToProps)(Login);