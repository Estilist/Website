import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Root() {
    return (
        <>
            <div className="App min-vh-100 d-flex justify-content-center align-items-center text-center">
                <div>
                    <h1 className="mb-3">Estilist</h1>
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    )
}