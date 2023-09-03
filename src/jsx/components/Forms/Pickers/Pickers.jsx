import { useState, Fragment } from "react";

import Gradient from "./LinearGradientPicker";
import PageTitle from "../../../layouts/PageTitle";

const Pickers = () => {
  const [colorChange, setColorChange] = useState(null);

  return (
    <Fragment>
      <PageTitle activeMenu="Pickers" motherMenu="Form" pageContent="Pickers" />

      <div className="row">

        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Color Picker</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-xl-4 col-lg-6 mb-3">
                  <div className="example">
                    <p className="mb-1">Default Clock Picker</p>
                    <input
                      type="color"
                      className="as_colorpicker form-control"
                      value={colorChange}
                      onChange={(e) => setColorChange(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-xl-4 col-lg-6 mb-3">
                  <div className="color-gradian-tixia">
                    <p className="mb-1">Gradiant mode</p>
                    <Gradient />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pickers;
