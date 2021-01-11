import React from 'react';
import styles from './App.module.scss';
import cn from "classnames";


const Spinner = () => {
  return (
    <div className={cn(styles['spinner'])}/>
  );
}

export default Spinner;

