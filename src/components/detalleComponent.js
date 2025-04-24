import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

function RenderClothes({ c }) {
    return (
        <Card>
            <CardImg width="60%" src={c.image} alt={c.name} />
            <CardBody>
                <CardTitle tag="h5">{c.name}</CardTitle>
                <CardText>{c.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comentarios</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const DetalleComponent = (props) => {
    if (props.c != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderClothes c={props.c} />
                    </div>
                    <RenderComments comments={props.c.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DetalleComponent;