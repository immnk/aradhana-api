# aradhana-api

[![Build Status](https://travis-ci.org/immnk/aradhana-api.svg?branch=master)](https://travis-ci.org/immnk/aradhana-api)

serviceAccount.json is not committed to repo. Download it from firebase console.

Deploy Instructions:
firebase deploy --only functions

# This generates a token, e.g. "1/AD7sdasdasdKJA824OvEFc1c89Xz2ilBlaBlaBla"
`firebase login:ci`
# Encrypt this token
`travis encrypt "1/AD7sdasdasdKJA824OvEFc1c89Xz2ilBlaBlaBla" --add`
# This command may generate a warning ("If you tried to pass the name of the repository as the first argument, you probably won't get the results you wanted"). You can ignore it.
