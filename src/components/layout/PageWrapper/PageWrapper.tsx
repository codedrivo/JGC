import { type ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className="page-wrapper">{children}</div>;
};

export default PageWrapper;
