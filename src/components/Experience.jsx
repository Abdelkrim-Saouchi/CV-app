/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import React, { Component } from 'react';
import timeIcon from '../calendar-1196-svgrepo-com.svg';
import locationIcon from '../location-pin-svgrepo-com.svg';
import uniqid from 'uniqid';
import Enrichment from './Enrichment';
import EditBtn from './EditBtn';
import Form from './Form';
import deleteIcon from '../delete-2-svgrepo-com.svg';
import addIcon from '../add-plus-square-svgrepo-com.svg';

export default class Experience extends Component {
  constructor() {
    super();
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
      formClassName: 'form experience_form hidden',
    };
    this.setFormDisplay = this.setFormDisplay.bind(this);
    this.changeJobInfoHandler = this.changeJobInfoHandler.bind(this);
    this.changeJobTasksHandler = this.changeJobTasksHandler.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }

  setFormDisplay() {
    this.setState({
      formClassName:
        this.state.formClassName === 'form experience_form hidden'
          ? 'form experience_form'
          : 'form experience_form hidden',
    });
  }

  changeJobInfoHandler(e) {
    const targetProp = e.target.id;
    const jobId = e.target.parentElement.parentElement.id;

    const newCareerList = this.state.career.map((job) => {
      if (job.id === jobId) {
        switch (targetProp) {
          case 'job':
            job.pathName = e.target.value;
            break;
          case 'company':
            job.place = e.target.value;
            break;
          case 'from':
            job.period.from = e.target.value;
            break;
          case 'to':
            job.period.to = e.target.value;
            break;
          case 'location':
            job.location = e.target.value;
            break;
        }
      }
      return job;
    });
    this.setState({
      career: [...newCareerList],
    });
  }

  changeJobTasksHandler(e) {
    const taskIndex = Number(e.target.id);
    const jobId = e.target.parentElement.parentElement.id;
    const newCareerList = this.state.career.map((job) => {
      if (job.id === jobId) {
        job.tasks.map((task, index) => {
          if (index === taskIndex) {
            task.taskText = e.target.value;
          }
          return task;
        });
      }
      return job;
    });

    this.setState({
      career: [...newCareerList],
    });
  }

  addTask(e) {
    e.preventDefault();
    const newTaskText = e.target.previousSibling.value;
    const jobId = e.target.parentElement.parentElement.id;
    const newCareerList = this.state.career.map((job) => {
      if (job.id === jobId) {
        job.tasks = [...job.tasks, { id: uniqid(), taskText: newTaskText }];
      }
      return job;
    });

    this.setState({
      career: [...newCareerList],
    });
    e.target.previousSibling.value = '';
  }

  deleteTask(e) {
    const targetIndex = Number(e.target.previousSibling.id);
    const jobId = e.target.parentElement.parentElement.id;
    const newCareerList = this.state.career.map((job) => {
      if (job.id === jobId) {
        job.tasks = job.tasks.filter((item, index) => index !== targetIndex);
      }
      return job;
    });

    this.setState({
      career: [...newCareerList],
    });
  }

  deleteJob(e) {
    const jobId = e.target.parentElement.id;
    const newCareerList = this.state.career.filter((job) => job.id !== jobId);
    this.setState({
      career: newCareerList,
    });
  }

  render() {
    const { career } = this.state;

    const ExperienceContent = career.map((job) => {
      return (
        <Enrichment path={job} timeIcon={timeIcon} key={job.id}>
          <div className="location">
            <img src={locationIcon} alt="location icon" />
            {job.location}
          </div>
        </Enrichment>
      );
    });

    const jobContent = career.map((job) => {
      return (
        <>
          <div key={job.id} id={job.id} className="job_container">
            <img
              src={deleteIcon}
              id="delete_job"
              alt="delete job icon"
              onClick={this.deleteJob}
            />
            <label htmlFor="job">
              Job:
              <input
                type="text"
                id="job"
                value={job.pathName}
                onChange={this.changeJobInfoHandler}
              />
            </label>
            <label htmlFor="company">
              Company:
              <input
                type="text"
                id="company"
                value={job.place}
                onChange={this.changeJobInfoHandler}
              />
            </label>
            <label htmlFor="from">
              From:
              <input
                type="text"
                id="from"
                value={job.period.from}
                onChange={this.changeJobInfoHandler}
              />
            </label>
            <label htmlFor="to">
              To:
              <input
                type="text"
                id="to"
                value={job.period.to}
                onChange={this.changeJobInfoHandler}
              />
            </label>
            <label htmlFor="location">
              Location:
              <input
                type="text"
                id="location"
                value={job.location}
                onChange={this.changeJobInfoHandler}
              />
            </label>
            <p>tasks:</p>
            {job.tasks.map((task, index) => {
              return (
                <div key={task.id} className="input_container">
                  <input
                    id={index}
                    value={task.taskText}
                    onChange={this.changeJobTasksHandler}
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
        </>
      );
    });

    return (
      <div className="Experience">
        {ExperienceContent}
        <EditBtn formDisplayHandler={this.setFormDisplay} />
        <Form
          title="Edit Experience"
          className={this.state.formClassName}
          formDisplayHandler={this.setFormDisplay}
        >
          {jobContent}
          <div className="job_container">
            <img
              src={addIcon}
              id="add_job"
              alt="add job icon"
              onClick={this.addJob}
            />
            <label htmlFor="job">
              Job:
              <input type="text" id="job" value="" />
            </label>
            <label htmlFor="company">
              Company:
              <input type="text" id="company" value="" />
            </label>
            <label htmlFor="from">
              From:
              <input type="text" id="from" value="" />
            </label>
            <label htmlFor="to">
              To:
              <input type="text" id="to" value="" />
            </label>
            <label htmlFor="location">
              Location:
              <input type="text" id="location" value="" />
            </label>
            <p>tasks:</p>
            <div className="input_container">
              <input id="add_input" />
              <img src={addIcon} alt="add icon" onClick={this.addTask} />
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
