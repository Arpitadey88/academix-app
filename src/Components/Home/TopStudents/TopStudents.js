import React from 'react';

const TopStudents = () => {
    return (
        <section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center lg:gap-y-20 gap-y-10 gap-x-14 mt-10 mb-5">
    
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#" className='relative '>
            <span class=" absolute top-2 right-4 max-w-fit rounded-full bg-white p-2 text-[#E74040]">
            <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24"  viewBox="0 0 24 24" id="Flag">
            <g fill="#ef0435" class="color000000 svgShape">
                <path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43zM18 14.59a6.32 6.32 0 0 1-2.5.41 8.36 8.36 0 0 1-3.13-.79 10.34 10.34 0 0 0-3.87-.92 9.51 9.51 0 0 0-2.5.29V5.42A6.13 6.13 0 0 1 8.5 5a8.36 8.36 0 0 1 3.13.79 10.34 10.34 0 0 0 3.87.92 9.41 9.41 0 0 0 2.5-.3z" fill="#ef0435" class="color000000 svgShape"></path>
            </g>
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" id="Flag">
            <g fill="#ef0435" class="color000000 svgShape">
                <g fill="#ef0435" class="color000000 svgShape">
                <polyline points="24 24 0 24 0 0" opacity="0" fill="#ef0435" class="color000000 svgShape"></polyline>
                <path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43z" fill="#ef0435" class="color000000 svgShape"></path>
                </g>
            </g>
            </svg> */}
            </span>
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <div class="ml-auto flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="edit">
                    <g>
                        <path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4 18 6.73l-2 1.95L13.32 6z"></path>
                    </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" id="delete">
                    <path fill="#000" d="M15 3a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1h6Z"></path>
                    <path fill="#000" fill-rule="evenodd" d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Zm3.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Zm5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd"></path>
                    </svg>
                    
                    </div>
                </div>
            </div>
        </a>
    </div>

</section>
    );
};

export default TopStudents;