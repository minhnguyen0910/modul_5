import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteById, getAllUsers} from "../redux/action/action";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';


export function ListUser() {
    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
    });
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    const handleDelete = async (id) => {
        dispatch(deleteById(id))
        dispatch(getAllUsers())
    }
    const [modal, setModal] = useState(false);
    return (
        <>
            <h1>List User</h1>
            <table className='table'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Web side</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(value => (
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.website}</td>
                        <td>
                            <button onClick={() => {
                                handleDelete(value.id)
                            }} type="button" className="btn btn-danger">Xoa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModal(!modal);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModal(!modal)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModal(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
        </>
    )
}