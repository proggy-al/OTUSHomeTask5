import { useState } from "react";
import { useDispatch } from 'react-redux';
import AvtorizationCheck from "./AvtorizationCheck";

const Avtorization = () => {

    const css = {
        margin: '10px',
        padding: '10px',
        border: '5px solid orange'
    };

    const dispatch = useDispatch();

    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const initialState = { login: "", pass: "" }

    const setState = (state: { login: string; pass: string; }) => {
        setLogin(state.login);
        setPass(state.pass);
    }

    function clickSubmit() {
        if (login.length > 0 && pass.length > 0) {
            dispatch({
                type: 'A_IN',
                loginName: login
            });
        }
    }

    function clickReset() {
        setState(initialState)
    }

    return <div>
        <div style={css}>Страница 1 (Авторизация)
            <p><input
                placeholder="Логин"
                type="text"
                name="login"
                value={login}
                onChange={e => setLogin(e.target.value)} />
            </p>
            <p><input
                placeholder="Пароль"
                type="text"
                name="pass"
                value={pass}
                onChange={e => setPass(e.target.value)} />
            </p>
            <button type="submit" value="Ok" onClick={clickSubmit}>Ok</button>
            &nbsp;
            <button type="reset" value="Cancel" onClick={clickReset}>Cancel</button>
            <br />
        </div>
        <AvtorizationCheck />
    </div>
};

export default Avtorization;