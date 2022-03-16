import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

import NavbarAdmin from "../components/NavbarAdmin";

import dataCategory from "../fakeData/category";

// Import useMutation from react-query here ...
import { useMutation } from "react-query"

// Get API config here ...
import { API } from "../config/api"


export default function AddCategoryAdmin() {
  console.clear();

  const title = "Category admin";
  document.title = "DumbMerch | " + title;

  let history = useHistory();
  let api = API();

  // Create variabel for store data with useState here ...
  const [category, setCategory] = useState("")

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  // Create function for handle insert category data with useMutation here ...
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // data body
      const body = JSON.stringify({ name: category })

      // config content type
      const config = {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: body
      }

      // consume API
      const response = await api.post('/category', config)

      console.log(response);

      history.push('/category-admin')

    } catch (error) {
      console.log(error);
    }
  })

  return (
    <>
      <NavbarAdmin title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Add Category</div>
          </Col>
          <Col xs="12">
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
              <input
                onChange={handleChange}
                placeholder="category"
                value={category}
                name="category"
                className="input-edit-category mt-4"
              />
              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Add
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
