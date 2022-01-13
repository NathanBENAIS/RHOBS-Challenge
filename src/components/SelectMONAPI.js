import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
 import './Style.css';

class SelectMONAPI extends Component {

    state = { selectedUsers: [] }

    onChange = selectedUsers => {

        this.setState({
            selectedUsers: selectedUsers || []
        })
    }

    loadOptions = async (inputText, callback) => {

       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id_like=${inputText}`)
      
        const json = await response.json()
         callback(json.map(i => ({ label: i.body, value: i.id, title: i.title })))
        
    }
    
    renderEveryUser = id => {
        
        return (id.title)
     
       
    }
    



    render() {
        return (

            <>
     <h3 style={{  marginLeft: '45%'}}>Select mon API</h3>
        <br/>
                <div className='selec' style={{ marginLeft: "40%", width: "300px",height:"200px" }}>
           
               
                    <AsyncSelect style={{  color:'white'}}
                        isMulti
                        value={this.state.selectedUsers}
                        onChange={this.onChange}
                        placeholder={'Enter a number'}
                        loadOptions={this.loadOptions}

                    />
                    <div style={{  color:'white'}}>
                    {this.state.selectedUsers.map(this.renderEveryUser)}
                    </div>


        
                </div>
            
        
            
            
            </>
        );
    }

} export default SelectMONAPI;