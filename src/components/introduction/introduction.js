import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FiArrowDown } from 'react-icons/fi';
import styles from './introduction.module.scss';

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "introduction" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                introduction {
                  image {
                    childImageSharp {
                      fluid(quality: 90, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                  text
                }
              }
            }
          }
        }
      }
    }
  `);
  const content = data.allFile.edges[0].node.childMarkdownRemark.frontmatter.introduction;
  const imageData = content.image.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="section" fluid={imageData} backgroundColor="#040e18" className={styles.introductionContainer}>
      <h1>{content.text}</h1>
      <FiArrowDown className={styles.arrowDown} />
    </BackgroundImage>
  );
};

export default Introduction;

// query{
//   allFile(filter: {name: {eq: "introduction"}}
//   ) {
//     edges{
//       node{
//         childMarkdownRemark{
//           frontmatter{
//             text
//             image
//           }
//         }
//       }
//     }
//   }
// }
