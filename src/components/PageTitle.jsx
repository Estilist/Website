import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PageTitle = ({ children }) => {
    const customStyle = {
        fontSize: '40px',
        fontFamily: 'var(--subtitulo-font)',
        color: 'var(--boton)'
    };

    return (
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h1 style={customStyle}>
                    {children}
                </h1>
            </Col>
        </Row>
    );
};

PageTitle.propTypes = {
    children: PropTypes.node,
};

export default PageTitle;