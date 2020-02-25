import React from "react";
import PropTypes from "prop-types";

const CreateBtn = ({ onClick }) => (
  <button
    className="btn btn-primary btn-block d-flex justify-content-center align-items-center"
    onClick={e => {
      onClick();
    }}
  >
    <ion-icon
      class="rounded-circle mr-2"
      style={{ backgroundColor: "#007bff", color: "#fff", fontSize: "30px" }}
      icon="add-circle"
    />
    New Entry
  </button>
);

CreateBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default CreateBtn;
