import React from 'react';

export class Search extends React.Component{
    state= {
        query:'',
    }
    handleInputChange= () => {
        this.setState({
            query:this.state.value
        })
    }
    render(){
        return (
            <div id='searchInput'>
                <form>
                    <input placeholder="Who is your favourite author?" ref={input => this.search = input} onchange={this.handleInputChange}/>
                    <p>{this.state.query}</p>
                </form>
                <button>
                    Search
                </button>
            </div>
        );

    }
}