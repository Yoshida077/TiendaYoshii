import { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";




    function Contact(props) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contactos</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Información de Contacto</h3>
                    </div>
                    <div className="col-12">
                        <h3>Información de Ubicacion</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Dirección</h5>
                        <address>
                            Av. 17 de Julio<br />
                            Quito, Pichincha 100107<br />
                            Ecuador<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>:<a href="mailto:palandeta@utn.edu.ec">jaguallisacal@utn.edu.ec</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Mapa de nuestra ubicación</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d7979.549420109806!2d-78.54530554539224!3d-0.2678896558602419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d-0.2421446!2d-78.5348058!4m3!3m2!1d-0.24188659999999998!2d-78.5348514!5e0!3m2!1sen!2sus!4v1751388880285!5m2!1sen!2sus" width="200" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="/contactus"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="/contactus"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default Contact;