import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer";
import HeaderTemp from "./HeaderTemp";


const HomeTemp = (props) => {
    const { Component, ...restProps } = props;
    return (
        <Route {...restProps} render={(propsRouter) => {
            return <Fragment>
                <HeaderTemp />
                <Component {...propsRouter} />
                <Footer />
            </Fragment>
        }
        } />
    )
}
export default HomeTemp;