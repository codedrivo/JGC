import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    return (
        <div className="page-header-wrapper">
            <div className="page-title-box">
                <h1 className="page-title">{title}</h1>
            </div>
        </div>
    );
};

export default PageHeader;
