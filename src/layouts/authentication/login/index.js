import reinitiaPasssword from "../../../assets/images/ReinitilaPassword.svg";

function Login() {
    const styleElement = {
        height: '441px',
        width:'550px'
    };
    const rowContentElement = {
        marginTop: '9%',
    }
    const rowFormElement = {
        marginLeft: '8%',
    }
    const rowLabelElement = {
        marginRight: '55%',
    }
    const rowMarginBottomElement = {
        marginTop: '5%',
    }
    const checkElement = {
        marginRight: '45%',
        marginTop: '5%',
        color: '#162B99',
    }
    /*const forgotPasswordLink = {
        marginLeft: '100%',
        textDecoration: 'none',
        cursor: 'pointer',
    };*/
    return (
        <div className="container mt-5">
            <div className="row row-content" style={rowContentElement}>
                <div className="col-md-6">
                    <img src={reinitiaPasssword} alt="mot de passe oublié"/>
                </div>
                <div className="col-md-6 contents" style={styleElement}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="mb-4">
                                <h3>Connectez-vous</h3>
                                <p className="descript">Connectez-vous pour avoir accès à votre portail</p>
                            </div>
                            <form action="" style={rowFormElement}>
                                <div className="form-group formG">
                                    <label htmlFor="email" className="lbel">Login</label>
                                    <input className="input-form" type="text" id="email"/>
                                </div>
                                <div className="form-group formG" style={rowMarginBottomElement}>
                                    <label htmlFor="passwordd" style={rowLabelElement}>Mot de passe</label>
                                    <input className="input-form" type="password" id="passwordd"/>
                                </div>
                                <div className="mb-3" style={checkElement}>
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck1"
                                        />
                                        <label className="custom-control-label" htmlFor="customCheck1">
                                            Rester connecté
                                        </label>
                                    </div>
                                </div>
                                <button className="btns btn-valider">Se connecter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;