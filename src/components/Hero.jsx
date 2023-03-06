import React from 'react'

export const Hero = () => {
  const downloadFile = () => {
    const url = '/app-release.apk';
    const filename = 'minipos.apk';
    fetch(url).then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
      });
    });
  };

  return (
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
              src="/hero.png"
              alt="Mobile App"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
