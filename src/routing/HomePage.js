import { useState } from 'react';
// import Submit from '../component/Submit';

const HomePage = () => {

    const [ formData, setFormData ] = useState({
        marque: '',
        annee: '',
        kilometrage: '',
        puissancefisc: '',
        carburant: '',
        boiteVitesse: '',
        etat: '',
        origine: '',
        nbPortes: '',
        premiereMain: '',
        price: 0,
        title: '',
        textAnnonce: ''
    });

    console.log(formData);

    const handleFormData = e => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.type === 'button' ? e.target.textContent : e.target.value
        }))
        // console.log("cible: "+e.target.textContent)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return (
        <>
            <section className="section">
              <h1 className="title">Détails de l'annonce</h1>
              <h2 className="subtitle">
                Ajouter plus de détails sur votre annonce pour un maximum de visibilité
              </h2>
              <form onSubmit={handleSubmit}>
              <div className="columns">
                <div className="column is-half">
                    <div className="field">
                        <label className="label">Marque</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name="marque" onChange={handleFormData}>
                                    <option>Sélectionner</option>
                                    <option>porshe</option>
                                    <option>mercedes</option>
                                    <option>peugeot</option>
                                </select>
                            </div>
                        </div>
                        {formData.marque === 'Sélectionner' || formData.marque === '' ? <p style={{ color: 'red' }}>Veuillez sélectionner la marque</p> : <p></p>}
                    </div>
                </div>

                <div className="column is-half">
                    <div className="field">
                        <label className="label">Année-Modèle</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name="annee" onChange={handleFormData}>
                                    <option>Sélectionner</option>
                                    <option>2010</option>
                                    <option>2015</option>
                                    <option>2020</option>
                                </select>
                            </div>
                        </div>
                        {formData.annee === 'Sélectionner' || formData.annee === '' ? <p style={{ color: 'red' }}>Veuillez sélectionner l'année</p> : <p></p>}
                    </div>
                </div>
            </div>
              <div className="columns">
                <div className="column is-half">
                    <div className="field">
                        <label className="label">Kilométrage</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name="kilometrage" onChange={handleFormData}>
                                    <option>Sélectionner</option>
                                    <option>30000</option>
                                    <option>50000</option>
                                    <option>100000</option>
                                </select>
                            </div>
                        </div>
                        {formData.kilometrage === 'Sélectionner' || formData.kilometrage === '' ? <p style={{ color: 'red' }}>Veuillez sélectionner le kilomètrage</p> : <p></p>}
                    </div>
                </div>

                <div className="column is-half">
                    <div className="field">
                        <label className="label">Puissance fiscale</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select name="puissancefisc" onChange={handleFormData}>
                                    <option>Sélectionner</option>
                                    <option>Option A</option>
                                    <option>Option B</option>
                                    <option>Option C</option>
                                </select>
                            </div>
                        </div>
                        {formData.puissancefisc === 'Sélectionner' || formData.puissancefisc === '' ? <p style={{ color: 'red' }}>Veuillez sélectionner la puissance fiscale</p> : <p></p>}
                    </div>
                </div>
            </div>

                <div className="field">
                  <label className="label">type de carburant</label>
                  <button className="button is-rounded ml-2" name="carburant" type="button" onClick={handleFormData}>Diesel</button>
                  <button className="button is-rounded ml-2" name="carburant" type="button" onClick={handleFormData}>Essence</button>
                  <button className="button is-rounded ml-2" name="carburant" type="button" onClick={handleFormData}>Electrique</button>
                  <button className="button is-rounded ml-2" name="carburant" type="button" onClick={handleFormData}>LPG</button>
                  <button className="button is-rounded ml-2" name="carburant" type="button" onClick={handleFormData}>Hybride</button>
                </div>
                <div className="field">
                  <label className="label">Boite de vitesses</label>
                  <button className="button is-rounded ml-2" name="boiteVitesse" type="button" onClick={handleFormData}>Automatique</button>
                  <button className="button is-rounded ml-2" name="boiteVitesse" type="button" onClick={handleFormData}>Manuelle</button>
                </div>
                <div className="field">
                  <label className="label">Etat</label>
                  <button className="button is-rounded ml-2" name="etat" type="button" onClick={handleFormData}>Excellent</button>
                  <button className="button is-rounded ml-2" name="etat" type="button" onClick={handleFormData}>Très button</button>
                  <button className="button is-rounded ml-2" name="etat" type="button" onClick={handleFormData}>Bon</button>
                  <button className="button is-rounded ml-2" name="etat" type="button" onClick={handleFormData}>Correct</button>
                  <button className="button is-rounded ml-2" name="etat" type="button" onClick={handleFormData}>Endommagé</button>
                  <button className="button is-rounded ml-2" name="etat" type="button" onClick={handleFormData}>Pour Pièces</button>
                  <button className="button is-rounded ml-2" name="etat" type="button" onClick={handleFormData}>Neuf</button>
                </div>
                <div className="field">
                  <label className="label">Origine</label>
                  <button className="button is-rounded ml-2" name="origine" type="button" onClick={handleFormData}>Dédouanée</button>
                  <button className="button is-rounded ml-2" name="origine" type="button" onClick={handleFormData}>Pas encore dédouanée</button>
                  <button className="button is-rounded ml-2" name="origine" type="button" onClick={handleFormData}>WW au Maroc</button>
                  <button className="button is-rounded ml-2" name="origine" type="button" onClick={handleFormData}>Importée neuve</button>
                </div>
                <div className="field">
                  <label className="label">Nombre de portes</label>
                  <button className="button is-rounded ml-2" type="button" name="nbPortes" onClick={handleFormData}>3</button>
                  <button className="button is-rounded ml-2" type="button" name="nbPortes" onClick={handleFormData}>5</button>
                </div>
                <div className="field">
                  <label className="label">Première main</label>
                  <button className="button is-rounded ml-2" type="button" name="premiereMain" onClick={handleFormData}>Oui</button>
                  <button className="button is-rounded ml-2" type="button" name="premiereMain" onClick={handleFormData}>Non</button>
                </div>
                <h1 className="title">Information de l'annonce</h1>
                <h2 className="subtitle">
                  Une annonce avec un prix exacte et une description bien détaillé a 10 fois plus de visibilité
                </h2>
                <div className="field">
                  <label className="label">Prix</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input" type="number" placeholder="0" value={formData.price} name="price" onChange={handleFormData} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  {formData.price <= 0 ? <p style={{ color: 'red' }}>Veuillez renseigner le prix</p> : <p></p>}
                </div>
                <div className="field">
                  <label className="label">Titre de l'annonce</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Titre de l'annonce" value={formData.title} name="title" onChange={handleFormData} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  {formData.title === '' ? <p style={{ color: 'red' }}>Veuillez renseigner le titre</p> : <p></p>}
                </div>
                <div className="field">
                  <label className="label">Texte de l'annonce</label>
                  <textarea className="textarea" name="textAnnonce" onChange={handleFormData}></textarea>
                  {formData.textAnnonce === '' ? <p style={{ color: 'red' }}>Veuillez renseigner le prix</p> : <p></p>}
                </div>
                <h1 className="title">Plus de détails</h1>
                <h2 className="subtitle">
                  Ajouter des détails supplémentaires
                </h2>
                <div className="field">
                  <button className="button is-rounded ml-2">Jantes aluminium</button>
                  <button className="button is-rounded ml-2">Airbags</button>
                  <button className="button is-rounded ml-2">Climatisation</button>
                  <button className="button is-rounded ml-2">Système de navi..</button>
                  <button className="button is-rounded ml-2">Toit ouvrant</button>
                </div>
                <div className="field">
                  <button className="button is-rounded ml-2">Sièges cuir</button>
                  <button className="button is-rounded ml-2">Radar de recul</button>
                  <button className="button is-rounded ml-2">Caméra de recul</button>
                  <button className="button is-rounded ml-2">Vitres électriques</button>
                  <button className="button is-rounded ml-2">ABS</button>
                  <button className="button is-rounded ml-2">ESP</button>
                </div>
                <button type="submit">Soumettre</button>
              </form>
                {/* <Submit annee={formData.annee} 
                  boiteVitesse={formData.boiteVitesse}
                  carburant={formData.carburant} 
                  etat={formData.etat} 
                  kilometrage={formData.kilometrage} 
                  marque={formData.marque} 
                  nbPortes={formData.nbPortes} 
                  origine={formData.origine} 
                  premiereMain={formData.premiereMain} 
                  price={formData.price} 
                  puissancefisc={formData.puissancefisc} 
                  textAnnonce={formData.textAnnonce} 
                  title={formData.title} 
                /> */}
            </section>
        </>
    )
}

export default HomePage;