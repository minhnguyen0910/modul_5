import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/books")
        return result.data
    } catch (error) {
        console.log(error)
    }
}
export const save = async (book) => {
    try {
        await axios.post("http://localhost:8080/books", {...book})
    } catch (error) {
        console.log(error)
    }
}
export const deleteBook = async (id) => {
    console.log(id)
    try {
        await axios.delete(`http://localhost:8080/books/${id}`);
    } catch (error) {
        console.log(error)
    }
}

export const searchBook = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/books?id=${id}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/books/${id}`);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const updateBook = async (book) => {
    try {
        await axios.put(`http://localhost:8080/books`, {...book})
    } catch (e) {
        console.log(e)
    }
}