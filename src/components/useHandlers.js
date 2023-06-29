import { useState } from 'react';
import uniqid from 'uniqid';

const useHandlers = (initialCareer) => {
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
          default:
            throw new Error('Unknown input field');
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

  return {
    career,
    edit,
    setFormDisplay,
    changeKnowledgeInfoHandler,
    changeKnowledgeTasksHandler,
    addTask,
    deleteTask,
    deleteKnowledge,
    addKnowledge,
  };
};

export { useHandlers };
