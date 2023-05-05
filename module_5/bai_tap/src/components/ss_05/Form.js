import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ColorRing} from "react-loader-spinner";


export function Forms() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "Minh",
                    email: "minhn091099@gmail.com",
                    phone: "0961053275",
                    message: "alo"
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        console.log(values)
                    }, 1000)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("không được để trống"),
                    email: Yup.string()
                        .required("không được để trống"),
                    phone: Yup.string()
                        .required("không đươc để trống")
                })}

            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <h1>Create</h1>
                            <Field type="text" name="name" placeholder={"nhap tên"}/> <br/>
                            <ErrorMessage name="name" className="error"/> <br/>
                            <Field type="text" name="email" placeholder={"nhap email"}/> <br/>
                            <ErrorMessage name="email" className="error"/> <br/>
                            <Field type="text" name="phone" placeholder={"nhap số điện thoại"}/> <br/>
                            <ErrorMessage name="phone" className="error"/> <br/>
                            <Field type="text" name="message" placeholder={"nhap tin nhắn"}/> <br/>

                            {
                                isSubmitting ?
                                    <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
                                    : <input type="submit"/>
                            }
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}


