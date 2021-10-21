import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from "react-promise-tracker";
// eslint-disable-next-line 
import { CSSTransition } from 'react-transition-group';

import styles from './TableLoader.module.css';

const Loader = ({ colSpan, area }) => {
    const { promiseInProgress } = usePromiseTracker({ area });
    const [showLoader, setShowLoader] = useState(true);

    return promiseInProgress && (
        <tr>
            <CSSTransition
                in={showLoader}
                timeout={530}
                classNames="collapse-expand"
                onEnter={() => setShowLoader(false)}
                onExited={() => setShowLoader(true)}
            >
                <th colSpan={colSpan} id={styles["loader-container"]}>
                    <div className="d-flex justify-content-center align-items-center alert ">
                        <div className={styles["lds-ellipsis"]}>
                            <div>
                            </div>

                            <div>
                            </div>

                            <div>
                            </div>

                            <div>
                            </div>
                        </div>
                    </div>
                </th>
            </CSSTransition>
        </tr>
    )
};

export default Loader;

Loader.propTypes = {
    colSpan: PropTypes.number,
    area: PropTypes.number,
}