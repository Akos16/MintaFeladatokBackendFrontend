export default function UserProfile({getUser}){
    const user = getUser()
    return(
        <h1>Üdvözöllek: {user.name}</h1>
    )
}