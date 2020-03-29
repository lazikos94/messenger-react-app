import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../Store/Actions/AuthAction';
//material ui
import Input from '@material-ui/core/Input';
import Form from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FileBase64 from 'react-file-base64';



class Register extends Component {
    state = { 
        userName: '',
        email: '',
        profileImage: null
     }

     handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value
         })
     }

     handleSubmit =(e) => {
         e.preventDefault();
         console.log(this.state);
         this.props.signUp(this.state)
     }

     getFiles(profileImage){
        this.setState({ profileImage: profileImage.base64 })
      }

    render() { 
        return (  <div>
        <Form  onSubmit={this.handleSubmit}
            style={{ height: 'fit-content', width:'100%',  borderRadius:'23px', color:'white'}}
        >
            <h1 style={{ marginLeft: '30%'}}>Register</h1>
            <Input 
            style={{  width:'33%', backgroundColor: '#69f0ae', marginLeft: '30%',  borderRadius:'5px'}}
            id="userName"
            placeholder='userName'
            label="userName"
            type="text"
            size='small'         
            onChange={this.handleChange}
             />  
             <hr style={{width: '50%', marginLeft:'20%'}} />
            <Input 
                style={{ width:'33%', backgroundColor: '#69f0ae', marginLeft: '30%',  borderRadius:'5px'}}
                id="email"
                placeholder='email'
                label="email"
                type="email"
                size='small'
                onChange={this.handleChange}
            />
            <hr style={{width: '50%', marginLeft:'20%'}} />
            <Input 
                style={{  width:'33%', backgroundColor: '#69f0ae', marginLeft: '30%',  borderRadius:'5px'}}
                id="password"
                placeholder='password'
                label="password"
                type="password"
                size='small'         
                onChange={this.handleChange}
            />  
             <hr/> 
                <div style={{marginLeft: '10%'}}><FileBase64
            multiple={ false }
            onDone={ this.getFiles.bind(this) } /></div>
            <hr style={{width: '50%', marginLeft:'20%'}} />
            <Button style={{backgroundColor: '#69f0ae', width: '20%', marginLeft: '37%', }}
            size='small'
            onClick={this.handleSubmit}
            > Register 
            </Button>
         
        </Form>
      
        
        </div>
          );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
    }
}

export default connect(null, mapDispatchToProps)(Register);