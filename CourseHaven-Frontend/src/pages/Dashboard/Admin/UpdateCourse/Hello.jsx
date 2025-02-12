import { useParams } from 'react-router';

const Hello = () => {
    const {id} = useParams();

    console.log(id)
    return (
        <div>
            hello
        </div>
    );
};

export default Hello;