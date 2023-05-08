import React from "react";
import {Form, Formik} from 'formik';
import {Footer} from "../footer";
import {Header} from "../header";
import * as Yup from "yup";

export function CreateCustomer() {
    return (
        <>
            <Header/>
            <Formik
                initialValues={{
                    name: '',
                    year: '',
                    type: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("không được để trống"),
                    year: Yup.number().required("không được để trống")
                })}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form>
                    <section className="vh-70 bg-image">
                        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div className="card" style={{borderRadius: 15, marginTop: 200}}>
                                            <div className="card-body p-5">
                                                <h2 className="text-uppercase text-center mt-4">
                                                    Thêm mới khách hàng
                                                </h2>
                                                <form>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example1cg">
                                                            Tên khách hàng
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <input
                                                            type="text"
                                                            id="form3Example1cg"
                                                            className="form-control form-control-lg"
                                                        />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="form3Example3cg">
                                                            Năm sinh
                                                        </label>
                                                        <span className="text-danger">*</span>
                                                        <input
                                                            type="date"
                                                            id="form3Example3cg"
                                                            className="form-control form-control-lg"
                                                        />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label">Kiểu khách hàng</label>
                                                        <span className="text-danger">*</span>
                                                        <select name="" id="">
                                                            <option value="">Diamond</option>
                                                            <option value="">Platinum</option>
                                                            <option value="">Gold</option>
                                                            <option value="">Silver</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label">Hình ảnh</label>
                                                        <span className="text-danger">*</span>
                                                        <input
                                                            type="number"
                                                            id="form5Example4cdg"
                                                            className="form-control form-control-lg"
                                                        />
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button
                                                            type="button"
                                                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                        >
                                                            Thêm mới
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Form>
            </Formik>
            <Footer/>
        </>
    );
}