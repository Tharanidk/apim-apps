import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const PREFIX = 'VerticalDivider';

const classes = {
    divider: `${PREFIX}-divider`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')({
    [`& .${classes.divider}`]: {
        borderRight: 'solid 1px #ccc',
    },
});

/**
 *
 *
 * @param {*} props
 * @returns
 */
function VerticalDivider(props) {
    const {
        height = 30, marginLeft = 10, marginRight = 10,
    } = props;

    return (
        <Root>
            <div className={classes.divider} style={{ height, marginLeft, marginRight }} />
        </Root>
    );
}

VerticalDivider.propTypes = {
    classes: PropTypes.shape({
        divider: PropTypes.string,
    }).isRequired,
    height: PropTypes.shape({}).isRequired,
    marginLeft: PropTypes.shape({}).isRequired,
    marginRight: PropTypes.shape({}).isRequired,
};

export default (VerticalDivider);
