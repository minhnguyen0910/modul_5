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
        await axios.post("http://localhost:8080/books", {book})
    } catch (error) {
        console.log(error)
    }
}