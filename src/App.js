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
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }

  positiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((good * 100) / (good + bad + neutral))
  }

    render() {
  
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


