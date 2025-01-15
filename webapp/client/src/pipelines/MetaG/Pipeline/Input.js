import React, { useState } from 'react';
import {
    Card, CardBody, Collapse,
} from 'reactstrap';

import { FastqInput } from '../../Common/Forms/FastqInput';
import { Header } from '../../Common/Forms/CardHeader';
import { MyTooltip } from '../../../common/MyTooltip';
import { workflowInputTips } from './Defaults';

export function Input(props) {
    const [collapseParms, setCollapseParms] = useState(false);

    const toggleParms = () => {
        setCollapseParms(!collapseParms);
    }

    return (
        <Card className="workflow-card">
            <Header toggle={true} toggleParms={toggleParms} title={'Input'} collapseParms={collapseParms} />
            <Collapse isOpen={!collapseParms} id={"collapseParameters-" + props.name} >
                <CardBody>
                    <MyTooltip id='Metagenome-input' text="Input Raw Reads" tooltip={workflowInputTips['Input']['fastq_tip']} showTooltip={true} place="right" />
                    <FastqInput name={props.name} full_name={props.full_name} setParams={props.setParams} collapseParms={true} 
                    dataSources={['upload', 'project', 'public', 'globus']} projectTypes={['Retrieve SRA Data']} platformOptions={true} />
                </CardBody>
            </Collapse>
        </Card>
    );
}
