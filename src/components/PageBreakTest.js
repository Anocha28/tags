import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import {chintexpure} from '../data/Chintex'



export class Cards extends React.PureComponent {
    render() {
      return (
        <div className="container">
            <div className="row">
            {chintexpure.map(t => (
                <div className="col-4 p-2 page-break" key={t.style}>
                <div className="card">
                <img src={t.image} className="card-img-top p-1" alt={t.style} />
                <div className="card-body">
                    <h5 className="card-title">{t.style}</h5>
                    <p className="card-text">{t.description}</p>
                </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      );
    }
  }

const PageBreakTest = () => {
    const componentRef = useRef();
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <Cards ref={componentRef} />
      </div>
    );
}

export default PageBreakTest
