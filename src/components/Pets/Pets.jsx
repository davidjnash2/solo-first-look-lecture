import { useSelector } from 'react-redux';


function Pets() {
    const user = useSelector(store => store.user);


    return (
        <>
            {
                user.id ?
                    (<h2>Get in here, {user.username}!</h2>)
                    :
                (<h2>GTFO, STRANGER!</h2>)
            }
        </>
    )


}

export default Pets;