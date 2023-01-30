import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ColumnWithData from "../components/column-with-data";

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

const Text1 = styled.p`
  font-size: 16px;
  line-height: 120%;
  font-weight: 500;
  color: white;
`;

function HomePage() {


  return (
    <Wrapper2 style={{marginTop:"50px"}}>
      <Wrapper3>
        <div style={{width:"95px", background: "#4D77C4", borderRight:"2px solid white", paddingLeft:"1px"}}>
          <Text1>
            Nombre
          </Text1>
        </div>
        <div style={{ width: "95px", background: "#4D77C4", borderRight:"2px solid white", paddingLeft:"1px" }}>
          <Text1>
           Apellido
          </Text1>
        </div>
        <div style={{ width: "95px", background: "#4D77C4", borderRight:"2px solid white", textAlign:"center" }}>
          <Text1>
           Edad
          </Text1>
        </div>
        <div style={{ width: "95px", background: "#4D77C4", borderRight:"2px solid white", textAlign:"center" }}>
          <Text1>
           Genero
          </Text1>
        </div>
        <div style={{ width: "200px", background: "#4D77C4", borderRight:"2px solid white", paddingLeft:"1px" }}>
          <Text1>
           Email
          </Text1>
        </div>
        <div style={{ width: "120px", background: "#4D77C4", borderRight:"2px solid white", textAlign:"center" }}>
          <Text1>
           Nacionalidad
          </Text1>
        </div>
        <div style={{width:"95px", background: "#4D77C4", textAlign:"center"}}>
          <Text1>
           Foto
          </Text1>
        </div>
      </Wrapper3>

      <ColumnWithData/>
    </Wrapper2>
  )
}

export default HomePage;
