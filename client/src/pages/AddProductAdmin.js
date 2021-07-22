import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

import NavbarAdmin from '../components/NavbarAdmin'

import dataCategory from '../fakeData/category'

export default function AddProductAdmin() {
    let history = useHistory()
    const [file, setFile] = useState(null)

    const title = "Product admin"
    document.title = 'DumbMerch | ' + title

    const handleChange = (e) => {
        // setCategory({
        //     ...category,
        //     name: e.target.value
        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/product-admin')
    }

    const handleFile = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <NavbarAdmin title={title} />
            <Container className="py-5">
                <Row>
                    <Col xs="12">
                        <div className="text-header-category mb-4">Add Product</div>
                    </Col>
                    <Col xs="12">
                        <form onSubmit={handleSubmit}>
                            {file && <div><img src={file} style={{maxWidth: '150px', maxHeight: '150px', objectFit: 'cover'}} /></div> }
                            <input type="file" id="upload" hidden onChange={handleFile}/>
                            <label for="upload" className="label-file-add-product">Upload file</label>
                            <input type="text" placeholder="Product Name" className="input-edit-category mt-4" />
                            <textarea placeholder="Product Desc" className="input-edit-category mt-4" style={{height: '130px'}}></textarea>
                            <input type="number" placeholder="Price (Rp.)" className="input-edit-category mt-4" />
                            <input type="number" placeholder="Stock" className="input-edit-category mt-4" />
                            
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
    )
}
