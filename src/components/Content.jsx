import React from "react";
import { Card } from "./Card";
import { cards } from '../cards';
import styles from './content.module.css';

export const Content = () => {

    return (
        <div className={styles.content}>
            {
                cards.map((card) => 
                <Card price={card.price} speed={card.speed} color={card.color}/>
                )
            }
        </div>

    );
};
