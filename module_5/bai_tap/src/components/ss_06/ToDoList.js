import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {findAll, save} from "./ServiceToDo";

export function ToDoList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await findAll();
            setList(result)
        }
        fetchAPI();

    }, [])
    return (
        <>
            <h1>To Do List</h1>
            <Formik
                initialValues={{
                    title: ""
                }}
                onSubmit={(values) => {
                    const create = async () => {
                        await save(values)
                        alert(values.title)
                    }
                    create();
                }}
            >
                <Form>
                    <Field name='title' type="text"/>
                    <input type="submit"/>
                </Form>
            </Formik>

            <ul>
                {list.map((task, index) => (<li key={index}>{task.title}</li>))}
            </ul>

        </>
    )
}