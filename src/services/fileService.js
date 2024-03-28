const path = require('path');

const uploadSingleFile = async (fileObject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

    // save => public/images/upload
    //remember to create the upload folder first
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    // console.log(">>> check fileObject: ", path.resolve(__dirname, "../public/images/upload"))

    // abc.png => abc-timestamp.png

    //get image extension
    let extName = path.extname(fileObject.name);

    //get image's name (without extension)
    let baseName = path.basename(fileObject.name, extName);

    //create final path: eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}${extName}`
    let finalPath = `${uploadPath}/${finalName}`;

    // console.log("final path: ", finalPath)

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
            error: null
        }
    } catch (err) {
        console.log(">>> check error: ", err)
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}

// const uploadSingleFile = async (fileObject) => {
//     for (let i = 0; i < fileObject.length; i++) {
//         await fileObject[i].mv(__dirname + "/../public/image/upload/" + fileObject[i].name)

//     }
// }
// const uploadSingleFile = async (fileObject) => {
//     let uploadedFiles = []
//     // images is a field name
//     if (fileObject.length > 1) {
//         for (let i = 0; i < fileObject.length; i++) {
//             const uploadPath = path.join(__dirname, '..', '/public/images/upload/', fileObject[i].name)
//             const fileName = path.join(__dirname, '..', '/public/images/upload/', fileObject[i].name)
//             uploadedFiles.push(fileName)
//             await fileObject[i].mv(uploadPath)
//         }
//     } else {
//         // for single image
//         const uploadPath = path.join(__dirname, '..', '/public/images/upload/', fileObject.name)
//         const fileName = path.join(__dirname, '..', '/public/images/upload/', fileObject.name)
//         uploadedFiles.push(fileName)
//         fileObject.mv(uploadPath)
//     }
// }

const uploadMultipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");

        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            console.log("check i = ", i)
            //get image extension
            let extName = path.extname(filesArr[i].name);

            //get image's name (without extension)
            let baseName = path.basename(filesArr[i].name, extName);

            //create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArr
        }

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}