import React, { useState, useEffect } from 'react';
import { Wrapper, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';
import { Loader } from 'components/atoms/Loader/Loader';
const API_TOKEN = process.env.REACT_APP_DATOCMS_TOKEN;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setErrors] = useState(false);
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
          {
            allArticles {
              id
              title
              category
              content
              image {
                url
              }
            }
          }
          `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => setErrors(true));
  }, []);
  return (
    <Wrapper>
      <h2>News feed section</h2>

      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article image" /> : null}
            </ContentWrapper>
            <Button isBig>click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <>{error ? <h3>Sorry, we couldn't load articles</h3> : <Loader />}</>
      )}
    </Wrapper>
  );
};
export default NewsSection;
