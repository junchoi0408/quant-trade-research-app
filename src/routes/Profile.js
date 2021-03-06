import React from "react";
import { authService } from "../firebase";
import { useHistory } from "react-router-dom";

function Profile() {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/")
    }
    return (
        <>
            <button className="home__container" onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;