import useAuth from '../hooks/useAuth';
import PrimarySpinner from '../components/LoadingSpinner/PrimarySpinner';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <PrimarySpinner />
    }

    if (user) {
        return children;
    }

    /* I have to do redirect stuff */
    return <Navigate to={'/sign-in'} />

};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;