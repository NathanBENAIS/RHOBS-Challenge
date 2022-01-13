import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import './U.css';


// import '..node_modules/rsuite/dist/styles/rsuite-default.css';

class UsersList extends Component {

    state = { selectedUsers: [] }

    onChange = selectedUsers => {

        this.setState({
            selectedUsers: selectedUsers || []
        })
    }

    loadOptions = async (inputText, callback) => {

       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id_like=${inputText}`)
       // const response = await fetch(`https://api.le-systeme-solaire.net/swagger/#/knowncount/get_knowncount?id_like=${inputText}`)
        const json = await response.json()
         callback(json.map(i => ({ label: i.body, value: i.id, title: i.title })))
        //callback(json.map(i => ({ label: i.id, value: i.id, id: i.id })))
    }
    
    renderEveryUser = id => {
        
        return (id.title)
       // return (id.knownCount)
       
    }
    



    render() {
        return (

            <>

<div className='coche'>

<input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />

</div>



                <div className='selec' style={{ marginLeft: "40%", width: "300px",height:"200px" }}                 
                >

                {/* {true ? info : null} */}
                    <AsyncSelect
                        isMulti
                        value={this.state.selectedUsers}
                        onChange={this.onChange}
                        placeholder={'type somethig ...'}
                        loadOptions={this.loadOptions}

                    />
                    <div>
                    {this.state.selectedUsers.map(this.renderEveryUser)}
                    </div>


        
                </div>
            
        
            
            
            </>
        );
    }

} export default UsersList;

