import {ErrorMessage, Field, Form, Formik} from "formik";
import App from "../../App";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export function Declare() {
    return (
        <Formik initialValues={
            {
                name: '',
                numberId: '',
                dayOfBirth: '',
                gender: '',
                nationality: '',
                company: '',
                department: '',
                status: '',
                country: '',
                district: '',
                ward: '',
                apartmentNumber: '',
                phoneNumber: '',
                email: '',
                move: '',
                symptom: '',
                contact: '',
            }
        }
                validationSchema={Yup.object({
                    name: Yup.string().required("không được để trống"),
                    numberId: Yup.number().required("không được để trống"),
                    dayOfBirth: Yup.number().required("không được để trống").min(1960),
                    nationality: Yup.string().required("không được để trống"),
                    phoneNumber: Yup.number().required("không được để trống"),
                    email: Yup.string().required("không được để trống").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Invalid email address"),
                    country: Yup.string().required("không được để trống"),
                    district: Yup.string().required("không được để trống"),
                    ward: Yup.string().required("không được để trống"),
                    apartmentNumber: Yup.string().required("không được để trống")
                })}

                onSubmit={(values) => {
                    console.log(values)
                }}>
            <div className='container'>
                <div className='row'>
                    <h1>Tờ khai y tế</h1>
                    <Form>
                        <div className='row'>
                            <label> Họ và tên</label><br/>
                            <Field type='text' name='name'/><br/>
                            <ErrorMessage name="name" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <label>Số CMND</label><br/>
                            <Field type='number' name='numberId'/><br/>
                            <ErrorMessage name="numberId" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <label>Ngày sinh</label><br/>
                            <Field type='text' name='dayOfBirth'/><br/>
                            <ErrorMessage name="dayOfBirth" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <span>Giới tính</span>
                            <div>
                                <Field type='radio' name='gender' value="nam"/>
                                <label>Nam</label>
                            </div>
                            <div>
                                <Field type='radio' name='gender' value="nữ"/>
                                <label>Nữ</label>
                            </div>
                        </div>
                        <div className='row'>
                            <label>Quốc tịch</label><br/>
                            <Field type='text' name='nationality'/><br/>
                            <ErrorMessage name="nationality" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <label>Công ty</label><br/>
                            <Field type='text' name='company'/><br/>
                        </div>
                        <div className='row'>
                            <label>Bộ phận</label><br/>
                            <Field type='text' name='department'/><br/>
                        </div>
                        <div className='row'>
                            <label>Có thẻ bảo hiểm y tế</label><br/>
                            <Field type='checkbox' name='status'/><br/>
                        </div>
                        <h3>Địa chỉ liên hệ</h3>
                        <div className='row'>
                            <label> Tỉnh/ Thành phố</label><br/>
                            <Field type='text' name='country'/><br/>
                            <ErrorMessage name="country" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <label>Quận/Huyện</label><br/>
                            <Field type='text' name='district'/><br/>
                            <ErrorMessage name="district" component='span' className='error'/> <br/>
                        </div>
                        <div className='row'>
                            <label>Phường/xã</label><br/>
                            <Field type='text' name='ward'/><br/>
                            <ErrorMessage name="ward" component='span' className='error'/> <br/>
                        </div>
                        <div className='row'>
                            <label>Số nhà</label><br/>
                            <Field type='text' name='apartmentNumber'/><br/>
                            <ErrorMessage name="apartmentNumber" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <label> Số điện thoại</label><br/>
                            <Field type='text' name='phoneNumber'/><br/>
                            <ErrorMessage name="phoneNumber" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <label>Email</label><br/>
                            <Field type='text' name='email'/><br/>
                            <ErrorMessage name="email" component='span' className="error"/> <br/>
                        </div>
                        <div className='row'>
                            <h4>Trong vòng 14 ngày Anh/Chị đã đến vùng lãnh thổ/Quốc gia nào (có thể đi qua nhiều quốc
                                gia) ?</h4><br/>
                            <textarea type='text' name='move'/>
                            <ErrorMessage name='move' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Trong vòng 14 ngày Anh/Chị có xuất hiện dấu hiệu nào dưới đây không ?</h4><br/>
                            <div className='row-cols-6'>

                                <Field type='checkbox' name='symptom' value='1'/>
                                <span>Sốt</span><br/>
                                <Field type='checkbox' name='symptom' value='2'/>
                                <span>Ho</span><br/>
                                <Field type='checkbox' name='symptom' value='3'/>
                                <span>Khó thở</span><br/>
                                <Field type='checkbox' name='symptom' value='4'/>
                                <span>Viêm phổi</span><br/>
                                <Field type='checkbox' name='symptom' value='5'/>
                                <span>Đạu họng</span><br/>
                                <Field type='checkbox' name='symptom' value='6'/>
                                <span>Mệt mỗi</span><br/>
                            </div>
                            <ErrorMessage name='symptom' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Trong vòng 14 ngày Anh/Chị có tiếp xúc với ?</h4><br/>
                            <div className='row-cols-6'>
                                <Field type='checkbox' name='contact' value='1'/>
                                <span>Người bệnh hoặc nghi ngờ mắc bệnh Covid-19</span><br/>
                                <Field type='checkbox' name='contact' value='2'/>
                                <span>Người từ nước có bệnh Covid-19</span><br/>
                                <Field type='checkbox' name='contact' value='3'/>
                                <span>Người có biểu hiện (sốt,ho,khó thở,viêm phổi)</span><br/>
                            </div>
                            <ErrorMessage name='contact' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <button type='submit'>Khai báo</button>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}