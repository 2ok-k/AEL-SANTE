function WelcomePage() {

    return (
        <div className="container mt-5">
            <div className="mt-2">
                <h1 className="welcome-title">BIENVENUE SUR LA PLATEFORME AEL SANTÉ</h1>
                <p className="second-title mt-3">CONNECTEZ-VOUS OU FAITES UNE DEMANDE DE COTATION</p>
            </div>
            <div className="row mt-5 boutons">
                <div className="col-sm-3"></div>
                <div className="col-sm-3">
                    <button className="btns btn-cotisation">DEMANDE DE COTISATION</button>
                </div>
                <div className="col-sm-3" id="separator">
                    <button className="btns btn-connexion">CONNEXION</button>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    );
}

export default WelcomePage;
