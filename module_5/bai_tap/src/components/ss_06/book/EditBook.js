import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import {findById, updateBook} from "./BookService";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

export function EditBook() {
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
                    title: book?.title,
                    qtt: book?.qtt
                }}

                onSubmit={((values) => {
                    console.log(values)
                    const update = async () => {
                        await updateBook(values)
                        console.log(values)
                    }
                    update();
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