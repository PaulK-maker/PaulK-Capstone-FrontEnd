// Nav Bar
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import useState from 'react'
import React, { useState } from "react";

export function AppNavbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <Navbar expand="lg" bg="light" fixed="top" className="px-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/inflatable-balloons-happy-new-year-2025-free-image.jpeg?w=1500&quality=50"
            width="40"
            className="d-inline-block align-top"
            alt="Event planner logo"
          />
          Smart Event
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Page links */}
          <Nav className="me-auto-my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/create">
              Create Event
            </Nav.Link>
            <Nav.Link as={Link} to="/myrsvps">
              My RSVPs
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {/* login */}
          <div className="d-flex align-items-center me-3">
            <Link
              to="/login"
              className="me-2"
              style={{ textDecoration: "none" }}
            >
              <Button variant="primary">Login</Button>
              {/* register */}
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button variant="secondary">Register</Button>
            </Link>
          </div>

          {/* <li><Link to="/about">About</Link></li> */}

          {/* Search and Login Button */}

          {/* <Button variant="primary">Login/Register</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
