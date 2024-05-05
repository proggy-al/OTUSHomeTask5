import Ex1 from "../material/Ex1";
import Ex2 from "../material/Ex2";
import Ex3 from "../material/Ex3";
import AvtorizationCheck from "./AvtorizationCheck";

const UIExample = () => {

    const css = {
        margin: '10px',
        padding: '10px',
        border: '5px solid yellow'
    };

    return <div>
        <div style={css}>Страница 2 (Сторонние UI)
            <Ex1 />
            <Ex2 />
            <Ex3 />
        </div>
        <AvtorizationCheck />
    </div>
};

export default UIExample;