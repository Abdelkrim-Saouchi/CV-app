import React, { Component } from 'react';
import Expertise from './Expertise';
import uniqid from 'uniqid';

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      career: [
        {
          id: uniqid(),
          pathName: 'Doctor Degree',
          place: 'Super University',
          period: {
            from: '2010',
            to: '2015',
          },
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
          pathName: 'Master Degree',
          place: 'Very Good University',
          period: {
            from: '2005',
            to: '2010',
          },
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
        this.state.formClassName === 'form experience_form hidden'
          ? 'form experience_form'
          : 'form experience_form hidden',
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
      career: [...newCareerList],
    });
  }

  addKnowledge(e) {
    const parent = e.target.parentElement;
    const knowledge = parent.querySelector('#knowledge');
    const place = parent.querySelector('#place');
    const from = parent.querySelector('#from');
    const to = parent.querySelector('#to');
    const location = parent.querySelector('#location');

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
    return (
      <div className="Education">
        <Expertise
          handleFormDisplay={this.setFormDisplay}
          changeKnowledgeInfoHandler={this.changeKnowledgeInfoHandler}
          changeKnowledgeTasksHandler={this.changeKnowledgeTasksHandler}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          deleteKnowledge={this.deleteKnowledge}
          addKnowledge={this.addKnowledge}
          componentState={this.state}
          knowledge="Degree"
          compTitle="Education"
          place="University"
        />
      </div>
    );
  }
}
