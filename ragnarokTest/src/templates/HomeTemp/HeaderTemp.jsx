
import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';


function HeaderTemp(props) {
    return (<header id="header">
        <nav id="navHeader" className="navHeader">
            <Row>
                <Col span={6} className="navHeader__left">
                    <img className="navHeader__left__logo" src={require("../../img/img_logo.png").default} />
                </Col>

                <Col span={18}>
                    <Row className="navHeader__right">
                        <NavLink className="navHeader__right__item" to="/home">Trang chủ</NavLink>
                        <NavLink className="navHeader__right__item" to="/">Tin Tức</NavLink>
                        <NavLink className="navHeader__right__item" to="/">Sự kiện</NavLink>
                        <NavLink className="navHeader__right__item" to="/">Hướng dẫn</NavLink>
                        <NavLink className="navHeader__right__item" to="/">Nạp thẻ</NavLink>
                        <NavLink className="navHeader__right__item" to="/">Fan page</NavLink>
                    </Row>
                </Col>
            </Row>

        </nav>

    </header>)
}

export default HeaderTemp;