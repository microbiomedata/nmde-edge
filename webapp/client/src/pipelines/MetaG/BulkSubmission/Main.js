import React from 'react';
import BulkSubmission from '../../BulkSubmission/Forms/BulkSubmission';
import { workflowOptions } from './Defaults';

function Main(props) {
    return (
      <BulkSubmission workflowOptions={workflowOptions} category={"Metagenomics"} {...props}/>
    );
}

export default Main;