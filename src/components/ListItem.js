import { Card, ListGroup ,NavDropdown} from "react-bootstrap";
import brandLogo from '../images/download.png';
import {useSelector} from 'react-redux';

const ListItems = () => {
    const items = useSelector(state => state.items);

    return (
        <div className="content">
        {items.map(function(val){
            return(<Card style={{ width: '90%'}} className="listCard">
            <ListGroup horizontal className="listGroupCls">
                <ListGroup.Item className="listItemCls leftCls"><input type="radio"/></ListGroup.Item>
                <ListGroup.Item className="brandDetailCls leftCls">
                    <div class="image-cropper">
                    <img
                    alt=""
                    src={brandLogo}
                    width="22"
                    height="22"
                    className="d-inline-block align-top"
                    />
                    </div>
                    <div style={{marginLeft:'10px'}}><span>{val.name[0].brand}</span><span>{val.name[0].subname}</span>
                    <span>{val.name[0].class}</span><span>{val.name[0].refund}</span></div>
                </ListGroup.Item>
                <ListGroup.Item className="listItemCls specialListCls">
                    <span>{val.departure[0].time}</span><span>{val.departure[0].place}</span>
                    <span>{val.departure[0].date}</span><span>{val.departure[0].type}</span>
                </ListGroup.Item>
                <ListGroup.Item className="listItemCls specialListCls"> 
                    <span className="timeCls">{val.stops[0].time}</span><input type="range" min="0" max="24" value={val.stops[0].time} style={{marginTop:"7px"}} title="Flight Stops at Mumbai"/><span className="stationCls">{val.stops[0].number} stop</span>
                    <span style={{marginTop:"5px",margin:'auto'}} className="custom-color">{val.stops[0].property}</span>
                </ListGroup.Item>
                <ListGroup.Item className="listItemCls specialListCls">
                    <span>{val.arrival[0].time}</span><span>{val.arrival[0].place}</span>
                    <span>{val.arrival[0].date}</span>
                </ListGroup.Item>
                <ListGroup.Item className="listItemCls specialListCls">
                    <span>{val.price[0].fare}</span><span  className="custom-color">{val.price[0].type}</span>
                    <NavDropdown title="Flight Details" id="collasible-nav-dropdown" className="filterDetailCls">
                        <NavDropdown.Item>{val.price[0].details[0]}</NavDropdown.Item>
                    </NavDropdown>
                </ListGroup.Item>
            </ListGroup>
            </Card>)
        
        })}
        </div>
       );
}

export default ListItems;