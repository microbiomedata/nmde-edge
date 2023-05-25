task cal_scores{
	String project_name
	String name_of_feat
	File fc_file
	String DOCKER 
	meta {
		description: "Calculate RPKMs"
	}


	command {
		Rscript edgeR.R -r ${fc_file} -n ${name_of_feat} -o ${name_of_feat}_sc.tsv -s ${project_name}
	}

	output {
		File sc_tbl = "${name_of_feat}_sc.tsv"
	}

	runtime {
		docker: DOCKER
	}
}
