import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
    const { open } = useSpring({ open: props.navbarState ? 0 : 1});

    if (props.navbarState === true) {
        return (
            <CollapseWrapper style={{
                transform: open.interpolate({
                    rang: [0, 0.2, 0.3, 1],
                    output: [0, -20, 0, -200],
                }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
            }}
            >
                <NavLinks>
                    <li><a href="/" onClick={props.handleNavbar}>link n1</a></li>
                    <li><a href="/" onClick={props.handleNavbar}>link n1</a></li>
                    <li><a href="/" onClick={props.handleNavbar}>link n1</a></li>
                    <li><a href="/" onClick={props.handleNavbar}>link n1</a></li>
                </NavLinks>
                </CollapseWrapper>
                );
        }
        return null;
};

export default CollapseMenu;