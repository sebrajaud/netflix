import React, { Component } from 'react';
import { Formik } from 'formik';

class SearchBar extends Component {
    
    submit = (values, actions) => {
        this.props.fetchMovies(values).then(
            actions.setSubmitting(false)
        );

    }

    render() {
        return(
            <Formik 
                onSubmit={this.submit}
                initialValues={ { query: '', language: 'en-US' }}
            >
                    { ({ handleSubmit, handleBlur, handleChange, isSubmitting })  => (
                        <form onSubmit={handleSubmit} className="p-2 m-2 d-flex flex-row">
                            <input name="query" placeholder="Search.." type="text" onChange={handleChange} onBlur={handleBlur} className="form-control flex-fill mr-2"/>
                            <select name="language" onChange={handleChange} onBlur={handleBlur} className="mr-2 form-control">
                                <option value="en-US">Anglais</option>
                                <option value="fr-FR">Français</option>
                            </select>
                            <button type="submit" disabled={ isSubmitting } className="btn btn-small btn-success">Submit</button>
                        </form>
                    )}
            </Formik>
        )
    }
}


export default SearchBar;