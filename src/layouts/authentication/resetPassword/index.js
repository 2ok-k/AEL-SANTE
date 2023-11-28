import reinitiaPasssword from "../../../assets/images/ReinitilaPassword.svg";

function ResetPassword() {
    const styleElement = {
        width:'550px',
        height: '550px',
        marginBottom: '5%'
    };
    const rowContentElement = {
        marginTop: '9%',
    }
    const rowFormElement = {
        marginLeft: '8%',
    }
    const rowLabelElement = {
        marginRight: '33%',
        font: 'normal normal 300 14px/23px Poppins',
        color: '#4B4B4B'
    }
    const rowMarginBottomElement = {
        marginTop: '5%',
    }
    const descrip = {
        marginTop: '20%',
        marginLeft: '10%'
    };
    const title = {
        marginLeft: '27%'
    };
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
                                <h3 style={title}>Réinitialisation du mot de passe</h3>
                                <p className="descript" style={descrip}>Veuillez rentrer votre nouveau mot de passe puis le valide</p>
                            </div>
                            <form action="" style={rowFormElement}>
                                <div className="form-group formG">
                                    <label htmlFor="passworddd" style={rowLabelElement}>Nouveau mot de passe</label>
                                    <input className="input-form" type="password" id="passworddd"/>
                                </div>
                                <div className="form-group formG" style={rowMarginBottomElement}>
                                    <label htmlFor="passwordd" style={rowLabelElement}>Confirmer mot de passe</label>
                                    <input className="input-form" type="password" id="passwordd"/>
                                </div>

                                <button className="btns btn-valider">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;