import reinitiaPasssword from "assets/images/ReinitilaPassword.svg"

function ForgetPassword() {

    return (
        <div className="container mt-5">
            <div className="row row-content">
                <div className="col-md-6">
                    <img src={reinitiaPasssword} alt="mot de passe oublié"/>
                </div>
                <div className="col-md-6 contents">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="mb-4">
                                <h3>Votre adresse email</h3>
                                <p className="descript">Entrez votre adresse email pour réinitialiser votre mot de passe</p>
                            </div>
                            <form action="">
                                <div className="form-group formG">
                                    <label htmlFor="email" className="lbel">Email</label>
                                    <input className="input-form" type="text" id="email"/>
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

export default ForgetPassword;