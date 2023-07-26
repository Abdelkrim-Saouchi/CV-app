/* eslint-disable default-case */

import uniqid from 'uniqid';
import Expertise from './Expertise';
import { useShowEdit } from './useShowEdit';

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
  const [showedEdit, showEdit, hideEdit] = useShowEdit();

  return (
    <div className="Education" onMouseEnter={showEdit} onMouseLeave={hideEdit}>
      <Expertise
        initialCareer={initialCareer}
        parentFormClassName="education_form"
        knowledge="Degree"
        compTitle="Education"
        place="University"
        showedEdit={showedEdit}
      />
    </div>
  );
};

export default Education;
