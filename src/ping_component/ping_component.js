import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";

import Ping from "ping.js";

const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing.unit
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  wrapper: {
    width: "30%"
  }
});

class PingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IntervalID: null,
      count: 0,
      skype: {
        ready: false,
        detail: null,
        response_times: [],
        average: null
      },
      go_to_meeting: {
        ready: false,
        detail: null,
        response_times: [],
        average: null
      },
      service_now: {
        ready: false,
        detail: null,
        response_times: [],
        average: null
      },
      sales_force: {
        ready: false,
        detail: null,
        response_times: [],
        average: null
      },
      slack: {
        ready: false,
        detail: null,
        response_times: [],
        average: null
      }
    };
  }

  PreparePing() {}

  PingHost(host) {}

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Skype</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>GoToMeeting</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>ServiceNow</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>SalesForce</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Slack</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PingComponent);
