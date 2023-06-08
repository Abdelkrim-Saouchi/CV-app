/* eslint-disable default-case */
import React, { useState } from 'react';
import Expertise from './Expertise';
import uniqid from 'uniqid';

const initialCareer = [
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
];

const Education = () => {
  const [career, setCareer] = useState(initialCareer);
  const [edit, setEdit] = useState(false);

  const setFormDisplay = () => {
    setEdit(!edit);
  };

  const changeKnowledgeInfoHandler = (e) => {
    const targetProp = e.target.id;
    const knowledgeId = e.target.parentElement.parentElement.id;

    const newCareerList = career.map((knowledge) => {
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
    setCareer(newCareerList);
  };

  const changeKnowledgeTasksHandler = (e) => {
    const taskIndex = Number(e.target.id);
    const knowledgeId = e.target.parentElement.parentElement.id;
    const newCareerList = career.map((knowledge) => {
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
    setCareer(newCareerList);
  };

  const addTask = (e) => {
    e.preventDefault();
    const newTaskText = e.target.previousSibling.value;
    const knowledgeId = e.target.parentElement.parentElement.id;
    const newCareerList = career.map((knowledge) => {
      if (knowledge.id === knowledgeId) {
        knowledge.tasks = [
          ...knowledge.tasks,
          { id: uniqid(), taskText: newTaskText },
        ];
      }
      return knowledge;
    });

    setCareer(newCareerList);
    e.target.previousSibling.value = '';
  };

  const deleteTask = (e) => {
    const targetIndex = Number(e.target.previousSibling.id);
    const knowledgeId = e.target.parentElement.parentElement.id;
    const newCareerList = career.map((knowledge) => {
      if (knowledge.id === knowledgeId) {
        knowledge.tasks = knowledge.tasks.filter(
          (item, index) => index !== targetIndex
        );
      }
      return knowledge;
    });
    setCareer(newCareerList);
  };

  const deleteKnowledge = (e) => {
    const knowledgeId = e.target.parentElement.id;
    const newCareerList = career.filter(
      (knowledge) => knowledge.id !== knowledgeId
    );
    setCareer(newCareerList);
  };

  const addKnowledge = (e) => {
    const parent = e.target.parentElement;
    const knowledge = parent.querySelector('#knowledge');
    const place = parent.querySelector('#place');
    const from = parent.querySelector('#from');
    const to = parent.querySelector('#to');
    const location = parent.querySelector('#location');

    setCareer([
      ...career,
      {
        id: uniqid(),
        pathName: knowledge.value,
        place: place.value,
        period: { from: from.value, to: to.value },
        location: location.value,
        tasks: [],
      },
    ]);

    knowledge.value = '';
    place.value = '';
    from.value = '';
    to.value = '';
    location.value = '';
  };

  return (
    <div className="Education">
      <Expertise
        handleFormDisplay={setFormDisplay}
        edit={edit}
        parentFormClassName="education_form"
        changeKnowledgeInfoHandler={changeKnowledgeInfoHandler}
        changeKnowledgeTasksHandler={changeKnowledgeTasksHandler}
        addTask={addTask}
        deleteTask={deleteTask}
        deleteKnowledge={deleteKnowledge}
        addKnowledge={addKnowledge}
        career={career}
        knowledge="Degree"
        compTitle="Education"
        place="University"
      />
    </div>
  );
};

export default Education;
