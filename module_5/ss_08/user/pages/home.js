import axios from "axios";


export default function UserList({users}) {
    return (
        <table className='table'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>

            <tbody>
            {
                users.map((values) => (
                    <tr key={values.id}>
                        <td>{values.id}</td>
                        <td>{values.name}</td>
                        <td>{values.email}</td>
                        <td>{values.address.street}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
export const getStaticProps = async () => {
    const list = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(list)
    return {
        props: {
            users: list.data
        }
    }
}