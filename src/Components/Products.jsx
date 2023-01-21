import React from 'react'
import './Products.css'
import { Link } from "react-router-dom";

export default function Products() {
    return(
        <>
        <section>
            <div className='sortby'>
            <label for="sortby">Sort by:-</label>
                <select name="sortby" id="sortby">
                    <option value="0">What's New</option>
                    <option value="1">Popularity</option>
                    <option value="2">Better Discount</option>
                    <option value="3">Customer Rating</option>
                    <option value="4">Recommended</option>
                </select>
            </div>
            <div className='row1'>
                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HERE&NOW</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.824 </span><span className='imgspan1'>1499</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Dennis Lingo</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.554 </span><span className='imgspan1'>1849</span><span className='imgspan2'>70% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7163245/2019/12/3/dcd39608-12bc-47a1-a1bd-78921dfa85131575367574528-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Striped-Casual-Shi-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HIGHLANDER</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.519 </span><span className='imgspan1'>1299</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11008602/2020/1/20/8b494575-e040-4560-853d-0ddb4d4a42021579510958229-Roadster-Men-Shirts-7641579510955741-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.879 </span><span className='imgspan1'>1599</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>
            </div>

            <div className='row1'>
                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11178692/2020/9/21/ab60c81d-45e7-43b3-9439-8c4ffcc018251600663977750-HERENOW-Men-Shirts-9531600663975875-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HERE&NOW</p>
                        <p className='imgp2'>Regular Faded Casual Shirt</p>
                        <span><span className='imgspan'>Rs.1044 </span><span className='imgspan1'>1899</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12407886/2020/12/14/95706236-6fcd-43ae-8197-dae6b7fd4bcf1607926833832-Nautica-Men-Shirts-2381607926831824-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Nautica</p>
                        <p className='imgp2'>Classic Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.1259 </span><span className='imgspan1'>2799</span><span className='imgspan2'>55% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7207526/2018/9/17/15a829dd-a50b-43f4-8759-7c3049ebda5a1537176009685-Roadster-Women-Black-Classic-Regular-Fit-Printed-Casual-Shirt-401537176009506-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Women Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.659 </span><span className='imgspan1'>1199</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.599 </span><span className='imgspan1'>1499</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>
            </div>

            <div className='row1'>
                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11549526/2020/10/22/1be5927d-4a2d-4610-8e24-31cd09242f651603339302348-SASSAFRAS-Mauve-Dobby-Sheer-Boxy-Shirt-8431603339299800-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>SASSAFRAS</p>
                        <p className='imgp2'>Dobby Sheer Boxy Shirt</p>
                        <span><span className='imgspan'>Rs.610 </span><span className='imgspan1'>1299</span><span className='imgspan2'>53% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/6/27/642b24b8-8717-47c7-bb15-3613817230071593207285640-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Dennis Lingo</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.1259 </span><span className='imgspan1'>2799</span><span className='imgspan2'>55% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7163245/2019/12/3/dcd39608-12bc-47a1-a1bd-78921dfa85131575367574528-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Striped-Casual-Shi-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HIGHLANDER</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.519 </span><span className='imgspan1'>1299</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11008602/2020/1/20/8b494575-e040-4560-853d-0ddb4d4a42021579510958229-Roadster-Men-Shirts-7641579510955741-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.879 </span><span className='imgspan1'>1599</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>
            </div>

            <div className='row1'>
                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12974480/2021/1/15/c9b7c790-8c00-4dc6-b106-bf56ae92fe8d1610709794596-Ritu-Kumar-Women-Kurtis-4041610709793171-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Ritu Kumar</p>
                        <p className='imgp2'>Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.824 </span><span className='imgspan1'>1499</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Dennis Lingo</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.554 </span><span className='imgspan1'>1849</span><span className='imgspan2'>70% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7163245/2019/12/3/dcd39608-12bc-47a1-a1bd-78921dfa85131575367574528-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Striped-Casual-Shi-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HIGHLANDER</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.519 </span><span className='imgspan1'>1299</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11008602/2020/1/20/8b494575-e040-4560-853d-0ddb4d4a42021579510958229-Roadster-Men-Shirts-7641579510955741-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.879 </span><span className='imgspan1'>1599</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>
            </div>

            <div className='row1'>
                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HERE&NOW</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.824 </span><span className='imgspan1'>1499</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Dennis Lingo</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.554 </span><span className='imgspan1'>1849</span><span className='imgspan2'>70% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7163245/2019/12/3/dcd39608-12bc-47a1-a1bd-78921dfa85131575367574528-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Striped-Casual-Shi-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HIGHLANDER</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.519 </span><span className='imgspan1'>1299</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7207502/2020/1/22/6f2663c5-a0e1-4f39-b0f7-c03d842d25921579687410977-Roadster-Women-Blue-Regular-Fit-Printed-Casual-Shirt-2901579-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Women Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.629 </span><span className='imgspan1'>1399</span><span className='imgspan2'>55% OFF</span></span>
                    </div>
                </div>
            </div>


            <div className='row1'>
                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HERE&NOW</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.824 </span><span className='imgspan1'>1499</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <Link to='/Details'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Dennis Lingo</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.554 </span><span className='imgspan1'>1849</span><span className='imgspan2'>70% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7163245/2019/12/3/dcd39608-12bc-47a1-a1bd-78921dfa85131575367574528-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Striped-Casual-Shi-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HIGHLANDER</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.519 </span><span className='imgspan1'>1299</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11008602/2020/1/20/8b494575-e040-4560-853d-0ddb4d4a42021579510958229-Roadster-Men-Shirts-7641579510955741-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.879 </span><span className='imgspan1'>1599</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>
            </div>

            <div className='row1'>
                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HERE&NOW</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.824 </span><span className='imgspan1'>1499</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Dennis Lingo</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.554 </span><span className='imgspan1'>1849</span><span className='imgspan2'>70% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7163245/2019/12/3/dcd39608-12bc-47a1-a1bd-78921dfa85131575367574528-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Striped-Casual-Shi-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HIGHLANDER</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.519 </span><span className='imgspan1'>1299</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11008602/2020/1/20/8b494575-e040-4560-853d-0ddb4d4a42021579510958229-Roadster-Men-Shirts-7641579510955741-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.879 </span><span className='imgspan1'>1599</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>
            </div>

            <div className='row1'>
                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HERE&NOW</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.824 </span><span className='imgspan1'>1499</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Dennis Lingo</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.554 </span><span className='imgspan1'>1849</span><span className='imgspan2'>70% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7163245/2019/12/3/dcd39608-12bc-47a1-a1bd-78921dfa85131575367574528-HIGHLANDER-Men-Navy-Blue--Maroon-Slim-Fit-Striped-Casual-Shi-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>HIGHLANDER</p>
                        <p className='imgp2'>Men Slim Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.519 </span><span className='imgspan1'>1299</span><span className='imgspan2'>60% OFF</span></span>
                    </div>
                </div>

                <div className='img1'>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11008602/2020/1/20/8b494575-e040-4560-853d-0ddb4d4a42021579510958229-Roadster-Men-Shirts-7641579510955741-1.jpg" height='220px' alt="" className='img'/>
                    <div className='imgdiv1'>
                        <p className='imgp1'>Roadster</p>
                        <p className='imgp2'>Men Regular Fit Casual Shirt</p>
                        <span><span className='imgspan'>Rs.879 </span><span className='imgspan1'>1599</span><span className='imgspan2'>45% OFF</span></span>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}