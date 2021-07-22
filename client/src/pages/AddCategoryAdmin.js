import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router'

import NavbarAdmin from '../components/NavbarAdmin'

import dataCategory from '../fakeData/category'

export default function AddCategoryAdmin() {
    let history = useHistory()
    const { id } = useParams()
    const [category, setCategory] = useState(dataCategory.find(item => item.id == id))

    const title = "Category admin"
    document.title = 'DumbMerch | ' + title

    const handleChange = (e) => {
        setCategory({
            ...category,
            name: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/category-admin')
    }


    return (
        <>
            <NavbarAdmin title={title} />
            <Container className="py-5">
                <Row>
                    <Col xs="12">
                        <div className="text-header-category mb-4">Add Category</div>
                    </Col>
                    <Col xs="12">
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} placeholder="category" className="input-edit-category mt-4" />
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
