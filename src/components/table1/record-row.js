import styled from "@emotion/styled";

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #b4c5e5;
  border-style: solid;
  border-color: #FFFFFF;
  padding: 10px 12px 10px 12px;
`;

const Text2 = styled.p`
  font-size: 16px;
  line-height: 120%;
  font-weight: 400;
  color: black;
`;

const StyledPic = styled("img")`
  width: 80px;
  height: 90px;
  border-radius: 50%;
`;


function RecordRow({firstName, lastName, age, gender, email, nationality, photo}) {
  return (
    <Wrapper3>
      <RecordContainer style={{height:"90px", width:"95px", borderWidth:"1px 0px 1px 1px"}}>
        <Text2>
        {firstName}
        </Text2>
      </RecordContainer>
      <RecordContainer style={{height:"90px", width:"95px", borderWidth:"1px 0px 1px 1px"}}>
        <Text2>
        {lastName}
        </Text2>
      </RecordContainer>
      <RecordContainer style={{height:"90px", width:"95px", borderWidth:"1px 0px 1px 1px"}}>
        <Text2>
        {age}
        </Text2>
      </RecordContainer>
      <RecordContainer style={{height:"90px", width:"95px", borderWidth:"1px 0px 1px 1px"}}>
        <Text2>
        {gender}
        </Text2>
      </RecordContainer>
      <RecordContainer style={{height:"90px", width:"245px", borderWidth:"1px 0px 1px 1px"}}>
        <Text2>
        {email}
        </Text2>
      </RecordContainer>
      <RecordContainer style={{height:"90px", width:"120px", borderWidth:"1px 0px 1px 1px"}}>
        <Text2>
        {nationality}
        </Text2>
      </RecordContainer>
      <RecordContainer style={{ height: "90px", width: "95px", borderWidth: "1px 0px 1px 1px" }}>
        <Wrapper1 style={{backgroundColor:"white"}}>
          <StyledPic src={photo}/>
        </Wrapper1>
      </RecordContainer>
    </Wrapper3>
  );
}

export default RecordRow;
