import { Col, Container, Row, Button,ToggleButtonGroup,ToggleButton } from 'react-bootstrap';
import edit from '../images/edit.png';
import filter from '../images/filter.png';
import switchIcon from '../images/switch.png';
import Slider from './Slider';
import {useDispatch, useSelector} from 'react-redux';
import { filterAction} from '../helper/filterSlice';
import { useState } from 'react';


const Filters = () => {
    const dispatch = useDispatch();
    const [policyOff,setPolicyStatus] = useState(false);
    const [stopVal,setStopVal] = useState('0');
    const [activeClass,setAcitveClass] = useState(1);

    const hanldeOutsidePolicy = () => {
        setPolicyStatus(!policyOff);
        var status = !policyOff;
        var filterObj = {
            'policy' : status,'stop':stopVal
        }
        dispatch(filterAction.filterLists({filter:filterObj}));
    }
   
    const handleStopValue = (event) => {
        console.log(event);
        setAcitveClass(event.currentTarget.previousElementSibling.value);
        var filterObj = {
            'policy' : policyOff,'stop':event.currentTarget.previousElementSibling.value
        }
        dispatch(filterAction.filterLists({filter:filterObj}));
    }

    const handleClearAll = () => {
        setPolicyStatus(false);
        setAcitveClass(0);
        dispatch(filterAction.clearAll());
    }
   
    return (
        <Container className="filterContainer sidebar">
            <Row xs={2}>
                <Col><img
                    alt=""
                    src={edit}
                    width="22"
                    height="22"
                    className="d-inline-block align-top"
                    />
                    <span className="custom-color" style={{marginLeft:'12px'}}>Update Itinery</span>
                </Col>
            </Row>
            <Row xs={2}>
                <Col><img
                    alt=""
                    src={filter}
                    width="22"
                    height="22"
                    className="d-inline-block align-top"
                    />
                    <span className="custom-color"  style={{marginLeft:'12px'}}>Filter</span>
                </Col>
                <Col><Button onClick={handleClearAll} className="transparentBtn"><span className="custom-color" >Clear All</span></Button></Col>
            </Row>
            <Row xs={2}>
                <Col>
            <span >Include Outside Policy</span></Col>
            <Col><Button onClick={hanldeOutsidePolicy} className="transparentBtn"><img
            alt=""
            src={switchIcon}
            width="28"
            height="28"
            className="d-inline-block align-top"
            /></Button></Col>
            
            </Row>
            <Row xs={1}>
                <Col>
            <span >Maximum Stops</span></Col>
            
            </Row>
            <Row>
            <ToggleButtonGroup type="radio" name="options" defaultValue={activeClass} className="btnGroup">
                <ToggleButton  className="custom-btn " value={1} onClick={e =>handleStopValue(e)}>Non stop</ToggleButton>
                <ToggleButton  className="custom-btn " value={2} onClick={e=>handleStopValue(e)}>Upto 1 stop</ToggleButton>
                <ToggleButton  className="custom-btn " value={3} onClick={e=>handleStopValue(e)}>Upto 2+ stops</ToggleButton>
            </ToggleButtonGroup>
            </Row>
            <Row>
            <Col>
            <span >Departure Time</span></Col>
            </Row>
            <Row> <Col> <Slider min={21} max={24}/></Col></Row>
            <Row>
            <Col>
            <span >Duration</span></Col>
            </Row>
            <Row> <Col> <Slider min={0} max={7}/></Col></Row>
        </Container>
    );
}

export default Filters;