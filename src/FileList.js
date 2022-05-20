import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function FileList(props) {
  const [files, getFiles] = useState(props.state);
  const nav = useNavigate();
  const deleteHandler = async (id) => {
    const response = await axios({
      method: "DELETE",
      url: `http://localhost:3001/delete/${id}`,
      headers: { token: localStorage.getItem("token") },
    });
    alert(response.data.message);
    window.location.reload();
  };

  const shareUrlHandler = async (id) => {
    //nav(`http://localhost:3000/abc/${id}`);
    //alert(url);
  };

  return (
    <div>
      {files.map((file) => (
        <div className="card mt-4 col-sm-6" style={{ width: "30rem" }}>
          <h5 className="card-header">{file.title}</h5>
          <div className="card-body">
            <h5 className="card-title">{file.name}</h5>
            <p className="card-text">{file.desc}</p>
            <i
              className="bi bi-trash mx-3"
              value={file._id}
              onClick={() => deleteHandler(file._id)}
            ></i>
            <Link to={`/abc/${file._id}`}>
              <i className="bi bi-share mx-3"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FileList;
