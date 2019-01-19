import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({
  data: {
    file
  },
}) => (
  <>
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Img fluid={file.childImageSharp.fluid} className="rounded-full w-32 mx-auto" />

        <h1 className="mr-4 text-3xl text-grey-darker font-normal">
          Guillaume <span className="font-extrabold text-black">BRIDAY</span>
        </h1>
      </div>
    </div>

    <div className="post-content text-grey-darker">
      <p>
        Je suis développeur Web pour faire de ma passion mon travail.
        J'ai pu acquérir de l'expérience dans les langages PHP et Ruby, entre autres, au cours de mes dernières années en entreprise.
        J'aime travailler avec Git, faire de la qualité logiciel et des tests fonctionnels.
      </p>

      <p>
        Apprendre et découvrir les technologies de demain occupe mon temps libre afin d'améliorer mes projets tant professionnels que personnels.
      </p>

      <div className="flex justify-center mb-8">
        <div className="w-full md:w-1/2 flex justify-between flex-wrap">
          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://github.com/guillaumebriday">
              <FontAwesomeIcon icon={['fab', 'github']} className="text-indigo" /> GitHub
            </a>
          </p>

          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://twitter.com/guillaumebriday">
              <FontAwesomeIcon icon={['fab', 'twitter']} className="text-indigo" /> Twitter
            </a>
          </p>

          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://instagram.com/guillaumebriday">
              <FontAwesomeIcon icon={['fab', 'instagram']} className="text-indigo" /> Instagram
            </a>
          </p>

          <p className="w-1/2 md:w-auto text-center sm:mt-0 mt-4">
            <a href="https://www.linkedin.com/in/guillaumebriday">
              <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-indigo" /> Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
)

export const query = graphql`
  {
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
