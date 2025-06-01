import React from 'react';
import style from './List.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const List = ({ title, items }) => {
    return (
        <div className={style.listContainer}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.separationLine}></div>
            <AnimatePresence mode="wait">
                <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                >
                    <ul className={style.list}>
                        {items.map((item, index) => (
                            <li key={index} className={style.listItem}>
                                <img src={item.link}></img>
                                <div className={style.gradientOverlay}></div>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>

                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default List;