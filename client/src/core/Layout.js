import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isAuth, signout} from '../auth/helpers';

const Layout = ({children, history}) => {
    return(
        <Fragment>
            <div>
                <ul className="nav">
                    <li className="nav__item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    {!isAuth() && (
                        <Fragment>
                            <li className="nav__item">
                                <Link to="/join">
                                    Join
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuth() && (
                        <Fragment>
                            <li className="nav__item">
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

            <div className="container">
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(Layout);