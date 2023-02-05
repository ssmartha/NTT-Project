import FieldRow from "./field-row"
import RecordRow from "./record-row"
import styled from "@emotion/styled";

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Table1({records}) {
  return (
    <Wrapper1 style={{maxWidth:"824px"}}>
      <FieldRow />
      {records.map((userRecord)=> (
        <RecordRow
          firstName={userRecord.name.first}
          lastName={userRecord.name.last}
          age={userRecord.dob.age}
          gender={userRecord.gender}
          email={userRecord.email}
          nationality={userRecord.location.country}
          photo={userRecord.picture.large}
        />
      ))}
    </Wrapper1>
  );
}

export default Table1;
