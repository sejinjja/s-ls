/**
 * MIT License
 * Copyright (c) 2023 sejiwork
 * Permission is hereby granted ... LICENSE.txt
 * */
const fs = require('fs')

fs.readdir('.', (err, files) => {
    if (err) throw err
    for(const file of files) {
        console.log(file)
    }
})
