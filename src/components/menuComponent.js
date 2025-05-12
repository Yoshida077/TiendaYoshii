import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderMenuItem({ clothes, onClick }) {
    return (
        <Card onClick={() => onClick(clothes.id)}>
            <CardImg width="80%" src={clothes.image} alt={clothes.name} />
            <CardImgOverlay>
                <CardTitle tag="h5">{clothes.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.clothes.map((clothes) => {
        return (
            <div key={clothes.id} className="col-12 col-sm-3">
                <RenderMenuItem clothes={clothes} onClick={props.onClick} />
            </div>
        )
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;