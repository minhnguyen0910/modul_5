import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import {findById, updateBook} from "./BookService";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import * as Yup from "yup";

export function EditBook() {
    const navigation=useNavigate()
    const [book, setBook] = useState(null)
    const param = useParams()
    useEffect(() => {
        const search = async () => {
            const books = await findById(param.id);
            setBook(books)
        }
        search()
    }, [param.id])
    if (!book) {
        return null
    }
    return (
        <>
            <Link to={`/`}>Trang chu</Link>
            <Formik
                initialValues={{
                    id: book?.id,
                    title: book?.title,
                    qtt: book?.qtt
                }}
                validationSchema={Yup.object({
                    title:Yup.string().required("không được để trống"),
                    qtt:Yup.number().required("số lượng không được để trống ").min(0,"số lượng phải lớn hơn 0")
                })}

                onSubmit={((values) => {
                    console.log(values)
                    const update = async () => {
                        await updateBook(values)
                        navigation("/")
                        console.log(values)
                    }
                    update();
                })}
            >
                <Form>
                    <table className='table'>
                        <Field name='id' type="hidden"/>
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