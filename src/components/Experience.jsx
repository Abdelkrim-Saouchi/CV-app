import React, { Component } from 'react';
import timeIcon from '../calendar-1196-svgrepo-com.svg';
import locationIcon from '../location-pin-svgrepo-com.svg';
import uniqid from 'uniqid';
import Enrichment from './Enrichment';

export default class Experience extends Component {
  constructor() {
    super();
    this.state = {
      career: [
        {
          id: uniqid(),
          pathName: 'Nice Job',
          place: 'Super Company',
          period: '2015-2018',
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
          period: '2018-presence',
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
    };
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
    return <div className="Experience">{ExperienceContent}</div>;
  }
}
