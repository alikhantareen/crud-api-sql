import { Formik, Form, Field, ErrorMessage } from "formik";

const FormComponent = ({ props }) => {
  const func = props;
  return (
    <div className="ml-8">
      <p className="text-3xl font-bold">ADD NEW LANGUAGE</p>
      <Formik
        initialValues={{
          name: "",
          releasedYear: "",
          githubRank: "",
          pyplRank: "",
          tiobeRank: "",
        }}
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
          // alert(JSON.stringify(values, null, 2));
          fetch("http://localhost:3000/programming-languages", {
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify({
              values,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            // Converting to JSON
            .then((response) => response.json())

            // Displaying results to console
            .then((json) => console.log(JSON.stringify(json.message.message)));
          func(true);
          setSubmitting(false);
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
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
