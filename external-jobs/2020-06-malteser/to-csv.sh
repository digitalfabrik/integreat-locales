#!/usr/bin/env bash

# Interprets the CSVs as UTF-8 and converts to ods

libreoffice --headless --infilter=CSV:44,34,76,1  --convert-to csv --outdir ./external-jobs/2020-06-malteser/received ./external-jobs/2020-06-malteser/received/*.ods
rm ./external-jobs/2020-06-malteser/received/*.ods
