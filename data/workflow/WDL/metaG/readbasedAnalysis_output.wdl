workflow readbasedAnalysis_output {
    File gottcha2_report_tsv
    File gottcha2_full_tsv
    File gottcha2_krona_html
    File centrifuge_report_tsv
    File centrifuge_classification_tsv
    File centrifuge_krona_html
    File kraken2_report_tsv
    File kraken2_classification_tsv
    File kraken2_krona_html
    String? docker = "poeli/nmdc_taxa_profilers:1.0.3p2"
    String PREFIX

    call generateSummaryJson {
        input: gottcha2_report_tsv = gottcha2_report_tsv,
               gottcha2_full_tsv = gottcha2_full_tsv,
               gottcha2_krona_html = gottcha2_krona_html,
               centrifuge_classification_tsv = centrifuge_classification_tsv,
               centrifuge_report_tsv = centrifuge_report_tsv,
               centrifuge_krona_html = centrifuge_krona_html,
               kraken2_classification_tsv = kraken2_classification_tsv,
               kraken2_report_tsv = kraken2_report_tsv,
               kraken2_krona_html = kraken2_krona_html,
               PREFIX = PREFIX,
               DOCKER = docker
        }
        output {

                File? summary_json = generateSummaryJson.summary_json
            }

}
task generateSummaryJson {
    File? gottcha2_report_tsv
    File? gottcha2_full_tsv
    File? gottcha2_krona_html
    File? centrifuge_classification_tsv
    File? centrifuge_report_tsv
    File? centrifuge_krona_html
    File? kraken2_classification_tsv
    File? kraken2_report_tsv
    File? kraken2_krona_html
    Map[String, String] gottcha_results = {
            "tool": "gottcha2",
            "orig_out_tsv": "${gottcha2_full_tsv}",
            "orig_rep_tsv": "${gottcha2_report_tsv}",
            "krona_html": "${gottcha2_krona_html}"
    }
    Map[String, String] centrifuge_results = {
            "tool": "centrifuge",
            "orig_out_tsv": "${centrifuge_classification_tsv}",
            "orig_rep_tsv": "${centrifuge_report_tsv}",
            "krona_html": "${centrifuge_krona_html}"
    }
    Map[String, String] kraken2_results = {
            "tool": "kraken2",
            "orig_out_tsv": "${kraken2_classification_tsv}",
            "orig_rep_tsv": "${kraken2_report_tsv}",
            "krona_html": "${kraken2_krona_html}"
    }
    Array[Map[String, String]?] TSV_META_JSON = [gottcha_results,centrifuge_results,kraken2_results]
    String PREFIX
    String OUT = PREFIX + ".json"
    String DOCKER

    command {
        outputTsv2json.py --meta ${write_json(TSV_META_JSON)} > ${OUT}
    }
    output {
        File summary_json = "${OUT}"
    }
    runtime {
        docker: DOCKER
        node: 1
        nwpn: 1
        memory: "45G"
        time: "04:00:00"
    }
    meta {
        author: "Po-E Li, B10, LANL"
        email: "po-e@lanl.gov"
    }
}