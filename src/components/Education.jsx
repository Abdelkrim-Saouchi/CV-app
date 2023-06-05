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
          pathName: "Bioinformatics(Current study) | Doctor's Degree",
          place: 'MUNI',
          period: {
            from: '2021',
            to: 'presence',
          },
          location: 'BRNO, CZECHIA',
          tasks: [
            {
              id: uniqid(),
              taskText:
                'Exploring quality trends of biomolecular structures and ligand factor relationships in the Protein Data Bank database',
            },
            {
              id: uniqid(),
              taskText:
                'Member of Biological Data Management and Analysis Core Facility',
            },
          ],
        },
        {
          id: uniqid(),
          pathName: "Bioinformatics | Bachelor's degree",
          place: 'MUNI',
          period: {
            from: '2019',
            to: '2022',
          },
          location: 'BRNO, CZECHIA',
          tasks: [
            {
              id: uniqid(),
              taskText:
                'Thesis: Validation of ring conformations in polycyclic molecules',
            },
          ],
        },
        {
          id: uniqid(),
          pathName: "Genomics and Poteomics | Master's degree",
          place: 'MUNI',
          period: {
            from: '2018',
            to: '2021',
          },
          location: 'BRNO, CZECHIA',
          tasks: [
            {
              id: uniqid(),
              taskText:
                'Thesis: Involvement of the catalytic telomerase subunit in gene expression regulation',
            },
          ],
        },
        {
          id: uniqid(),
          pathName: "Biochemistry | Bachelor's degree",
          place: 'MUNI',
          period: {
            from: '2014',
            to: '2018',
          },
          location: 'BRNO, CZECHIA',
          tasks: [
            {
              id: uniqid(),
              taskText:
                'Thesis: The role of phosphorylation and dephosforylation in regulation of telomerase activity',
            },
          ],
        },
      ],
      formClassName: 'form education_form hidden',
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
        this.state.formClassName === 'form education_form hidden'
          ? 'form education_form'
          : 'form education_form hidden',
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
    console.log('newCareerList:', newCareerList);
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
