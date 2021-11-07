import React, { useState, useRef } from 'react';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';


function QrCodes() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const qrRef = useRef(null);

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    }
    catch (err) { console.log(err); }
  }
  const handleErrorFile = (err) => { console.log(err); }
  const handleScanFile = (result) => {
    if (result) { setScanResultFile(result); }
  }
  const onScanFile = () => { qrRef.current.openImageDialog(); }
  const handleErrorWebCam = (error) => { console.log(error); }
  const handleScanWebCam = (result) => {
    if (result) { setScanResultWebCam(result); }
  }

  return (
    <div>
      <h2>Generate Download & Scan QR Code</h2>
      <div>
        <div container spacing={2}>
          <div item xl={4} lg={4} md={6} sm={12} xs={12}>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button variant="contained"
              color="primary" onClick={() => generateQrCode()}>Generate</button>
            <br />
            <br />
            <br />
            {imageUrl ? (
              <a href={imageUrl} download>
                <img src={imageUrl} alt="img" />
              </a>) : null}
          </div>

          <div item xl={4} lg={4} md={6} sm={12} xs={12}>
            <button variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</button>
            <QrReader
              ref={qrRef}
              delay={300}
              style={{ width: '100%' }}
              onError={handleErrorFile}
              onScan={handleScanFile}
              legacyMode
            />
            <h3>Scanned Code: {scanResultFile}</h3>
          </div>
          <div item xl={4} lg={4} md={6} sm={12} xs={12}>
            <h3>Qr Code Scan by Web Cam</h3>
            <QrReader
              delay={300}
              style={{ width: '100%' }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
            <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}


export default QrCodes;
