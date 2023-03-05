import React, { useState } from 'react'
import Loader from '../../component/Loader/Loader';
import QuestionTable from '../../component/Table/Table';
import useFetchQuestion from '../../hooks/hooks/useFetchQuestion';



const questions: { key: number; id: string }[] = [
  { key: 1, id: "AreaUnderTheCurve_901" },
  { key: 2, id: "BinomialTheorem_901" },
  { key: 3, id: "DifferentialCalculus2_901" },
];

const Questions = () => {

    const [id, setId] = useState<any>({ key: 1, id: "AreaUnderTheCurve_901" });
    const [page,setPage]=useState<number>(0);
    const {data,loading}=useFetchQuestion({questionId:id?.id})

  return (
    <>
      {loading && <Loader />}
      <QuestionTable
        data={data}
        page={page}
        setId={setId}
        setPage={setPage}
        questions={questions}
        questionKey={id.id}
      />
    </>
  );
}

export default Questions
