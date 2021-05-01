import "./LeadAddPage.css";
import "../Table.css";

import { useState } from "react";
import Outline from "../components/Outline";
import Header from "../components/Header";
import FormSection from "../components/FormSection";
import CustomButton from "../components/CustomButton";

function LeadAddPage() {
  const [formState, setFormState] = useState({
    leadName: "",
    leadPhone: "",
    leadEmail: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    const newFormState = { ...formState };
    newFormState[event.target.id] = event.target.value;

    setFormState(newFormState);
  };
  const handleChange2 = (event) => {
    console.log(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formState);
  };

  return (
    <div className="center">
      <Outline>
        <Header>Novo lead</Header>
        <form className="add-lead-form" onSubmit={handleSubmit}>
          <div>
            <FormSection
              id="leadName"
              type="text"
              maxWidth="400px"
              valueOfState={formState.leadName}
              handleChange={handleChange}
            >
              Nome *
            </FormSection>
            <FormSection
              id="leadPhone"
              type="tel"
              maxWidth="400px"
              valueOfState={formState.leadPhone}
              handleChange={handleChange}
            >
              Telefone *
            </FormSection>
            <FormSection
              id="leadEmail"
              type="email"
              maxWidth="400px"
              valueOfState={formState.leadEmail}
              handleChange={handleChange}
            >
              Email *
            </FormSection>
          </div>
          <div style={{ marginTop: "50px" }}>
            <div className="tab">
              <div className="row tab-header">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="allMarked"
                    onChange={handleChange2}
                  ></input>
                </div>
                <div className="el long"></div>
              </div>
              <div className="row gray-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="rpaCheckbox"
                    onChange={handleChange2}
                  ></input>
                </div>
                <div className="el long">RPA</div>
              </div>
              <div className="row white-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="digProdCheckbox"
                    onChange={handleChange2}
                  ></input>
                </div>
                <div className="el long">Produto Digital</div>
              </div>
              <div className="row gray-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="analyticsCheckbox"
                    onChange={handleChange2}
                  ></input>
                </div>
                <div className="el long">Analytics</div>
              </div>
              <div className="row white-row">
                <div className="el small">
                  <input
                    type="checkbox"
                    id="bpmCheckbox"
                    onChange={handleChange2}
                  ></input>
                </div>
                <div className="el long">BPM</div>
              </div>
              <div className="row gray-row">
                <div className="el small">
                  <div style={{ color: "#e6e6e6" }}>.</div>
                </div>
                <div className="el long"></div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <CustomButton
                type="submit"
                color="#2196f3"
                textColor="white"
                border="none"
                value="Salvar"
              />
            </div>
          </div>
        </form>
      </Outline>
    </div>
  );
}

export default LeadAddPage;
