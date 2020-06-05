#!/usr/bin/env bash

# Interprets the CSVs as UTF-8 and converts to ods

libreoffice --headless --infilter=CSV:44,34,76,1 --convert-to ods --outdir ./external-jobs/2020-06-malteser/sent ./external-jobs/2020-06-malteser/sent/*.csv
rm ./external-jobs/2020-06-malteser/sent/*.csv
