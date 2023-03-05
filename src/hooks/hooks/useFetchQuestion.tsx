// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import useAjax from './useAjax';

const useFetchQuestion = ({questionId}:{questionId:string}) => {

const { data, loading, error, setData, setLoading,request,setError } = useAjax();


 useEffect(() => {
          request(
            `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId}`
          )
            .then((res) => {
              console.log(res,'res')
              if (res){
                setData(res)
              }
            })
            .catch(() => {
              setError(true);
            })
            .finally(() => setLoading(false));
       
 }, [questionId]);



  return {data, loading, error, setData, setLoading,setError}
}

export default useFetchQuestion;
