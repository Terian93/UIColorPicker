import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MainSpace = ({
  linksHiden = true,
  activeLink,
  bgColor,
  postBgColor,
  linkColor
}) => {
  const articleContent = articleLink =>
    activeLink !== articleLink ? (
      <Link
        to={'/' + articleLink}
        style={{
          backgroundColor: linkColor
        }}
        className="page-mock__main-space__post-title"
      >
        {articleLink.split('-').join(' ')}
      </Link>
    ) : (
      <div
        style={{
          backgroundColor: linkColor
        }}
        className="page-mock__main-space__post-title"
      >
        {articleLink.split('-').join(' ')}
      </div>
    );

  const numberOfPosts = [...Array(10).keys()];
  const postsWithLinks = [
    'first-template',
    'second-template',
    'third-template'
  ];
  const content = linksHiden
    ? numberOfPosts.map(number => (
      <article
          key={number}
          style={{ backgroundColor: postBgColor.hex }}
          className="page-mock__main-space__post-item"
      />
    ))
    : postsWithLinks.map(linkName => (
      <article
          key={linkName}
          style={{ backgroundColor: postBgColor.hex }}
          className="page-mock__main-space__post-item"
      >
        {articleContent(linkName)}
      </article>
    ));

  return (
    <div
      style={{
        backgroundColor: bgColor.hex,
        color: postBgColor.font
      }}
      className="page-mock__main-space"
    >
      {content}
    </div>
  );
};

MainSpace.propTypes = {
  linksHiden: PropTypes.bool,
  activeLink: PropTypes.string.isRequired,
  bgColor: PropTypes.object.isRequired,
  postBgColor: PropTypes.object.isRequired,
  linkColor: PropTypes.object
};

export default MainSpace;
