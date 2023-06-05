/* eslint-disable default-case */
import React, { Component } from 'react';
import timeIcon from '../calendar-1196-svgrepo-com.svg';
import locationIcon from '../location-pin-svgrepo-com.svg';
import uniqid from 'uniqid';
import Enrichment from './Enrichment';
import EditBtn from './EditBtn';
import Form from './Form';
import deleteIcon from '../delete-2-svgrepo-com.svg';
import addIcon from '../add-plus-square-svgrepo-com.svg';

export default class Expertise extends Component {
  render() {
    const { career } = this.props.componentState;

    const expertiseContent = career.map((knowledge) => {
      return (
        <Enrichment path={knowledge} timeIcon={timeIcon} key={knowledge.id}>
          <div className="location">
            <img src={locationIcon} alt="location icon" />
            {knowledge.location}
          </div>
        </Enrichment>
      );
    });

    const knowledgeContent = career.map((knowledge) => {
      return (
        <div
          key={knowledge.id}
          id={knowledge.id}
          className="knowledge_container"
        >
          <img
            src={deleteIcon}
            id="delete_knowledge"
            alt="delete knowledge icon"
            onClick={this.props.deleteKnowledge}
          />
          <label htmlFor="knowledge">
            {this.props.knowledge}
            <input
              type="text"
              id="knowledge"
              value={knowledge.pathName}
              onChange={this.props.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="place">
            {this.props.place}:
            <input
              type="text"
              id="place"
              value={knowledge.place}
              onChange={this.props.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="from">
            From:
            <input
              type="text"
              id="from"
              value={knowledge.period.from}
              onChange={this.props.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="to">
            To:
            <input
              type="text"
              id="to"
              value={knowledge.period.to}
              onChange={this.props.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              type="text"
              id="location"
              value={knowledge.location}
              onChange={this.props.changeKnowledgeInfoHandler}
            />
          </label>
          <p>tasks:</p>
          {knowledge.tasks.map((task, index) => {
            return (
              <div key={task.id} className="input_container">
                <input
                  id={index}
                  value={task.taskText}
                  onChange={this.props.changeKnowledgeTasksHandler}
                />
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={this.props.deleteTask}
                />
              </div>
            );
          })}
          <div className="input_container">
            <input id="add_input" />
            <img src={addIcon} alt="add icon" onClick={this.props.addTask} />
          </div>
        </div>
      );
    });

    return (
      <>
        {expertiseContent}
        <EditBtn formDisplayHandler={this.props.handleFormDisplay} />
        <Form
          title={`Edit ${this.props.compTitle}`}
          className={this.props.componentState.formClassName}
          formDisplayHandler={this.props.handleFormDisplay}
        >
          {knowledgeContent}
          <div className="knowledge_container">
            <img
              src={addIcon}
              id="add_knowledge"
              alt="add knowledge icon"
              onClick={this.props.addKnowledge}
            />
            <label htmlFor="knowledge">
              {this.props.knowledge}
              <input type="text" id="knowledge" />
            </label>
            <label htmlFor="place">
              {this.props.place}:
              <input type="text" id="place" />
            </label>
            <label htmlFor="from">
              From:
              <input type="text" id="from" />
            </label>
            <label htmlFor="to">
              To:
              <input type="text" id="to" />
            </label>
            <label htmlFor="location">
              Location:
              <input type="text" id="location" />
            </label>
          </div>
        </Form>
      </>
    );
  }
}
