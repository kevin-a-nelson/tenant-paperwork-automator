import React from 'react';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import MyDoc from './Components/Document/Document';

// Create Document Component
const App = () => (
    <div>
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
  </div>
);

export default App;
