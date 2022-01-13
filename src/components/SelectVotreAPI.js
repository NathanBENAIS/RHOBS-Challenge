import React, { Component } from 'react';
import AsyncSelect from 'react-select/async'; import './Style.css';

class UsersList extends Component {

    state = { selectedUsers: [] }

    onChange = selectedUsers => {

        this.setState({
            selectedUsers: selectedUsers || []
        })
    }

    loadOptions = async (inputText, callback) => {

        fetch(`https://api.le-systeme-solaire.net/rest.php/knowncount/${inputText}`).then(function (response) {
            return response.json();
        }).then(function (data) {
            // This is the JSON from our response
            callback(data.map(i => ({ label: i.id, value: i.updateDate, knownCount: i.knownCount })))


            console.log(data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        })
        //id: 'planet', knownCount: 8, updateDate: '24/08/2006'
    }

    renderEveryUser = id => {

        return (id.knownCount)

    }
    render() {
        return (

            <>

                <div className='coche' style={{ width: "30px", height: "100px" }}>
                <h2 >Is Planet</h2>
                    <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} />
                    
                </div>


                <div className='selec' style={{ marginLeft: "40%", width: "300px", height: "200px" }}>
                    <h3 style={{ marginLeft: '25%' }}>Select Votre API</h3> <br />
                    <AsyncSelect
                        isMulti
                        value={this.state.selectedUsers}
                        onChange={this.onChange}
                        placeholder={'type somethig ...'}
                        loadOptions={this.loadOptions}
                        defaultOptions={true}
                    />
                    <div>
                        {this.state.selectedUsers.map(this.renderEveryUser)}
                    </div>
                </div>
            </>
        );
    }

} export default UsersList;

