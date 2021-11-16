import React from "react";
import { Offcanvas } from "react-bootstrap";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
// import { useDispatch } from "react-redux";

// import { filtersByBrands, removeByBrand } from "../../redux/products/actions";

const Canvas = ({ show, handleClose, rangeChange, rangeChangeHandler }) => {
  // const animatedComponents = makeAnimated();
  // const dispatch = useDispatch();

  // const colourOptions = [
  //   { value: "apple", label: "Apple" },
  //   { value: "xiomi", label: "Xiomi" },
  // ];

  // const onChange = (value, event) => {
  //   if (event.action === "select-option") dispatch(filtersByBrands(value[value.length - 1]));
  //   if (event.action === "remove-value") dispatch(removeByBrand(value[value.length - 1]))
  // };
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>More filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <hr />
        <div className="d-flex flex-column me-3 p-3">
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="10000"
            onChange={rangeChangeHandler}
          />
          <label className="mt-2">
            Price <i className="las la-greater-than"></i> {rangeChange || 0}
          </label>
        </div>
        <hr />
        {/* <div className="p-3">
          <label className="mb-2">Filter by brands</label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti={true}
            options={colourOptions}
            onChange={onChange}
          />
        </div> */}
        <hr />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Canvas;
