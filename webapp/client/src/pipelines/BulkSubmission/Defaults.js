
export const templates = {
    'Metagenome Pipeline': "/docs/bulk-submissions/NMDC-EDGE-Metagenomics-pipeline-bulk-submission.xlsx"
}

export const workflowOptions = [
    { value: 'Metagenome Pipeline', label: 'Metagenomics: Multiple Workflows' },
    { value: 'ReadsQC', label: 'Metagenomics: ReadsQC' },
    { value: 'ReadbasedAnalysis', label: 'Metagenomics: Read-based Taxonomy Classification' },
    { value: 'MetaAssembly', label: 'Metagenomics: Metagenome Assembly' },
    { value: 'MetaAnnotation', label: 'Metagenomics: Metagenome Annotation' },
    { value: 'Metatranscriptome', label: 'Metatranscriptomics' },
    { value: 'Metaproteomics', label: 'Metaproteomics' },
    { value: 'EnviroMS', label: 'Natural Organic Matter' },
    { value: 'virus_plasmid', label: 'Viruses and Plasmids' },
];