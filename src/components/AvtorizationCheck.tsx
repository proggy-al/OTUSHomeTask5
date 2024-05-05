import { useDispatch } from "react-redux";
import store from "../redux/store";
import { useReducer } from "react";

const AvtorizationCheck = () => {
    const css = {
        margin: '1px',
        padding: '1px',
        fontWeight: 'bold'
    };

    const forceUpdate = useReducer(bool => !bool, true)[1];

    const dispatch = useDispatch();
    
    function clickOut () {
        dispatch({
            type: 'A_OUT',
            loginName: ''
        });
        forceUpdate();
    }

    return <div style={css}>
        <p>Статус авторизации: {store.getState()}</p>
        <button onClick={clickOut}>Выход</button>
    </div>
};

export default AvtorizationCheck;