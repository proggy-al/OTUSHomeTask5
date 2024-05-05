import AvtorizationCheck from "./AvtorizationCheck";

const HomePage = () => {

    const css = {
        margin: '10px',
        padding: '10px',
        border: '5px solid purple'
    };

    return <div>
        <div style={css}>Главная страница</div>
        <AvtorizationCheck />
    </div>
};

export default HomePage;