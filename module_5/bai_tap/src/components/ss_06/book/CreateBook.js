import React from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
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
                validationSchema={Yup.object({
                    title: Yup.string().required("không được để trống"),
                    qtt:Yup.number().required("không được để trống").min(0,"số lượng phải lớn hơn 0")
                })}

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
                            <td></td>
                            <td><ErrorMessage name='title'/></td>
                        </tr>
                        <tr>
                            <th>Số lượng</th>
                            <td><Field name='qtt' type='number' placeholder='số lượng'/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><ErrorMessage name='qtt'/></td>
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