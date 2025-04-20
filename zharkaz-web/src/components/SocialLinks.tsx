const SocialLinks = () => {
    return (
      <div className="flex space-x-4 mt-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/zharkaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1c-1 0-1.5.5-1.5 1.5v1.5h3l-.5 3h-2.5v7A10 10 0 0022 12z" />
          </svg>
        </a>
  
        {/* Instagram */}
        <a
          href="https://www.instagram.com/zharkaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25z"/>
          </svg>
        </a>  
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/zharkaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-700 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.5S3.88 7.5 4.98 7.5 7 6.62 7 5.5 6.12 3.5 4.98 3.5zM3.5 8.98H6.5v12H3.5v-12zM9.5 8.98H12v1.6h.04c.34-.64 1.17-1.3 2.41-1.3 2.58 0 3.05 1.7 3.05 3.92v7.78h-3v-6.9c0-1.64-.03-3.75-2.3-3.75-2.3 0-2.65 1.8-2.65 3.65v7h-3v-12z" />
          </svg>
        </a>
      </div>
    );
  };
  
  export default SocialLinks;  