import React from 'react';
import axios from 'axios';

export default class demo extends React.Component  {
    
    constructor(){
        super();
        this.state={
            users : {}
        };

        this.print = this.print.bind(this);
        this.changeVal = this.changeVal.bind(this);
    }
    
    print(){
        console.log("1");
        //console.log(s);
        //console.log(this.state.email);
        axios.get("http://localhost:8888/getdata").then(res => 
        this.setState({
            users : { 
                email : res.data.email,
                name : res.data.name
            }
        })
        )
    }

    changeVal(a){
        //console.log(a.target.value);
        this.setState({
            email:a.target.value
        })

        
    }
    
    render(){
        return(
            <div>
        <div>
            <h2>Hello World !!!!</h2>
            
                Mail id <input type="text" name="n" ></input><br></br><br></br>
                <input type="submit" value="click" onClick={this.print}></input>
            
        </div>

        <div>
            <pre>
                Id : {this.state.users.email}
                <br></br>
                Name : {this.state.users.name}
            </pre>
        </div>
        </div>
        )};
}
