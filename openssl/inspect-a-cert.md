# Inspect A Cert

You have a cert and want to inspect it, is it out of date, who's email is it associated with, etc?

`openssl x509 -in $pathToCert -text -noout`

`x509` we are only interested in the certificate part of the .p12/.pem archive, so we specify this

`-in` the cert we want to look at

`-text` print the details of the cert, e.g. 'Issuer', 'Validity', etc

`-noout` only print what was asked for, nothing extra, e.g. with this option specified the certificate is not printed, if omitted the x509 cert will also be printed to output.