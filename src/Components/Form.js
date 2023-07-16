import React from "react";
import "./Form.css"
import { Component } from "react";

class Form extends Component{
    state ={  
        Name :'',
        Dept :"",
        Rating:"",
        EmpData : []
    }

    changeHandle = (event)=>{
        this.setState({[event.target.name] : event.target.value})
       
    }
    clickHandle =(e)=>{
        e.preventDefault();
        const empObj = {
            name :this.state.Name,
            dept :this.state.Dept,
            rating : this.state.Rating
        }
        this.state.EmpData.push(empObj);
        this.setState({EmpData : this.state.EmpData});
        console.log(this.state.EmpData)
    }
    


    render(){
        return(
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
                <label htmlFor="name" >Name :</label>
                <input id="name" type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandle} required/><br/>
                
                <label htmlFor="dept" >Department :</label>
                <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.changeHandle} required/><br/>
                
                <label htmlFor="rating" >Rating :</label>
                <input id="rating" type="number"  placeholder="Enter Rating" name="Rating" value={this.state.Rating} onChange={this.changeHandle} required/>
                
                
                <br/>
                <button  onClick={this.clickHandle}>Submit</button>
                </form>

                <div className="Output">
                    {this.state.EmpData.map((item,index)=>{
                        return(
                            <div className="DataBox" key={index}>
                               Name : {item.name} || Depatrment : {item.dept} || Rating : {item.rating} 
                            </div>
                        )
                    })}
                </div>
            </div>
           

        )
    }
}

export default Form;