import React from 'react';
import addIcon from '../assets/add-plus-square-svgrepo-com.svg';
import timeIcon from '../assets/calendar-1196-svgrepo-com.svg';
import deleteIcon from '../assets/delete-2-svgrepo-com.svg';
import locationIcon from '../assets/location-pin-svgrepo-com.svg';
import EditBtn from './EditBtn';
import Enrichment from './Enrichment';
import Form from './Form';
import { useHandlers } from './useHandlers';

const Expertise = ({
  initialCareer,
  parentFormClassName,
  knowledge,
  compTitle,
  place,
  showedEdit,
}) => {
  const {
    career,
    edit,
    handleFormDisplay,
    changeKnowledgeInfoHandler,
    changeKnowledgeTasksHandler,
    addTask,
    deleteTask,
    deleteKnowledge,
    addKnowledge,
  } = useHandlers(initialCareer);

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

  const knowledgeContent = career.map((knldge) => {
    return (
      <div key={knldge.id} id={knldge.id} className="knowledge_container">
        <img
          src={deleteIcon}
          id="delete_knowledge"
          alt="delete knowledge icon"
          onClick={deleteKnowledge}
        />
        <label htmlFor="knowledge">
          {knowledge}
          <input
            type="text"
            id="knowledge"
            value={knldge.pathName}
            onChange={changeKnowledgeInfoHandler}
          />
        </label>
        <label htmlFor="place">
          {place}:
          <input
            type="text"
            id="place"
            value={knldge.place}
            onChange={changeKnowledgeInfoHandler}
          />
        </label>
        <label htmlFor="from">
          From:
          <input
            type="text"
            id="from"
            value={knldge.period.from}
            onChange={changeKnowledgeInfoHandler}
          />
        </label>
        <label htmlFor="to">
          To:
          <input
            type="text"
            id="to"
            value={knldge.period.to}
            onChange={changeKnowledgeInfoHandler}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            value={knldge.location}
            onChange={changeKnowledgeInfoHandler}
          />
        </label>
        <p>Skills:</p>
        {knldge.tasks.map((task, index) => {
          return (
            <div key={task.id} className="input_container">
              <input
                id={index}
                value={task.taskText}
                onChange={changeKnowledgeTasksHandler}
              />
              <img src={deleteIcon} alt="delete icon" onClick={deleteTask} />
            </div>
          );
        })}
        <div className="input_container">
          <input id="add_input" />
          <img src={addIcon} alt="add icon" onClick={addTask} />
        </div>
      </div>
    );
  });

  return (
    <>
      {expertiseContent}
      {showedEdit && <EditBtn formDisplayHandler={handleFormDisplay} />}
      {edit && (
        <Form
          title={`Edit ${compTitle}`}
          className={parentFormClassName}
          formDisplayHandler={handleFormDisplay}
        >
          {knowledgeContent}
          <div className="knowledge_container">
            <img
              src={addIcon}
              id="add_knowledge"
              alt="add knowledge icon"
              onClick={addKnowledge}
            />
            <label htmlFor="knowledge">
              {knowledge}
              <input type="text" id="knowledge" />
            </label>
            <label htmlFor="place">
              {place}:
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
      )}
    </>
  );
};

export default Expertise;
