import React from 'react'
import { Form, Table } from 'react-bootstrap'
import './ValueExpected.css'
import { BiMessageSquareAdd } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
const ValueExpected = () => {
    return (
        <div>
            <div className='container'>
                <div className='row '>
                    <div className='col-3'>

                        <p>Express value Level either or both</p>
                    </div>
                    <div className='col-3'>

                        <p>Seatholder Selection</p>
                    </div>
                    <div className='col-3'>

                        <p>Recorded by:</p>
                    </div>
                    <div className='col-3'>
                        <p>Value Date Range</p>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className='d-flex bothbtnExpecteddiv'>

                            <button className='btn-primary  bothbtnExpected' >MCP Level</button>
                            <button className='btn-primary bothbtnExpected'>CI Level</button>
                        </div>
                    </div>
                    <div className='col-3'>
                        <Form.Select aria-label="Default select example">
                            <option>Bob Loblaw</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='col-3'>
                        <Form.Select aria-label="Default select example">
                            <option>Premium</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className='col-3'>
                        <div className='d-flex'>

                            <input className='inputdateexpected' type='date' />
                            <input className='inputdateexpected' type='date' />
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='tableheadingexpected'>
                                <th className=' radiovaluetypeexpected'><input style={{ width: '20px', height: '20px' }} type='checkbox' />
                                    Value Type</th>
                                <th>Recorded By</th>
                                <th>Date</th>
                                <th>MCP/CI</th>
                                <th>Benefit Type</th>
                                <th>Value Expected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='d-flex'>
                                    <BiMessageSquareAdd style={{ width: '30px', height: '30px', color: 'green' }} />
                                    <Form.Select aria-label="Default select example">
                                        <option>Type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                                <td>Current Date</td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>
                                <td className='d-flex'>
                                    <button className='kibtnexpected'>KI</button>
                                    <input type='text' style={{ marginLeft: '10px' }} />
                                </td>
                            </tr>
                            <tr>
                                <td className='d-flex'>
                                    <input style={{ width: '20px', height: '20px' }} type='checkbox' />
                                    CI
                                </td>
                                <td>Sales</td>
                                <td>1/25/22</td>
                                <td>Digital Strategy</td>
                                <td>Accelerated Project Delivary</td>
                                <td>This is detail Accelerated Project Delivary </td>
                            </tr>
                            <tr>
                                <td className='d-flex'><input style={{ width: '20px', height: '20px' }} type='checkbox' />
                                    MCP
                                </td>
                                <td>Premium</td>
                                <td>1/25/22</td>
                                <td>Digital Strategy</td>
                                <td>Accelerated Project Delivary</td>
                                <td>This is detail Accelerated Project Delivary </td>
                            </tr>
                            <tr>
                                <td className='d-flex'><input style={{ width: '20px', height: '20px' }} type='checkbox' />
                                    CI
                                </td>
                                <td>Sales</td>
                                <td>1/25/22</td>
                                <td>Digital Strategy</td>
                                <td>Accelerated Project Delivary</td>
                                <td>This is detail Accelerated Project Delivary </td>
                            </tr>
                            <tr>
                                <td className='d-flex'><input style={{ width: '20px', height: '20px' }} type='checkbox' />
                                    MCP
                                </td>
                                <td>Premium</td>
                                <td>1/25/22</td>
                                <td>Digital Strategy</td>
                                <td>Accelerated Project Delivary</td>
                                <td>This is detail Accelerated Project Delivary </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='row'>
                    <div className='threebtnexpectedvaluediv'>
                        <button className='btn btn-outline-dark threebtnexpectedvalue'>CANCEL</button>
                        <button className='btn btn-outline-primary threebtnexpectedvalue'>
                            <AiOutlineShoppingCart /> VIEW CART</button>
                        <button className='btn btn-outline-primary threebtnexpectedvalue'>SAVE</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ValueExpected