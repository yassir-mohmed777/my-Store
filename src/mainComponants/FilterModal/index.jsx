import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import styles from './index.module.css'
import { useNavigate } from "react-router-dom";
import { useData, useFilterModal } from "../../zustand-store";
import Slider from "rc-slider";

export default function FilterModal({ setMinPrice, setMaxPrice }) {
const {closeModal} = useFilterModal()
const { Categorice } = useData();
  const navigate = useNavigate();
  const [range, setRange] = useState([0, 500]);

  const handleApply = () => {
    setMinPrice(range[0]);
    setMaxPrice(range[1]);
  };

  return (
    <div className="overLay" onClick={closeModal}>
      <div className="contant" onClick={e => e.stopPropagation()}>
      <div className="accordion col-12" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Filters
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body  gap-2">
              <div>
                <h5>فلترة السعر</h5>
                <Slider
                  range
                  min={0}
                  max={500}
                  step={50}
                  defaultValue={[0, 500]}
                  value={range}
                  onChange={(val) => setRange(val)}
                />
                <div className="d-flex justify-content-between mt-2">
                  <span>${range[1]}</span>
                  <span>${range[0]}</span>
                </div>
                <button
                  className="btn btn-dark col-12 btn-sm mt-3"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
              <div className="d-flex flex-column col-12 gap-2 mt-3">
                {Categorice &&
                  Categorice.map((el) => (
                    <div
                      key={el.id}
                      onClick={() => navigate(`/categories/${el.id}`)}
                      className="d-flex justify-content-between mb-2"
                      id={styles.Cats}
                    >
                      <span>{el.name}</span>
                      <FaAngleRight />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
