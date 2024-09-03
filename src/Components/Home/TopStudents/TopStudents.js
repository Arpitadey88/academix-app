import React, { useEffect, useState } from 'react';
const TopStudents = () => {
    const [students, setStudents] = useState([]);
    const [savedFlags, setSavedFlags] = useState({});
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        fetch('https://freetestapi.com/api/v1/students')
            .then(response => response.json())
            .then(data => {
                const displayedStudents = data.slice(0, 12);
                setStudents(displayedStudents);

                const initialFlags = displayedStudents.reduce((acc, student) => {
                    acc[student.id] = false; // default to false
                    return acc;
                }, {});

                const storedFlags = JSON.parse(localStorage.getItem('savedFlags')) || {};
                setSavedFlags({ ...initialFlags, ...storedFlags });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const toggleFlag = (studentId) => {
        const newSavedFlags = { ...savedFlags, [studentId]: !savedFlags[studentId] };

        setSavedFlags(newSavedFlags);
        localStorage.setItem('savedFlags', JSON.stringify(newSavedFlags));
    };

    const openModal = (student) => {
        console.log('Student selected:', student);
        setSelectedStudent(student);

        const modal = document.getElementById('my_modal_4');
        if (modal) {
            modal.showModal();
        } else {
            console.error('Modal element not found.');
        }
    };


    return (
        <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center lg:gap-y-20 gap-y-10 gap-x-14 my-16">
            {students.map(student => (
                <div key={student.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <div className='relative '>
                        
                    <span className="absolute top-2 right-4 max-w-fit rounded-full bg-white p-2 text-[#E74040] cursor-pointer">
                            {savedFlags[student.id] ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="Flag" onClick={() => toggleFlag(student.id)}>
                                <g fill="#ef0435">
                                    <path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43z"/>
                                </g>
                            </svg>
                            ) : (
                               
                                 <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="#ef0435"
                                 onClick={() => toggleFlag(student.id)}
                             >
                                 <path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43zM18 14.59a6.32 6.32 0 0 1-2.5.41 8.36 8.36 0 0 1-3.13-.79 10.34 10.34 0 0 0-3.87-.92 9.51 9.51 0 0 0-2.5.29V5.42A6.13 6.13 0 0 1 8.5 5a8.36 8.36 0 0 1 3.13.79 10.34 10.34 0 0 0 3.87.92 9.41 9.41 0 0 0 2.5-.3z"/>
                             </svg>
                            )}
                        </span>
                        <img src={student.image} alt={student.name} className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">{student.address.city}</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">{student.name}</p>                                
                            <div class="flex items-center justify-between">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">CGPA: {student.gpa}</p>
                                <div class="ml-auto flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="edit">
                                <g>
                                    <path fill='#f39202' d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4 18 6.73l-2 1.95L13.32 6z"></path>
                                </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"  width="36" height="36" fill="none" id="delete">
                                <path fill="#ef0435" d="M15 3a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1h6Z"></path>
                                <path fill="#ef0435" fill-rule="evenodd" d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Zm3.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Zm5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd"></path>
                                </svg>
                                
                                </div>
                                
                            </div>
                            <div className='text-center'>
                                <button className=" primary-btn" onClick={() => openModal(student)}>Show Details</button>
                            </div>     
                        </div>
                        
                    </div>
                </div>
            ))}

            {selectedStudent && (
                <dialog id="my_modal_4" className="modal ">
                    <div className="modal-box lg:w-full ">
                    <article className="flex bg-white transition hover:shadow-xl">
                        <div className="hidden sm:block sm:basis-56">
                            <img
                            alt={selectedStudent?.name}
                            src={selectedStudent?.image}
                            className="aspect-square h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <h3 className="font-bold text-lg">{selectedStudent.name}</h3>

                            <p className="py-2 text-sm font-medium">Email: {selectedStudent.email}</p>
                            <p className="py-2 text-sm font-medium">Phone: {selectedStudent.phone}</p>
                            <p className="py-2 text-sm font-medium">Address: {selectedStudent.address.street}, {selectedStudent.address.city}, {selectedStudent.address.country}</p>
                            <p className="font-semibold">Courses:</p>
                                <ul className="list-disc pl-5">
                                    {selectedStudent?.courses?.map((course, index) => (
                                        <li key={index}>{course}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>                       
                        <div className="modal-action">
                            <button className="btn" onClick={() => console.log('Edit student')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="edit">
                                <g>
                                    <path fill='#f39202' d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4 18 6.73l-2 1.95L13.32 6z"></path>
                                </g>
                                </svg></button>
                            <button className="btn" onClick={() => console.log('Remove student')}><svg xmlns="http://www.w3.org/2000/svg"  width="36" height="36" fill="none" id="delete">
                                <path fill="#ef0435" d="M15 3a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1h6Z"></path>
                                <path fill="#ef0435" fill-rule="evenodd" d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Zm3.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Zm5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd"></path>
                                </svg></button>
                            <button className="btn" onClick={() => document.getElementById('my_modal_4').close()}>Back</button>
                        </div>
                    </div>
                </dialog>
            )}
        </section>
    );
};
export default TopStudents;
