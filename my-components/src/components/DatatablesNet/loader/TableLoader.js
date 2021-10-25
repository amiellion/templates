import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { usePromiseTracker } from "react-promise-tracker";
// eslint-disable-next-line 
import { CSSTransition } from 'react-transition-group';

import styles from './TableLoader.module.css';

const Loader = ({ colSpan, area }) => {
    const { promiseInProgress } = usePromiseTracker({ area });
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        let timer
        if (promiseInProgress) {
            setShowLoader(() => promiseInProgress)
        } else {
            timer = setTimeout(() => {
                setShowLoader(() => promiseInProgress)
            }, 3500);
        }

        return () => clearTimeout(timer);
    }, [promiseInProgress])

    return (
        <tr>
            <CSSTransition
                in={showLoader}
                timeout={600}
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