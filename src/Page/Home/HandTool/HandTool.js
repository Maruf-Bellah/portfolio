import React from 'react';
import one from './img/one.png';
import two from './img/two.png';
import four from './img/four.png';
import five from './img/five.png';


const HandTool = () => {
     return (
          <div className='lg:px-12 lg:py-24 '>
               <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 ">
                    <div className='lg:mt-10 p-5'>
                         <div class="carousel w-6/6 border  shadow-xl ">
                              <div id="slide1" class="carousel-item h-96	relative w-full">
                                   <img src={one} class="w-full " alt='' />
                                   <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" class="btn btn-circle">❮</a>
                                        <a href="#slide2" class="btn btn-circle">❯</a>
                                   </div>
                              </div>
                              <div id="slide2" class="carousel-item relative w-full">
                                   <img src={two} class="w-full" alt='' />
                                   <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" class="btn btn-circle">❮</a>
                                        <a href="#slide3" class="btn btn-circle">❯</a>
                                   </div>
                              </div>
                              <div id="slide3" class="carousel-item relative w-full">
                                   <img src={four} class="w-full" alt='' />
                                   <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" class="btn btn-circle">❮</a>
                                        <a href="#slide4" class="btn btn-circle">❯</a>
                                   </div>
                              </div>
                              <div id="slide4" class="carousel-item relative w-full">
                                   <img src={five} class="w-full" alt='' />
                                   <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" class="btn btn-circle">❮</a>
                                        <a href="#slide1" class="btn btn-circle">❯</a>
                                   </div>
                              </div>


                         </div>
                         <div className='text-center'>

                              <span>
                                   <a href="https://last-assainment.web.app/" target='_blank'>
                                        <button className='mt-10 btn-outline  btn btn-secondary w-60'>Go live site </button>
                                   </a>
                              </span>
                         </div>
                    </div>

                    <div className='justify-center lg:font-medium p-5'>

                         <h1 className='text-2xl lg:font-bold'><span className='text-primary'>HAND TOOLS ___</span>Where you can do small chores in your house</h1>


                         <h1 className='text-primary text-xl lg:font-bold uppercase py-4'>Description</h1>
                         <div>
                              <p><span className='text-2xl mt-3'>✤</span>
                                   Responsive Full Stack App With Firebase And Admin Authentication,Dashboard Functionality For Admin And Customer.
                              </p>
                              <p><span className='text-2xl mt-3'>✤</span>
                                   (https://last-assainment.web.app/) This Is Admin Dashboard Link And (Email: aminul@gmail.com, Password: 123456)
                                   Only admins will be able to do their job by logging in here.
                              </p>
                              <p><span className='text-2xl mt-3'>✤</span>
                                   Min Admin Can Add Or Remove Tools And Add Admin, And Also Change Order Status Other Side Customers Can Buy Tools, Check their Status, And Be Able To Give Their Review
                              </p>
                              <h1 className='text-primary text-xl uppercase py-4'>Technologies</h1>
                              <button class="btn btn-sm btn-secondary m-2">JavaScript</button>
                              <button class="btn btn-sm btn-secondary m-2">ReactJs</button>
                              <button class="btn btn-sm btn-secondary m-2"> React Router</button>
                              <button class="btn btn-sm btn-secondary m-2">Bootstrap5</button>
                              <button class="btn btn-sm btn-secondary m-2"> Node js</button>
                              <button class="btn btn-sm btn-secondary m-2">Express js</button>
                              <button class="btn btn-sm btn-secondary m-2"> MongoDB</button>
                              <button class="btn btn-sm btn-secondary m-2">Firebase</button>
                              <button class="btn btn-sm btn-secondary m-2"> Heroku</button>


                         </div>

                         <div className=''>




                              <span>
                                   <a href="https://github.com/Maruf-Bellah" target='_blank'>
                                        <button className='btn m-2  btn-outline btn-secondary btn-small'>github Link</button>
                                   </a>
                              </span>
                              <span>
                                   <a href="https://github.com/Maruf-Bellah/hand-tools-client-site-" target='_blank'>
                                        <button className='btn m-2  btn-outline btn-secondary btn-small'>Clint Site</button>
                                   </a>
                              </span>
                              <span>
                                   <a href="https://github.com/Maruf-Bellah/hand-tools-server-site-" target='_blank'>
                                        <button className='btn m-2  btn-outline btn-secondary btn-small'>server Site</button>
                                   </a>
                              </span>



                         </div>
                    </div>
               </div>
          </div >
     );
};

export default HandTool;