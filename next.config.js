/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  // nextConfig,
  images:{
    unoptimized: true
  },
  trailingSlash: true,
  exportPathMap: function (){
    return{
      '/' : { page: '/'}
    };
  }
};
