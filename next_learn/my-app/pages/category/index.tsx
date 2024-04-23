import { memo } from "react";
import type { FC, ReactElement } from 'react';

export interface IProps {
    children?: ReactElement;
}

const Category: FC<IProps> = function (props) {
    const { children } = props;

    return (
        <div className="category">
            <div>category</div>
        </div>
    )
};

Category.displayName = 'Category';

export default memo(Category);
