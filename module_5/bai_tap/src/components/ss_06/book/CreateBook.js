import React from "react";
import {Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import {save} from "./BookService";

export function CreateBook() {
    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    qtt: 0
                }}

                onSubmit={((values) => {
                    console.log(values)
                    const create = async () => {
                        await save(values)
                    }
                    create();
                })}
            >
                <Form>
                    <table className='table'>
                        <tr>
                            <th>Tiêu đề</th>
                            <td><Field name='title' type="text" placeholder='tiêu đề'/></td>
                        </tr>
                        <tr>
                            <th>Số lượng</th>
                            <td><Field name='qtt' type='number' placeholder='số lượng'/></td>
                        </tr>
                        <tr>
                            <th><input type="submit"/></th>
                        </tr>
                    </table>
                </Form>

            </Formik>
        </>
    )
}