import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Document, Page, pdfjs  } from 'react-pdf';
import '../../../styling/file_manager.css';
import file from './GCSE_Higher_Homeworks.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function FileManager({ file_ }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  console.log("file", file);
  return (
      <div id="#file-manager-container">
    <div id="#file-handler">
      <Document 
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page height={600} style={{height: "40vh"}} pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
    <div id="file-manager-controller">
        <button onClick={()=>dispatch({type:"TOGGLE_COVER", to:0})}>Close</button>
        <button onClick={()=>setPageNumber((pageNumber+1))}>Next</button>
        <button onClick={()=>setPageNumber((pageNumber-1))}>Back</button>
    </div>
    </div>
  );
}