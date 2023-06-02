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
  }
  render() {
    const { career } = this.state;
    const eduContent = career.map((study) => {
      return <Enrichment path={study} timeIcon={timeIcon} key={study.id} />;
    });
    return <div className="Education">{eduContent}</div>;
  }
}
