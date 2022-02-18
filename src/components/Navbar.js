import React from 'react';
// import PropTypes from 'prop-types';


function Navbar(props) {
//    const navBarColor = () => {
//        if(props.mode === 'light'){
//            if(props.color === 'red'){
//                return 
//            } else if(props.color === 'red'){

//            } else {

//            }
//        }
//    }
   
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} `} style={{backgroundColor :props.color }} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='#'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="#">About</a>
                            </li>
                        </ul>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.redButton} style={{backgroundColor:'lightblue', border:'solid 1px blue', borderRadius:'0%'}}/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.greenButton} style={{backgroundColor:'green', border:'solid 1px darkgreen', borderRadius:'0%'}}/>
                        </div>
                        <div className={` form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode} mode`}  </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}



// Navbar.propTypes = {
//     title: PropTypes.number
//   };


export default Navbar