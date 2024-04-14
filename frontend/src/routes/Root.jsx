import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import deplacelogo from "../assets/images/deplace-logo.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Root() {
	const fontStyle = {
		fontFamily: "'Quicksand', 'sans-serif'",
	};

	return (
		<>
			<Navbar bg="light" expand="lg" fixed="top" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">
						<img width="200" height="45" src={deplacelogo} alt="Deplace Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav ">
						<Nav className="ms-auto">
							<Nav.Link
								style={fontStyle}
								className="fs-5 fw-bold"
								href="welcome"
							>
								Homepage
							</Nav.Link>
							<Nav.Link
								style={fontStyle}
								className="fs-5 fw-bold"
								href="sign-in"
							>
								Sign In{" "}
							</Nav.Link>
							<Nav.Link
								style={fontStyle}
								className="fs-5 fw-bold"
								href="sign-up"
							>
								Sign Up
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<footer className="bg-dark text-light py-4 fixed-bottom">
				<Container className="mt-3">
					<Row>
						<Col md={4}>
							<h5 className="fs-5 fw-bold" style={fontStyle}>
								Deplace
							</h5>
							<p>
								The DePauw Space project is a virtual workplace simulation
								developed for DePauw University. It leverages immersive 2D
								imagery to create a realistic digital representation of the
								university environment.
							</p>
						</Col>
						<Col md={4}>
							<h5 className="fs-5 fw-bold" style={fontStyle}>
								Spaces
							</h5>
							<ul className="list-unstyled">
								<li>Roy O West Library</li>
								<li>Julian</li>
								<li>Registrar</li>
							</ul>
						</Col>
						<Col md={4}>
							<h5 className="fs-5 fw-bold">TigerHacks 2024</h5>
							<p>Women in Computer Science, Spring 2024 Hackathon</p>
						</Col>
					</Row>
					<Row>
						<Col className="text-center mt-3">
							© 2024 Deplace. All Rights Reserved.
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
}
