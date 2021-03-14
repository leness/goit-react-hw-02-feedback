import { Component } from "react";
import FeedbackOptions from './components/FeedbackOptions'
import Statistics from './components/Statistics'
import Section from './components/Section'

export default class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  handleClickIncrement = (e) => {
    const { name } = e.currentTarget;
    this.setState((state) => {
      return {
        [name]: state[name] + 1,
      };
    });
  };

  totalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  positiveFeedback = () => {
    return Math.floor((this.state.good * 100) / (this.state.good + this.state.bad + this.state.neutral))
  }

    render() {
      // const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
                <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClickIncrement}/>
        </Section>

        <Section title="Statistics">
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.totalFeedback()}
                    positivePercentage={this.positiveFeedback()}>
                </Statistics>
        </Section>
        
        </>
    )
  }
}


