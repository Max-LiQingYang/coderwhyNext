import { memo } from "react";
import type { FC, ReactElement } from 'react';

export interface IProps {
    children?: ReactElement;
}

const Profile: FC<IProps> = function (props) {
    const { children } = props;

    return (
        <div className="Profile">
            <div>Profile</div>
        </div>
    )
};

Profile.displayName = 'Profile';

export default memo(Profile);
