import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop:"20rem"
});

const QuestionsTable = ({data,page,setId,questions,setPage,questionKey}:{data:any[],page:number,setId:any,questions:any[],setPage:any,questionKey:number}) => {
  return (
    <StyledDiv>
      <TableContainer component={Paper} sx={{ minWidth: 200, width: "70%" }}>
        <Table sx={{ minWidth: 200 }} aria-label="customized table">
          <TableHead>
            <TableRow >
              <StyledTableCell >Question</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data?.map((question) => (
                <StyledTableRow key={question.name}>
                  <StyledTableCell component="th" scope="row" key={questionKey}>
                    <MathJaxContext key={questionKey}>
                      <MathJax inline dynamic key={questionKey}>
                        {question.Question}
                      </MathJax>
                    </MathJaxContext>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={3}
          rowsPerPage={1}
          page={page}
          onPageChange={(event, newPage) => {
            const currentId = questions?.find((question: any) => {
              console.log(question.key, newPage, "q");
              return question.key === newPage + 1;
            });
            setPage(newPage);
            setId({ ...currentId });
          }}
        />
      </TableContainer>
    </StyledDiv>
  );
}

export default QuestionsTable
