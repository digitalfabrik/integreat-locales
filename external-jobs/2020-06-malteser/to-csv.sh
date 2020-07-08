#!/usr/bin/env bash

function to_csv {
  libreoffice --headless --infilter=CSV:44,34,76,1  --convert-to csv --outdir $1 $1/*.ods
  rm $1/*.ods
}

to_csv ./external-jobs/2020-06-malteser/sent/native
to_csv ./external-jobs/2020-06-malteser/sent/malte-overrides
to_csv ./external-jobs/2020-06-malteser/received
