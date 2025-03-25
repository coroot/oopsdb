import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
        <Footer {...props} />
        <div className="card" style={{display: 'block', marginTop: '40px', textAlign: 'center', backgroundColor: 'unset'}}>
            Ready to go beyond alerts and actually understand what’s happening in your system with Coroot Enterprise?
            <a href="https://coroot.com/account" target="_blank" className="primary-button" style={{marginLeft: '4px'}}>
                Try for free
            </a>
        </div>
    </>
  );
}
