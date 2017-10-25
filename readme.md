# doin

doin is a utility tool to help you execute simple shell commands after a specific timeout.

## install

`npm i -g doin`

## usage

`doin <timeout> <command>`

The format of timout is (\d+[hHmMsS])+.

`command` can be a single word, quote or multiple words, whil will be interpreted as the whole commmand.


## examples

`doin 2m30s echo Reminder: my tea is ready`

`doin 8h say 'Enough of work. Go home.'`

`doin 1H2M3S 'echo foo > bar.txt'`