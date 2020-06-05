#!/usr/bin/env bash

# Interprets the CSVs as UTF-8 and converts to ods
function to_ods {
  libreoffice --headless --infilter=CSV:44,34,76,1 --convert-to ods --outdir $1 $1/*.csv
  rm $1/*.csv
}

to_ods ./external-jobs/2020-06-malteser/sent/native-locales
to_ods ./external-jobs/2020-06-malteser/sent
