import { useLocation } from 'react-router-dom';

const Submit = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const annee = params.get('annee');
    const boiteVitesse = params.get('boiteVitesse');
    const carburant = params.get('carburant');
    const etat = params.get('etat');
    const kilometrage = params.get('kilometrage');
    const marque = params.get('marque');
    const nbPortes = params.get('nbPortes');
    const origine = params.get('origine');
    const premiereMain = params.get('premiereMain');
    const price = params.get('price');
    const puissancefisc = params.get('puissancefisc');
    const textAnnonce = params.get('textAnnonce');
    const title = params.get('title');

    return(
        <>
            <h1>{title}</h1>
            <p>{textAnnonce}</p>
            <table class="table">
              <thead>
                <tr>
                  <th colspan="2">Détail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Année</td>
                    <td>{annee}</td>
                </tr>
                <tr>
                    <td>Boite de vitesse</td>
                    <td>{boiteVitesse}</td>
                </tr>
                <tr>
                    <td>carburant</td>
                    <td>{carburant}</td>
                </tr>
                <tr>
                    <td>État</td>
                    <td>{etat}</td>
                </tr>
                <tr>
                    <td>Kilométrage</td>
                    <td>{kilometrage} km</td>
                </tr>
                <tr>
                    <td>Marque</td>
                    <td>{marque}</td>
                </tr>
                <tr>
                    <td>Nombre de portes</td>
                    <td>{nbPortes}</td>
                </tr>
                <tr>
                    <td>Origine</td>
                    <td>{origine}</td>
                </tr>
                <tr>
                    <td>Première main</td>
                    <td>{premiereMain}</td>
                </tr>
                <tr>
                    <td>Prix</td>
                    <td>{price} €</td>
                </tr>
                <tr>
                    <td>Puissance fiscale</td>
                    <td>{puissancefisc}</td>
                </tr>
              </tbody>
            </table>
        </>
    )
}

export default Submit;