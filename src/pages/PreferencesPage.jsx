import PageTitle from "../components/PageTitle";

const PreferencesPage = () => {
    return (
        <div className="preferences-page">
            <div className="title">
                <PageTitle>Preferencias</PageTitle>
            </div>
            <div className = "preferences-content">
                <label htmlFor="subtitle" className = "subtitle-preferences">Estilo de recomendación</label>
                <hr></hr>
                <label htmlFor="subtitle" className = "subtitle-preferences">Estilo de ropa</label>
                <hr></hr>
                <label htmlFor="subtitle" className = "subtitle-preferences">Estilo de maquillaje</label>
                <hr></hr>
                <label htmlFor="subtitle" className = "subtitle-preferences">Colores de accesorios</label>
                <hr></hr>
                <label htmlFor="subtitle" className = "subtitle-preferences">Estilo de accesorios</label>
                <hr></hr>
                <label htmlFor="subtitle" className = "subtitle-preferences">Estilo de cortes de cabello</label>
                <hr></hr>
                <label htmlFor="subtitle" className = "subtitle-preferences">Tintes de cabello</label>
            </div>
        </div>
    );
};

export default PreferencesPage;
