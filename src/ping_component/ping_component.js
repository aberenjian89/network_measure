import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
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
  },
  summary_container: {
    "& div:first-child": {
      justifyContent: "space-between !important"
    }
  }
});

class PingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IntervalID: null,
      count: 0,
      servers: [
        {
          name: "Skype",
          ready: false,
          detail: null,
          response_times: [],
          average: null,
          url: "https://www.skype.com/en/"
        },
        {
          name: "GoToMeeting",
          ready: false,
          detail: null,
          response_times: [],
          average: null,
          url: "https://www.gotomeeting.com/"
        },
        // {
        //   name: "Service Now",
        //   ready: false,
        //   detail: null,
        //   response_times: [],
        //   average: null,
        //   url: "https://www.servicenow.com/"
        // },
        // {
        //   name: "Sales Force",
        //   ready: false,
        //   detail: null,
        //   response_times: [],
        //   average: null,
        //   url: "https://www.salesforce.com/"
        // },
        {
          name: "Slack",
          ready: false,
          detail: null,
          response_times: [],
          average: null,
          url: "https://slack.com/"
        }
      ]
    };
    this.preping = this.preping.bind(this);
    this.PingHost = this.PingHost.bind(this);
  }

  componentDidMount() {
    this.preping();
  }

  async preping() {
    let new_servers = [];
    for (let i = 0; i < this.state.servers.length; i++) {
      let server = this.state.servers[i];
      let results = await this.PingHost(this.state.servers[i]);
      server.response_times = [...results];
      server.ready = true;
      let sum = results.reduce((acc, curr) => acc + curr);
      server.average = (sum / results.length).toFixed(2);
      new_servers.push(server);
    }
    this.setState({
      servers: new_servers
    });
    console.log("Done");
  }

  calculateAverage(results) {}

  PingHost(server) {
    console.log(server.name);
    let results = [];
    let IntervalID = setInterval(() => {
      let p = new Ping();
      p.ping(server.url, (err, data) => {
        if (err) {
        } else {
          results.push(data);
        }
      });
    }, 100);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        clearInterval(IntervalID);
        resolve(results);
      }, 1000);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          {this.state.servers.map((server, key) => (
            <ExpansionPanel key={key}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.summary_container}
              >
                <Typography className={classes.heading}>
                  {server.name}
                </Typography>
                {!server.ready ? (
                  <div>
                    <CircularProgress size={25} />
                  </div>
                ) : (
                  <Typography>{server.average}</Typography>
                )}
              </ExpansionPanelSummary>
            </ExpansionPanel>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PingComponent);
