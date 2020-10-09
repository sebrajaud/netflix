import React, {Component} from 'react';
import Style from './MovieElement.module.scss';

class MovieElement extends Component {
    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }
    
    render() {
        return(
            <div onClick={this.mouseEnter} className={ `bg-light d-flex ${Style.container}` }>
                <div>
                    <img className="d-block img-card" alt="Film" src={this.props.movie.img} width="185" />
                </div>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.movie.title}</h5>
                    <hr className="w-100" />
                    <p className="card-text flex-fill">{this.props.movie.details}</p>
                    { this.props.isFavori ? (
                        <div className="d-flex flex-row justify-content-end">
                            <button className="btn btn-small btn-danger" onClick={ () => { this.props.removeFavori(this.props.movie.title) }}>Remove</button>
                        </div>
                    ) : (
                        <div className="d-flex flex-row justify-content-end">
                            <button className="btn btn-small btn-primary" onClick={ () => { this.props.addFavori(this.props.movie) }}>Add</button>
                        </div>
                    ) }
                </div>
            </div>
        
                
            
        )
    }
}
export default MovieElement;
