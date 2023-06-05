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
  constructor(props) {
    super(props);
    this.state = {
      career: [
        {
          id: uniqid(),
          pathName: 'Nice Job',
          place: 'Super Company',
          period: {
            from: '2015',
            to: '2018',
          },
          location: 'Lorem, ipsum.',
          tasks: [
            {
              id: uniqid(),
              taskText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, beatae.',
            },
            {
              id: uniqid(),
              taskText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui suscipit molestiae nisi.',
            },
            {
              id: uniqid(),
              taskText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
          ],
        },
        {
          id: uniqid(),
          pathName: 'Very Good Job',
          place: 'Very Good Company',
          period: {
            from: '2018',
            to: 'presence',
          },
          location: 'Lorem, ipsum.',
          tasks: [
            {
              id: uniqid(),
              taskText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, beatae.',
            },
            {
              id: uniqid(),
              taskText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui suscipit molestiae nisi.',
            },
            {
              id: uniqid(),
              taskText:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
          ],
        },
      ],
      formClassName: 'form Expertise_from hidden',
    };
    this.setFormDisplay = this.setFormDisplay.bind(this);
    this.changeKnowledgeInfoHandler =
      this.changeKnowledgeInfoHandler.bind(this);
    this.changeKnowledgeTasksHandler =
      this.changeKnowledgeTasksHandler.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteKnowledge = this.deleteKnowledge.bind(this);
    this.addKnowledge = this.addKnowledge.bind(this);
  }

  setFormDisplay() {
    this.setState({
      formClassName:
        this.state.formClassName === 'form Expertise_from hidden'
          ? 'form Expertise_from'
          : 'form Expertise_from hidden',
    });
  }

  changeKnowledgeInfoHandler(e) {
    const targetProp = e.target.id;
    const knowledgeId = e.target.parentElement.parentElement.id;

    const newCareerList = this.state.career.map((knowledge) => {
      if (knowledge.id === knowledgeId) {
        switch (targetProp) {
          case 'knowledge':
            knowledge.pathName = e.target.value;
            break;
          case 'place':
            knowledge.place = e.target.value;
            break;
          case 'from':
            knowledge.period.from = e.target.value;
            break;
          case 'to':
            knowledge.period.to = e.target.value;
            break;
          case 'location':
            knowledge.location = e.target.value;
            break;
        }
      }
      return knowledge;
    });
    this.setState({
      career: [...newCareerList],
    });
  }

  changeKnowledgeTasksHandler(e) {
    const taskIndex = Number(e.target.id);
    const knowledgeId = e.target.parentElement.parentElement.id;
    const newCareerList = this.state.career.map((knowledge) => {
      if (knowledge.id === knowledgeId) {
        knowledge.tasks.map((task, index) => {
          if (index === taskIndex) {
            task.taskText = e.target.value;
          }
          return task;
        });
      }
      return knowledge;
    });

    this.setState({
      career: [...newCareerList],
    });
  }

  addTask(e) {
    e.preventDefault();
    const newTaskText = e.target.previousSibling.value;
    const knowledgeId = e.target.parentElement.parentElement.id;
    const newCareerList = this.state.career.map((knowledge) => {
      if (knowledge.id === knowledgeId) {
        knowledge.tasks = [
          ...knowledge.tasks,
          { id: uniqid(), taskText: newTaskText },
        ];
      }
      return knowledge;
    });

    this.setState({
      career: [...newCareerList],
    });
    e.target.previousSibling.value = '';
  }

  deleteTask(e) {
    const targetIndex = Number(e.target.previousSibling.id);
    const knowledgeId = e.target.parentElement.parentElement.id;
    const newCareerList = this.state.career.map((knowledge) => {
      if (knowledge.id === knowledgeId) {
        knowledge.tasks = knowledge.tasks.filter(
          (item, index) => index !== targetIndex
        );
      }
      return knowledge;
    });

    this.setState({
      career: [...newCareerList],
    });
  }

  deleteKnowledge(e) {
    const knowledgeId = e.target.parentElement.id;
    const newCareerList = this.state.career.filter(
      (knowledge) => knowledge.id !== knowledgeId
    );
    this.setState({
      career: newCareerList,
    });
  }

  addKnowledge(e) {
    const parent = e.target.parentElement;
    let knowledge = parent.querySelector('#knowledge');
    let place = parent.querySelector('#place');
    let from = parent.querySelector('#from');
    let to = parent.querySelector('#to');
    let location = parent.querySelector('#location');

    this.setState({
      career: [
        ...this.state.career,
        {
          id: uniqid(),
          pathName: knowledge.value,
          place: place.value,
          period: { from: from.value, to: to.value },
          location: location.value,
          tasks: [],
        },
      ],
    });

    knowledge.value = '';
    place.value = '';
    from.value = '';
    to.value = '';
    location.value = '';
  }

  render() {
    const { career } = this.state;

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
            onClick={this.deleteKnowledge}
          />
          <label htmlFor="knowledge">
            knowledge:
            <input
              type="text"
              id="knowledge"
              value={knowledge.pathName}
              onChange={this.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="place">
            place:
            <input
              type="text"
              id="place"
              value={knowledge.place}
              onChange={this.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="from">
            From:
            <input
              type="text"
              id="from"
              value={knowledge.period.from}
              onChange={this.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="to">
            To:
            <input
              type="text"
              id="to"
              value={knowledge.period.to}
              onChange={this.changeKnowledgeInfoHandler}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              type="text"
              id="location"
              value={knowledge.location}
              onChange={this.changeKnowledgeInfoHandler}
            />
          </label>
          <p>tasks:</p>
          {knowledge.tasks.map((task, index) => {
            return (
              <div key={task.id} className="input_container">
                <input
                  id={index}
                  value={task.taskText}
                  onChange={this.changeKnowledgeTasksHandler}
                />
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={this.deleteTask}
                />
              </div>
            );
          })}
          <div className="input_container">
            <input id="add_input" />
            <img src={addIcon} alt="add icon" onClick={this.addTask} />
          </div>
        </div>
      );
    });

    return (
      <>
        {expertiseContent}
        <EditBtn formDisplayHandler={this.setFormDisplay} />
        <Form
          title="Edit Expertise"
          className={this.state.formClassName}
          formDisplayHandler={this.setFormDisplay}
        >
          {knowledgeContent}
          <div className="knowledge_container">
            <img
              src={addIcon}
              id="add_knowledge"
              alt="add knowledge icon"
              onClick={this.addKnowledge}
            />
            <label htmlFor="knowledge">
              knowledge:
              <input type="text" id="knowledge" />
            </label>
            <label htmlFor="place">
              place:
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
