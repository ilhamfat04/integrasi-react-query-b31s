import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import ShowMoreText from "react-show-more-text";
import rupiahFormat from "rupiah-format";

import NavbarAdmin from "../components/NavbarAdmin";
import DeleteData from "../components/modal/DeleteData";

import imgEmpty from "../assets/empty.svg";

import dataProduct from "../fakeData/product";

// Import useQuery and useMutation here ...

// Get API config here ...

export default function ProductAdmin() {
  let history = useHistory();
  let api = API();

  // Create variabel for delete product data with useState here ...

  // Init useState & function for handle show-hide modal confirm here ...

  const title = "Product admin";
  document.title = "DumbMerch | " + title;

  // Fetching product data from database
  let { data: products, refetch } = useQuery("productsCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/products", config);
    return response.data;
  });

  const addProduct = () => {
    history.push("/add-product");
  };

  const handleEdit = (id) => {
    history.push("/edit-product/" + id);
  };

  // Create function handle get product id & show modal confirm delete data here ...

  // Create function for handle delete product with useMutation here ...
  // If confirm is true, execute delete data

  // Call function for handle close modal and execute delete data with useEffect here ...

  return (
    <>
      <NavbarAdmin title={title} />

      <Container className="py-5">
        <Row>
          <Col xs="6">
            <div className="text-header-category mb-4">List Product</div>
          </Col>
          <Col xs="6" className="text-end">
            <Button onClick={addProduct} className="btn-dark" style={{ width: "100px" }}>
              Add
            </Button>
          </Col>
          <Col xs="12">
            {products?.length !== 0 ? (
              <Table striped hover size="lg" variant="dark">
                <thead>
                  <tr>
                    <th width="1%" className="text-center">
                      No
                    </th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item, index) => (
                    <tr>
                      <td className="align-middle text-center">{index + 1}</td>
                      <td className="align-middle">
                        <img
                          src={item.image}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          alt={item.name}
                        />
                      </td>
                      <td className="align-middle">{item.name}</td>
                      <td className="align-middle">
                        <ShowMoreText
                          /* Default options */
                          lines={1}
                          more="show"
                          less="hide"
                          className="content-css"
                          anchorClass="my-anchor-css-class"
                          expanded={false}
                          width={280}
                        >
                          {item.desc}
                        </ShowMoreText>
                      </td>
                      <td className="align-middle">{rupiahFormat.convert(item.price)}</td>
                      <td className="align-middle">{item.qty}</td>
                      <td className="align-middle">
                        <Button
                          onClick={() => {
                            handleEdit(item.id);
                          }}
                          className="btn-sm btn-success me-2"
                          style={{ width: "135px" }}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                          className="btn-sm btn-danger"
                          style={{ width: "135px" }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="text-center pt-5">
                <img src={imgEmpty} className="img-fluid" style={{ width: "40%" }} alt="empty" />
                <div className="mt-3">No data product</div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <DeleteData setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
    </>
  );
}
