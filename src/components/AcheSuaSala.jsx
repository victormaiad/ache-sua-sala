import React, { useState } from "react";
import Select from "react-select";

const options = [
  {
    value: "Sistemas",
    label: "Sistemas de Informação",
    turma: "123",
    sala: "300",
    horas: "20 horas"
  },
  {
    value: "Ciência",
    label: "Ciência da Computação",
    turma: "456",
    sala: "200",
    horas: "30 horas"
  },
  {
    value: "Engenharia",
    label: "Engenharia de Softaware",
    turma: "789",
    sala: "100",
    horas: "40 horas"
  }
];

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <Select 
        styles= {{
          control: (base) => ({
            ...base,
            width: 450,
            height: 50
          }),

          menu: (base) => ({
            ...base,
            width: 450,
          }),
        }}

        options={options}
        label={selectedCourse}
        onChange={(selectedOption) => setSelectedCourse(selectedOption)}
      />
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {selectedCourse && (
        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", fontWeight: "bold", padding: "5px", fontSize: "25px"}}><b>Disciplina</b></th>
              <th style={{ border: "1px solid black", fontWeight: "bold", padding: "5px", fontSize: "25px"}}><b>Turma</b></th>
              <th style={{ border: "1px solid black", fontWeight: "bold", padding: "5px", fontSize: "25px" }}><b>Sala</b></th>
              <th style={{ border: "1px solid black", fontWeight: "bold", padding: "5px", fontSize: "25px" }}><b>Sala</b></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "5px", fontSize: "18px"}}>{selectedCourse.label}</td>
              <td style={{ border: "1px solid black", padding: "5px", fontSize: "18px"}}>{selectedCourse.turma}</td>
              <td style={{ border: "1px solid black", padding: "5px", fontSize: "18px"}}>{selectedCourse.sala}</td>
              <td style={{ border: "1px solid black", padding: "5px", fontSize: "18px"}}>{selectedCourse.horas}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

