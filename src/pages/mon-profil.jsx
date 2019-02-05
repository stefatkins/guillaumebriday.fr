import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({
  data: {
    site,
    file
  }
}) => (
  <>
    <Helmet title={`Mon profil | ${site.siteMetadata.title}`} />

    <h1>Mon profil</h1>

    <section className="py-8 container mx-auto max-w-3xl px-3">
      <article className="flex flex-wrap">
        <Img fluid={file.childImageSharp.fluid} className="w-full md:w-1/2 lg:w-1/3 px-3 h-full" />

        <div className="w-full md:w-1/2 lg:w-1/3 px-3">
          <ul className="list-reset">
            <li className="py-2 border-b">
              <span className="font-bold">Nom :</span> Guillaume Briday
            </li>

            <li className="py-2 border-b">
              <span className="font-bold">Ville :</span> Lyon
            </li>

            <li className="py-2 border-b">
              <span className="font-bold">E-mail :</span> <a href="mailto:guillaumebriday@gmail.com">guillaumebriday@gmail.com</a>
            </li>

            <li className="py-2 border-b">
              <span className="font-bold">Mobilité :</span> Permis B, Permis A2, véhiculé
            </li>

            <li className="py-2 border-b">
              <span className="font-bold">Âge :</span> 24 ans
            </li>

            <li className="py-2 border-b">
              <span className="font-bold">Caractéristiques principales :</span> Curieux, passionné et motivé
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3 px-3 mt-4 lg:mt-0">
          <h3 className="text-indigo uppercase">Présentation</h3>
          <p className="text-grey-darker leading-loose">
            Je suis développeur Web pour faire de ma passion mon travail.
            J'ai pu acquérir de l'expérience dans les langages PHP et Ruby, entre autres, au cours de mes dernières années en entreprise.
            J'aime travailler avec Git, faire de la qualité logiciel et des tests fonctionnels.
            Apprendre et découvrir les technologies de demain occupe mon temps libre afin d'améliorer mes projets tant professionnels que personnels.
          </p>
        </div>
      </article>
    </section>

    <section className="py-8 bg-grey-lighter">
      <div className="container mx-auto max-w-3xl px-3">
        <h2 className="uppercase text-center text-4xl font-medium mb-6">Expérience</h2>

        <div className="timeline-container relative">
          <div className="relative bg-white p-3 border-b shadow rounded-lg ml-8 mb-8">
            <div className="timeline-dot"></div>
            <div>
              <p className="m-0 mt-4 text-sm text-grey-darker">Septembre 2017 - Maintenant</p>

              <h3 className="text-indigo">Développeur Web et concepteur chez <a href="http://www.studio-hb.com/">Studio-HB</a></h3>

              <p className="text-grey-darker leading-loose">Développer des solutions ergonomiques et abouties créées avec Ruby On Rails, VueJS et Docker. Travailler en équipe et avec le client en méthode agile Scrum.</p>
            </div>
          </div>

          <div className="relative bg-white p-3 border-b shadow rounded-lg ml-8 mb-8">
            <div className="timeline-dot"></div>
            <div>
              <p className="m-0 mt-4 text-sm text-grey-darker">Octobre 2015 - Août 2017</p>

              <h3 className="text-indigo">Développeur, concepteur et intégrateur chez <a href="http://ochelys.com">Ochelys</a></h3>

              <p className="text-grey-darker leading-loose">Développer des solutions internes, accessibles, créées avec Ruby On Rails, Laravel, Sass, Vagrant ou Docker et industrialisation des processus. Utiliser la méthode agile avec Scrum."</p>
            </div>
          </div>

          <div className="relative bg-white p-3 border-b shadow rounded-lg ml-8 mb-8">
            <div className="timeline-dot"></div>
            <div>
              <p className="m-0 mt-4 text-sm text-grey-darker">Mars 2015 - Juin 2015</p>

              <h3 className="text-indigo">Développeur Web chez <a href="http://second-life.ca/">Second Life</a>. Créer un site de vente et un blog avec AngularJS / PHP</h3>

              <p className="text-grey-darker leading-loose">Créer un CMS à l’aide du framework AngularJS et d’une API REST en PHP pour la gestion des produits, des commandes et du blog de Second Life. Mettre en place la structure de la base de données et de l’API REST.</p>
            </div>
          </div>

          <div className="relative bg-white p-3 border-b shadow rounded-lg ml-8 mb-8">
            <div className="timeline-dot"></div>
            <div>
              <p className="m-0 mt-4 text-sm text-grey-darker">Janvier 2015 - Mars 2015</p>

              <h3 className="text-indigo">Système de gestion de commerce sur FileMaker Pro et CakePHP</h3>

              <p className="text-grey-darker leading-loose">Mettre en place la structure de la base de données et créer l’interface sur FileMaker Pro. Penser le design du site web et coder avec CakePHP.</p>
            </div>
          </div>

          <div className="relative bg-white p-3 border-b shadow rounded-lg ml-8 mb-8">
            <div className="timeline-dot"></div>
            <div>
              <p className="m-0 mt-4 text-sm text-grey-darker">Janvier 2014 - Juillet 2014</p>

              <h3 className="text-indigo">Créer un CMS complet dans une simulation d'un site de vente en ligne en PHP</h3>

              <p className="text-grey-darker leading-loose">Créer une simulation d'un site de vente en PHP avec une gestion du panier et des commentaires. Back-office avec une organisation des contenus, un système de connexion pour les utilisateurs avec différents niveaux de droits.</p>
            </div>
          </div>

          <div className="relative bg-white p-3 border-b shadow rounded-lg ml-8 mb-8">
            <div className="timeline-dot"></div>
            <div>
              <p className="m-0 mt-4 text-sm text-grey-darker">Août 2013 - Maintenant</p>

              <h3 className="text-indigo">Créer et maintenir le site guillaumebriday.fr</h3>

              <p className="text-grey-darker leading-loose">Créer mon site personnel. Je m'entraine dessus pour essayer des outils comme Sass, Jekyll, Middleman, l'AJAX, Jade ou CoffeeScript.</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="py-8 container mx-auto max-w-3xl px-3">
      <h2 className="uppercase text-center text-4xl font-medium mb-6">Formation</h2>


      <article className="mb-8 py-6 border-b flex flex-wrap md:flex-no-wrap">
        <div className="flex-no-shrink">
          <div className="inline-block border-b pb-4">
            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">Septembre</div>
              <span className="font-bold text-3xl">2015</span>
            </div>

            <div className="inline-block font-bold mx-6">&ndash;</div>

            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">Juin</div>
              <span className="font-bold text-3xl">2018</span>
            </div>
          </div>

          <p className="mt-4 md:text-right">Institut G4 - Lyon</p>
        </div>

        <div className="md:ml-6 md:pl-6 md:border-l">
          <h3 className="text-indigo text-2xl">École d'ingénierie en Informatique : Institut G4 à Lyon</h3>
          <p className="text-grey-darker leading-loose">École d'ingénierie en informatique amenant à un titre RNCP de niveau I (Bac +5) pour me spécialiser dans les technologies du Web et du Management.</p>
        </div>
      </article>

      <article className="mb-8 py-6 border-b flex flex-wrap md:flex-no-wrap">
        <div className="flex-no-shrink">
          <div className="inline-block border-b pb-4">
            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">janvier</div>
              <span className="font-bold text-3xl">2015</span>
            </div>

            <div className="inline-block font-bold mx-6">&ndash;</div>

            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">Juin</div>
              <span className="font-bold text-3xl">2015</span>
            </div>
          </div>

          <p className="mt-4 md:text-right">Cégep Shawinigan - Canada</p>
        </div>

        <div className="md:ml-6 md:pl-6 md:border-l">
          <h3 className="text-indigo text-2xl">Techniques de l'informatique : Informatique de gestion</h3>
          <p className="text-grey-darker leading-loose">Fin de mon diplôme universitaire de technologie au Canada durant 6 mois. Découverte de nouvelles méthodes de travail ainsi qu'une approche différente du monde de l'informatique. Réalisation de mon stage de développeur Web chez Second Life.</p>
        </div>
      </article>

      <article className="mb-8 py-6 border-b flex flex-wrap md:flex-no-wrap">
        <div className="flex-no-shrink">
          <div className="inline-block border-b pb-4">
            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">Septembre</div>
              <span className="font-bold text-3xl">2013</span>
            </div>

            <div className="inline-block font-bold mx-6">&ndash;</div>

            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">Janvier</div>
              <span className="font-bold text-3xl">2015</span>
            </div>
          </div>

          <p className="mt-4 md:text-right">Université Lyon 1</p>
        </div>

        <div className="md:ml-6 md:pl-6 md:border-l">
          <h3 className="text-indigo text-2xl">Institut Universitaire de Technologie - Informatique</h3>
          <p className="text-grey-darker leading-loose">Formation de deux ans à l'institut universitaire de technologie département informatique de Lyon 1.</p>
        </div>
      </article>

      <article className="mb-8 py-6 border-b flex flex-wrap md:flex-no-wrap">
        <div className="flex-no-shrink">
          <div className="inline-block border-b pb-4">
            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">Septembre</div>
              <span className="font-bold text-3xl">2012</span>
            </div>

            <div className="inline-block font-bold mx-6">&ndash;</div>

            <div className="inline-block leading-none">
              <div className="text-grey-darker text-xs text-right">Juillet</div>
              <span className="font-bold text-3xl">2013</span>
            </div>
          </div>

          <p className="mt-4 md:text-right">Lycée Ampère-Saxe - Lyon</p>
        </div>

        <div className="md:ml-6 md:pl-6 md:border-l">
          <h3 className="text-indigo text-2xl">Baccalauréat Scientifique - SVT / ISN / Histoire-géographie</h3>
          <p className="text-grey-darker leading-loose">Obtention de mon Baccalauréat Scientifique option Informatique et Science du Numérique. Création d'un projet de domotique avec un arduino et une interface de contrôle sur le Web.</p>
        </div>
      </article>
    </section>

    <section className="py-8 bg-grey-lighter">
      <div className="container mx-auto max-w-3xl px-3">
        <h2 className="uppercase text-center text-4xl font-medium mb-6">Mes centres d'intérêts</h2>

        <div className="flex flex-wrap justify-around">
          <div className="w-1/2 sm:w-1/3 md:w-auto text-center mb-6 md:mb-0">
            <div className="mb-4 fa fa-{{ include.icon }} fa-3x"></div>

            <div className="text-sm text-grey-darker">Développement</div>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-auto text-center mb-6 md:mb-0">
            <div className="mb-4 fa fa-{{ include.icon }} fa-3x"></div>

            <div className="text-sm text-grey-darker">Photographie</div>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-auto text-center mb-6 md:mb-0">
            <div className="mb-4 fa fa-{{ include.icon }} fa-3x"></div>

            <div className="text-sm text-grey-darker">Technologie</div>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-auto text-center mb-6 md:mb-0">
            <div className="mb-4 fa fa-{{ include.icon }} fa-3x"></div>

            <div className="text-sm text-grey-darker">Électronique</div>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-auto text-center mb-6 md:mb-0">
            <div className="mb-4 fa fa-{{ include.icon }} fa-3x"></div>

            <div className="text-sm text-grey-darker">Culture</div>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-auto text-center mb-6 md:mb-0">
            <div className="mb-4 fa fa-{{ include.icon }} fa-3x"></div>

            <div className="text-sm text-grey-darker">Voyages</div>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-auto text-center mb-6 md:mb-0">
            <div className="mb-4 fa fa-{{ include.icon }} fa-3x"></div>

            <div className="text-sm text-grey-darker">Design</div>
          </div>
        </div>
      </div>
    </section>

  </>
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
