import React, {Component} from 'react';

class MovieDetails extends Component {
    
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <div className="w-25 bg-light p-4 d-flex flex-column">
                { this.props.movie ? (
                    <>
                        <h5>{this.props.movie.title}</h5>
                        <hr className="w-100"/>
                        <div className="d-block mx-auto">
                        <img src={this.props.movie.img} alt={this.props.movie.title} className="d-block mx-auto w-100"/>
                        </div>
                        <hr className="w-100"/>
                        
                        <span className="text-secondary">{this.props.movie.details}</span>
                        <span>{this.props.movie.description}</span>
                    </>
                ) : null}
                
            </div>
        )
    }
}
export default MovieDetails;
