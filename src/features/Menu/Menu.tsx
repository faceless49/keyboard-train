import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Menu.module.css'
export const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.container}>
                <div>
                    <NavLink to='/' className={s.link}>
                        <div className={s.logo}>
                            Typing and   learn js
                        </div>
                    </NavLink>
                </div>
                <div>
                    <div className={s.link_container}>
                        <NavLink to='/interviews' className={s.link} activeClassName={s.activeLink}> Категория 1</NavLink>
                    </div>
                    <div className={s.link_container}>
                        <NavLink to='/Profile' className={s.link} activeClassName={s.activeLink}> Категория 2</NavLink>
                    </div>
                    <div className={s.link_container}>
                        <NavLink to='/3' className={s.link} activeClassName={s.activeLink}> Категория 3</NavLink>
                    </div>
                    <div className={s.link_container}>
                        <NavLink to='/4' className={s.link} activeClassName={s.activeLink}> Категория 4</NavLink>
                    </div>
                    <div className={s.link_container}>
                        <NavLink to='/5' className={s.link} activeClassName={s.activeLink}> Категория 5</NavLink>
                    </div>
                </div>
                <div>
                    footer
                </div>
            </div>

        </div>
    )
}