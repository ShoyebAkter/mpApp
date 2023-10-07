import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.init';
import Loading from './Loading.jsx';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = () => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

