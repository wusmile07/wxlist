import drawQrcode from '../../utils/weapp.qrcode.esm.js'
Page({
    sh(){
        drawQrcode({
            width: 200,
            height: 200,
            canvasId: 'myQrcode',
            text: 'https://github.com/yingye',
        })
    }
})



