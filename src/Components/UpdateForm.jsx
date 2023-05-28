import { Formik, Form, Field, ErrorMessage } from "formik";

const UpdateForm = ({ props, values, change }) => {
  const func = props;
  const changeFunc = change;
  return (
    <div className="ml-8">
      <p className="text-3xl font-bold">Edit...</p>
      <Formik
        initialValues={values}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.releasedYear) {
            errors.releasedYear = "Required";
          }
          if (!values.githubRank) {
            errors.githubRank = "Required";
          }
          if (!values.pyplRank) {
            errors.pyplRank = "Required";
          }
          if (!values.tiobeRank) {
            errors.tiobeRank = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const id = +values.id;
          fetch(`http://localhost:3000/programming-languages/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: values.name,
              releasedYear: values.releasedYear,
              githubRank: values.githubRank,
              pyplRank: values.pyplRank,
              tiobeRank: values.tiobeRank,
            }),
          }).then(() => {
            alert("Data has been updated");
          });
          setSubmitting(false);
          changeFunc(true);
          values.name = "";
          values.releasedYear = "";
          values.githubRank = "";
          values.pyplRank = "";
          values.tiobeRank = "";
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 border-l-4 border-slate-500 p-4">
            <label htmlFor="name">Name</label>
            <Field
              className="border-solid border-2 border-slate-500"
              type="text"
              name="name"
            />
            <ErrorMessage
              className="text-red-600"
              name="name"
              component="div"
            />
            <label htmlFor="releasedYear">Released Year</label>
            <Field
              className="border-solid border-2 border-slate-500"
              type="number"
              name="releasedYear"
            />
            <ErrorMessage
              className="text-red-600"
              name="releasedYear"
              component="div"
            />
            <label htmlFor="githubRank">Github Rank</label>
            <Field
              className="border-solid border-2 border-slate-500"
              type="number"
              name="githubRank"
            />
            <ErrorMessage
              className="text-red-600"
              name="githubRank"
              component="div"
            />
            <label htmlFor="pyplRank">Pypl Rank</label>
            <Field
              className="border-solid border-2 border-slate-500"
              type="number"
              name="pyplRank"
            />
            <ErrorMessage
              className="text-red-600"
              name="pyplRank"
              component="div"
            />
            <label htmlFor="tiobeRank">Tiobe Rank</label>
            <Field
              className="border-solid border-2 border-slate-500"
              type="number"
              name="tiobeRank"
            />
            <ErrorMessage
              className="text-red-600"
              name="tiobeRank"
              component="div"
            />
            <button
              className="border-solid border-2 border-slate-500 bg-slate-700 text-white border-none	p-2"
              type="submit"
              disabled={isSubmitting}
            >
              Update
            </button>
            <button
              onClick={() =>
                func((pre) => {
                  pre = !pre;
                })
              }
              className={`border-2 border-slate-900 p-2`}
            >
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateForm;
