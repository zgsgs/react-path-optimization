import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

`
[JS中的CSS](https://material-ui.com/style/typography/#css-in-js)
在某些情况下，您可能无法使用该Typography组件。希望你可以利用typography主题的关键。
`

const styles = theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
  },
});	

function TypographyTheme(props) {
  return <div className={props.classes.root}>{"This div's text looks like that of a button."}</div>;
}

TypographyTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyTheme);