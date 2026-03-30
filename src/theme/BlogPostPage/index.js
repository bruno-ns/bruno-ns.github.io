import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <Link to="/blog" className={styles.blogPostBackButton}>
        <span className="material-icons-outlined">arrow_back</span>
        <span>Voltar ao Blog</span>
      </Link>
      <BlogPostPage {...props} />
    </>
  );
}
