import React, { Component } from 'react';
import Loading from './Loading';

export const WithLoader = (WrappedComponent, dataName ) => {
    return class extends Component {
        render(){
            return(
                <>
                    { this.props[dataName] ? <WrappedComponent {...this.props} /> : <Loading /> }
                </>
            )
            
        }
    }
}