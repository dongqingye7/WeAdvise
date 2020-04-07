import React, { Component }from 'react';
import pdf from "./courseaddswap.pdf";
import Button from 'react-bootstrap/Button'
import { Document, pdfjs, Page } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




class AddSwapForm extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
      }
    
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    
      render() {
        const { pageNumber, numPages } = this.state;
    
        return (
          <div className="row">
            <div className="col-4 pt-4">
              <a href={pdf} download>
              <Button variant="outline-primary" >
                  Download
              </Button>                  
              </a>
            </div>
            <div className="col-3">
            <Document
              file={pdf}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          <div>
          </div>
        </div>  
          </div>

        );
      }
}
 
export default AddSwapForm;
