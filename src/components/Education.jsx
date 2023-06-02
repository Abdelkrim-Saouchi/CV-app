import React, { Component } from 'react';
import timeIcon from '../calendar-1196-svgrepo-com.svg';
import Enrichment from './Enrichment';
import uniqid from 'uniqid';

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      career: [
        {
          id: uniqid(),
          studyName: 'Doctor Degree',
          university: 'Super University',
          period: '2010-2015',
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
          studyName: 'Master Degree',
          university: 'Very Good University',
          period: '2005-2010',
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
    const eduContent = career.map((study) => {
      return <Enrichment path={study} timeIcon={timeIcon} key={study.id} />;
    });
    return <div className="Education">{eduContent}</div>;
  }
}
