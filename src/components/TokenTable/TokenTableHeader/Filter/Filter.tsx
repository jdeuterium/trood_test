import React, {useRef, useState} from 'react';
import useOnClickOutside from "../../../../utils/hooks";
import styles from './Filter.module.css';

interface Props {
    children: React.ReactNode;
    selected: string;
}

const Filter = (props: Props) => {
    const {children, selected} = props;

    const [viewFilter, setViewFilter] = useState(false);
    const handleToggleViewFilter = () => setViewFilter(!viewFilter);

    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => {
        setViewFilter(false);
    });

    return (
        <div className={styles.root}>
            <div className={styles.chevron} onClick={handleToggleViewFilter} />
            <div className={styles.selected}>{selected || 'All'}</div>
            {viewFilter
                ? <div className={styles.popover} ref={ref}>
                    {children}
                </div>
                : null}
        </div>

    );
};

export default Filter;