import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
// import "react-dropzone-uploader/dist/styles.css";
function App() {
  const [selected, setselected] = useState([]);
  const [uploaded, setuploaded] = useState([]);
  const [blob, setblob] = useState([]);
  var { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const imgref = useRef(null);

  const upload = () => {
    acceptedFiles.width = imgref.current?.clientWidth;
    acceptedFiles.height = imgref.current?.clientHeight;
    console.log(acceptedFiles);
    setuploaded([...uploaded, ...acceptedFiles]);
    setblob(uploaded);
    acceptedFiles.splice(0);
    console.log(imgref?.current);
    console.log(blob);
  };
  return (
    <div className="App" style={{ width: "70%", margin: "0 auto" }}>
      <div className="top" style={{ marginTop: 30 }}>
        <div
          style={{
            width: "100%",
            borderRadius: 10,
            padding: 10,
            border: "2px dashed #ccc",
            height: "100px",
            margin: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            overflow: "auto",
          }}
          {...getRootProps({ className: "dropzone" })}
        >
          <input {...getInputProps()} accept="image/*" />
          <button
            style={{
              padding: "10px 15px",
              borderRadius: "10px",
              background: "#999",
              fontSize: "16px",
              cursor: "pointer",

              color: "#fff",
              border: "none",
            }}
          >
            Click To Upload Images
          </button>
        </div>
      </div>
      <h2 style={{ textAlign: "left" }}>Selected Images</h2>
      <div
        className="selectedimages"
        style={{
          width: "100%",
          borderRadius: 10,
          padding: 10,
          border: "2px dashed #ccc",
          height: "100px",
          margin: "20px 0",
          display: "flex",
          overflow: "auto",
        }}
      >
        {acceptedFiles.map((item) => {
          console.log(item);
          return (
            <img
              src={URL.createObjectURL(item)}
              alt=""
              style={{
                width: "100px",
                height: "90px",
                objectFit: "cover",
                margin: 5,
              }}
            />
          );
        })}
      </div>
      <button
        type="button"
        style={{
          padding: "10px 15px",
          borderRadius: "10px",
          background: "#999",
          fontSize: "16px",
          cursor: "pointer",
          color: "#fff",
          border: "none",
        }}
        onClick={() => {
          upload();
        }}
      >
        Upload
      </button>
      <div
        className="uploadedimages"
        style={{
          width: "100%",
          borderRadius: 10,
          padding: " 10px 0px",
          border: "2px dashed #ccc",
          margin: "20px 0",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <p
            style={{
              width: "50%",
              textAlign: "center",
              margin: 0,
              fontSize: "20px",
              fontWeight: 600,
              paddingBottom: "10px",
            }}
          >
            Images
          </p>
          <p
            style={{
              width: "50%",
              textAlign: "center",
              margin: 0,
              fontSize: "20px",
              fontWeight: 600,
              borderLeft: "1px solid #000",
              paddingBottom: "10px",
            }}
          >
            Description
          </p>
        </div>

        {uploaded.map((item) => (
          <div
            className="item"
            style={{
              display: "flex",
              width: "100%",
              borderTop: "1px solid #000",
            }}
          >
            <div
              style={{
                width: "50%",
                padding: "20px",
              }}
            >
              <img
                src={URL.createObjectURL(item)}
                alt=""
                id="img"
                ref={imgref}
                style={{
                  width: "50%",

                  objectFit: "cover",
                  margin: 5,
                  // padding: "10px",
                }}
              />
            </div>
            <div
              className="deccription"
              style={{
                width: "50%",
                padding: "20px",

                borderLeft: "1px solid #000",
              }}
            >
              <ul
                style={{
                  width: "100%",
                  margin: 0,
                  padding: "0px 0px 0px 10px",
                }}
              >
                <li style={{ textAlign: "left" }}>
                  Name : <span>{item.name}</span>{" "}
                </li>
                <li style={{ textAlign: "left" }}>
                  Width: <span>{Math.round(item?.width)}px</span>
                </li>
                <li style={{ textAlign: "left" }}>
                  Height: <span>{Math.round(item?.height)}px</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
