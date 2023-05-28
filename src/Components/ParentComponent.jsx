import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import Form from "./Form";
import UpdateForm from "./UpdateForm";

const Parent = () => {
  const [changeData, setChange] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [formsValues, setFormsValues] = useState({});
  const [showForm, setForm] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function fetchingData(param = 1) {
    try {
      fetch(`http://localhost:3000/programming-languages`)
        .then((res) => res.json())
        .then((incoming) => {
          const x = incoming.data;
          setData([...x]);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchingData();
    setChange(false);
    setUpdated(false);
  }, [changeData, updated]);
  return (
    <div>
      <div className="w-full flex p-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ChildComponent
            data={data}
            change={setChange}
            formVisibility={setForm}
            setValues={setFormsValues}
          />
        )}
        {showForm ? (
          ""
        ) : (
          <div>
            <Form props={setChange} />
          </div>
        )}
        {showForm ? (
          <div>
            <UpdateForm props={setForm} values={formsValues} change={setUpdated} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Parent;
