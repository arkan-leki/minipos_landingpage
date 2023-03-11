import React, { useState } from 'react'

export const Hero = () => {
  const [progress, setProgress] = useState(0);


  const downloadFile = () => {
    const url = 'https://uc7be2445048c30058950ab418f0.dl.dropboxusercontent.com/cd/0/get/B4DZw73ofQAK-W40dEnnB51EbcxRA_O5yK-fEhcbdyOjSrBktgrJYC0hK-02LNEwe3lvUrPwEa-kuWPXBfh5hHNKcLDU101b0qIW523aD6EAxNyfL1XZ5wQlnoV9EwK9zeYl0WV-h7oRJ4pSXVuLbZ-UDMKnSCyl0-STAES4zMgrwMr1RlBLttSm6X1BA-fFvrQ/file?_download_id=7110466587337152810952099916811697547608620760736728441240809073&_notify_domain=www.dropbox.com&dl=1';
    const filename = 'minipos.apk';

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onprogress = (event) => {
      const { loaded, total } = event;
      const progress = Math.floor((loaded / total) * 100);
      console.log(`Download progress: ${progress}%`);
      setProgress(progress);
    };


    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        setProgress(0);
      }
    };

    xhr.send();

  };


  return (
    <>
      {progress !== 0 && <div className='w-full text-white text-lg text-center bg-white' style={{height: 5, marginTop: 10 }}>
        <div style={{ backgroundColor: '#0066cc', height: 5, width: `${progress}%` }}></div>
        <p>{progress}</p>
      </div>}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">
                باشتین ئەپلیکەشن بۆ کارەکەت لێرەیە
              </h2>
              <p className="text-lg mb-8">
                گونجاوترین ئەپلیکەشین بۆ بزنسە بچووکەکان
                پێکدێت لە بەشەکانی فرۆش و کرین   و پسولەکان و ئاماری رۆژانەو مانگانە
              </p>
              <button className="bg-white text-indigo-600 py-2 px-6 rounded-full font-bold hover:bg-indigo-100 transition-colors duration-300"
                onClick={downloadFile}>
                ئیستا دایبگرە
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <img
                className="mx-auto"
                src="/handheld.png"
                alt="Mobile App"
              />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
