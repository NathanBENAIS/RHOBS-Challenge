
import React, {useContext } from 'react';
import './Contenu.css';
import { ThemeContext } from './ThemeContext';
export default function Contenu() {
   
const {theme}= useContext(ThemeContext);

        return (
            <div className={theme ? 'contenu light' :'contenu dark'  }>
                <h1>De nos jours, même si elle n’est pas toujours appréciée, cette activité apparaît davantage comme une activité valorisée et valorisante : elle nous permet de nous procurer de quoi vivre (c’est un « gagne-pain »), et elle nous enrichit tant au sens propre (par l’épargne, le travailleur salarié peut se constituer un pécule) qu’au sens figuré : dans la mesure du moins où nous avons la chance d’exercer un métier que nous avons choisi et qui nous plaît !
Peut-on envisager une société sans travail ? Dans le prolongement de la question précédente, on se demandera si le vieux rêve de l’humanité de se débarrasser du travail pourra se réaliser: Aristote rêvait qu’un jour les métiers à tisser puissent « travailler » seuls, sans l’aide de l’homme. Or ce rêve une fois réalisé ne se transformerait- il pas rapidement en cauchemar ? La « fin du travail » (l’un des thèmes dominants de la réflexion économique et sociale des années 1980-1990) est-elle non seulement possible mais encore souhaitable ?
Peut-on définir l’homme comme un « homo faber » ? Cette expression latine (définissant l’être humain comme «fabricateur [d’outils] » et forgée par le philosophe français Henri Bergson) permet de souligner que toute activité humaine, en particulier le travail, requiert un savoir-faire technique et la médiation de certains outils.
Par là, le travail permettrait à l’homme de se réaliser pleinement, en l’incitant à développer son intelligence pratique, ce qui serait la condition de possibilité du développement de l’ensemble de ses aptitudes morales et spirituelles.

Depuis un certain temps déjà, la philosophie semble avoir quitté le strict milieu
universitaire et étudiant pour atteindre un public plus large mais aussi pour infiltrer des
domaines qui lui étaient auparavant étrangers. Elle s’est étendue à des activités situées
en dehors de ses cadres institués. L’entreprise par exemple, se réclame aujourd’hui
d’une « philosophie » pour justifier ses politiques, et embauche même des consultants en
philosophie pour « humaniser » le management. Le journalisme et les médias en sont
eux-mêmes imprégnés. On trouve la philosophie dans les cafés, où des débats autour de
thèmes divers sont organisés pour un public dont les origines sociales ou le bagage
culturel peuvent être très variés. Aussi parle-t-on d’une démocratisation ou d’une
popularisation de la philosophie, ces termes étant eux-mêmes déjà philosophiquement
problématiques. La philosophie semble de plus en plus présente à tous les niveaux du
débat public et se manifeste sous forme de nouvelles pratiques.
Un véritable engouement pour un certain type de philosophie est apparu, ces dernières
années, ainsi qu’en témoignent les succès de librairie de certains ouvrages, la forte
présence médiatique de la discipline, et l’existence de véritables philosophes-vedettes.
Plus généralement, le domaine éditorial des sciences humaines s’adresse à un public
élargi, lui-même de plus en plus demandeur de débats et d’outils de pensée pour
comprendre le monde actuel. Dans ce contexte, pourtant marqué par une certaine
fragilité de l’édition en sciences humaines, les ouvrages de philosophie à destination du
grand public se multiplient. Ils occupent une place importante dans les ventes et le
chiffre d’affaire des maisons d’édition pour le secteur. On peut citer comme symbole de
cet engouement le Monde de Sophie, de Jostein Gaarder, paru en Norvège en 1991,
traduit en 54 langues (en français en 1995), et vendu à des millions d’exemplaires dans
le monde. Le succès de ce livre semble avoir relancé un mouvement dont l’origine est
sans aucun doute à situer à la fin des années 1970 avec l’apparition des « nouveaux
philosophes ». La tendance actuelle est certainement très différente de ce qu’était la
démocratisation de la philosophie il y a trente ans. Cependant, en évoquant les
« nouveaux philosophes », nous mettons d’emblée le doigt sur une problématique
fondamentale et permanente du phénomène, à savoir la présence de la philosophie dans
les médias, et partant, de la compatibilité des contraintes médiatiques avec l’exigence
philosophique.
Il s’agira donc, à travers un état des lieux du paysage éditorial français, de s’intéresser
à une expérience originale dans l’histoire de la philosophie : la popularisation de la
discipline par des ouvrages ouvertement destinés au « grand public » - encore faudra-t-il
s’interroger sur la composition de ce lectorat – et la construction d’une réputation qui
puisse s’inscrire en faux contre les traditionnelles accusations d’élitisme et
d’hermétisme faites à la philosophie. On pourra, bien sûr, considérer le phénomène
comme un simple effet de mode, et rester dans une conception pessimiste de la
démarche vulgarisatrice. Mais ce serait manquer des enjeux qui interrogent les
fondements même de la philosophie, notamment sa fonction au sein d’une société, son
aptitude à la clarté pour participer au débat public, pour ne pas dire son utilité.
</h1>
             
            </div>
        )
    
}

