import { useState } from "react";

const Child = ({ data, change, formVisibility, setValues }) => {
  function deleteQuery(e) {
    const id = +e.target.parentElement.firstChild.innerText;
    fetch(`http://localhost:3000/programming-languages/${id}`, {
      method: "DELETE",
    }).then(() => {
      alert("Deleted");
      change(true);
    });
  }

  function updateQuery(e) {
    // console.log(e.target.parentElement.childNodes[3].innerText)
    setValues({
      id: e.target.parentElement.childNodes[0].innerText,
      name: e.target.parentElement.childNodes[1].innerText,
      releasedYear: +e.target.parentElement.childNodes[2].innerText,
      githubRank: +e.target.parentElement.childNodes[3].innerText,
      pyplRank: +e.target.parentElement.childNodes[4].innerText,
      tiobeRank: +e.target.parentElement.childNodes[5].innerText,
    });
    // console.log({
    //   name: e.target.parentElement.childNodes[1].innerText,
    //   released_year: +e.target.parentElement.childNodes[2].innerText,
    //   githut_rank: +e.target.parentElement.childNodes[3].innerText,
    //   pypl_rank: +e.target.parentElement.childNodes[4].innerText,
    //   tiobe_rank: +e.target.parentElement.childNodes[5].innerText,
    // });
    formVisibility(true);
  }
  const incomingData = data;
  const tableRows = incomingData.map((element) => {
    return (
      <tr>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.released_year}</td>
        <td>{element.githut_rank}</td>
        <td>{element.pypl_rank}</td>
        <td>{element.tiobe_rank}</td>
        <button
          onClick={updateQuery}
          className={`border-2 border-slate-900 px-4 ml-2`}
        >
          Edit
        </button>
        <button
          onClick={deleteQuery}
          className="bg-red-500 text-white px-4 ml-2"
        >
          Delete
        </button>
      </tr>
    );
  });
  return (
    <div className="w-9/12">
      <p className="text-3xl font-bold mb-8">PROGRAMMING LANGUAGES</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Released Year</th>
            <th>Github Rank</th>
            <th>Pypl Rank</th>
            <th>Tiobe Rank</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default Child;
