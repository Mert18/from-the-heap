import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isAuth, signout} from '../auth/helpers';

const Layout = ({children, history}) => {
    return(
        <Fragment>
            <div className="navbar">
                <div className="navbar__left">
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        
                    </ul>
                </div>

                <div className="navbar__right">
                    <ul>
                    {!isAuth() && (
                            <Fragment>
                                <li>
                                    <Link to="/join">
                                        Join
                                    </Link>
                                </li>
                            </Fragment>
                        )}

                        {isAuth() && (
                            <Fragment>
                                <li>
                                    <span onClick={() => {
                                        signout(() => history.push("/"))
                                    }}>
                                        Sign Out
                                    </span>
                                </li>
                            </Fragment>
                        )}
                    </ul>
                </div>
                
            </div>

            <div className="container">
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(Layout);