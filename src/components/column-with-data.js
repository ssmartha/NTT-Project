import styled from "@emotion/styled";

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text2 = styled.p`
  font-size: 16px;
  line-height: 120%;
  font-weight: 400;
  color: black;
`;

function ColumnWithData({firstName, lastName, age, gender, email, nationality, backgroundColor }) {

  return (
    <>
      <Wrapper3>
        <Wrapper1 style={{height:"90px", width:"95px", background: "#B4C5E5", borderRight:"2px solid white", paddingLeft:"1px", justifyContent:"center"}}>
          <Text2>
            {firstName}
          </Text2>
        </Wrapper1>
        <Wrapper1 style={{ height:"90px", width: "95px", background: "#B4C5E5", borderRight:"2px solid white", paddingLeft:"1px", justifyContent:"center" }}>
          <Text2>
           {lastName}
          </Text2>
        </Wrapper1>
        <Wrapper1 style={{ height:"90px", width: "95px", background: "#B4C5E5", borderRight:"2px solid white", textAlign:"center", justifyContent:"center" }}>
          <Text2>
           {age}
          </Text2>
        </Wrapper1>
        <Wrapper1 style={{ height:"90px", width: "95px", background: "#B4C5E5", borderRight:"2px solid white", textAlign:"center", justifyContent:"center" }}>
          <Text2>
           {gender}
          </Text2>
        </Wrapper1>
        <Wrapper1 style={{ height:"90px", width: "200px", background: "#B4C5E5", borderRight:"2px solid white", paddingLeft:"1px", justifyContent:"center" }}>
          <Text2>
           {email}
          </Text2>
        </Wrapper1>
        <Wrapper1 style={{ height:"90px", width: "120px", background: "#B4C5E5", borderRight:"2px solid white", textAlign:"center", justifyContent:"center" }}>
          <Text2>
           {nationality}
          </Text2>
        </Wrapper1>
        <Wrapper1 style={{ height:"90px", width:"95px", background: "#B4C5E5", textAlign:"center"}}>
          <Text2>
           Foto
          </Text2>
        </Wrapper1>
      </Wrapper3>
    </>
  );
}

export default ColumnWithData;
