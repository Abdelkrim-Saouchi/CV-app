import uniqid from 'uniqid';
import Expertise from './Expertise';
import { useShowEdit } from './useShowEdit';

const initialCareer = [
  {
    id: uniqid(),
    pathName: 'Doctoral Researcher',
    place: 'CEITEC-Central European Institute of Technology',
    period: {
      from: '2021',
      to: 'presence',
    },
    location: 'BRNO, CZECHIA',
    tasks: [
      {
        id: uniqid(),
        taskText:
          'Error-check and validation of structural and publication data with goal of contributing to thte quality of a molecular database',
      },
      {
        id: uniqid(),
        taskText: 'Teaching: Introduction to programming in Python',
      },
      {
        id: uniqid(),
        taskText: 'Mentoring younger bioinformatics students',
      },
    ],
  },
  {
    id: uniqid(),
    pathName: 'Laboratory Technician',
    place: 'Czech Academy of Science',
    period: {
      from: '2018',
      to: '2019',
    },
    location: 'BRNO, CZECHIA',
    tasks: [
      {
        id: uniqid(),
        taskText: 'Collecting and preparing samples for a biological library',
      },
      {
        id: uniqid(),
        taskText: 'Working with bioinformatics tools',
      },
      {
        id: uniqid(),
        taskText: 'Teaching students new laboratory techniques',
      },
    ],
  },
];

const Experience = () => {
  const [showedEdit, showEdit, hideEdit] = useShowEdit();

  return (
    <div className="Experience" onMouseEnter={showEdit} onMouseLeave={hideEdit}>
      <Expertise
        initialCareer={initialCareer}
        parentFormClassName="experience_form"
        knowledge="Job"
        compTitle="Experience"
        place="Company"
        showedEdit={showedEdit}
      />
    </div>
  );
};

export default Experience;
