import React, { Component } from 'react';

export default class Enrichment extends Component {
  render() {
    const { path, timeIcon } = this.props; // I couldn't find a better common name for study career/job career, maybe I'll change it later
    return (
      <div className="enrich">
        <h2>
          <div className="Academy_work">{path.studyName}</div>
          <div className="organization">{path.university}</div>
        </h2>
        <div className="enrich_info">
          <div className="period">
            <img src={timeIcon} alt="period icon" />
            {path.period}
          </div>
        </div>
        <ul>
          {path.tasks.map((task) => {
            return <li key={task.id}>{task.taskText}</li>;
          })}
        </ul>
      </div>
    );
  }
}
