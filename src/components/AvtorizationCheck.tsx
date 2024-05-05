import { useDispatch, useSelector } from "react-redux";

const AvtorizationCheck = () => {
    const css = {
        margin: '1px',
        padding: '1px',
        fontWeight: 'bold'
    };

    const result = useSelector((state: any) => state);

    const dispatch = useDispatch();
    
    function clickOut () {
        dispatch({
            type: 'A_OUT',
            loginName: ''
        });
    }

    return <div style={css}>
        <p>Статус авторизации: {result}</p>
        <button onClick={clickOut}>Выход</button>
    </div>
};

export default AvtorizationCheck;