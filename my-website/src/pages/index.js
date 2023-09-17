import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DocPage from '@theme/DocPage'; // Import the DocPage component

export default function Home() {
  return (
    <Layout>
      <DocPage content="/docs/landing.md" />
    </Layout>
  );
}

import styles from './index.module.css';