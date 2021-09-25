import React from 'react';
import cx from 'classnames';
import style from './style.module.scss';

export const PageContent = ({ children, className, ...props }) => (
    <section {...props} className={cx(style.page__container, className)}>
        {children}
    </section>
)
