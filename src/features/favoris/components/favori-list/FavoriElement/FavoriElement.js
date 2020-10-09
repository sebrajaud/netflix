import React, {Component} from 'react';
import Style from './FavoriElement.module.scss';

class FavoriElement extends Component {
    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.favori.title)
    }
    
    render() {
        const { favori } = this.props
        return(
            <div  className={ `bg-light d-flex flex-row ${Style.container}` }>
                <div>
                    <img className="d-block img-card" alt="Film" src={favori.img} width="185" />
                </div>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{favori.title}</h5>
                    <hr className="w-100" />
                    <p className="card-text flex-fill">{favori.details}</p>
                    <div className="d-flex flex-row justify-content-end">
                        <button className="btn btn-small btn-danger" onClick={ this.props.removeFavori }>Remove</button>
                    </div>
                </div>
            </div>
        
                
            
        )
    }
}
export default FavoriElement;
