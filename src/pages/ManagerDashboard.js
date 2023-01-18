import React, { useContext } from "react";
import { UserContext } from '../components/UserContext';

const ManagerDashboard = () => {
    const {user, loggedIn} = useContext(UserContext);

    if (loggedIn && user.role === 'Manager') {
        return (
            <div>
                <h1>Manager Dashboard</h1>
            </div>
        )
    } else {
        return (
            <h3>Unauthorized</h3>
        )
    }
}

export default ManagerDashboard;